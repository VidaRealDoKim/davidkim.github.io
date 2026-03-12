import { Readable } from "node:stream";

import { google } from "googleapis";

type UploadPdfToDriveInput = {
  fileName: string;
  pdfBytes: Uint8Array;
};

type UploadPdfToDriveResult = {
  id: string;
  webViewLink?: string | null;
  webContentLink?: string | null;
};

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function isGoogleDriveConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY &&
      process.env.GOOGLE_DRIVE_FOLDER_ID
  );
}

export async function uploadPdfToDrive(input: UploadPdfToDriveInput): Promise<UploadPdfToDriveResult> {
  const clientEmail = getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  const privateKey = getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY").replace(/\\n/g, "\n");
  const folderId = getRequiredEnv("GOOGLE_DRIVE_FOLDER_ID");

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/drive.file"],
  });

  const drive = google.drive({ version: "v3", auth });

  const createResponse = await drive.files.create({
    requestBody: {
      name: input.fileName,
      parents: [folderId],
      mimeType: "application/pdf",
    },
    media: {
      mimeType: "application/pdf",
      body: Readable.from(Buffer.from(input.pdfBytes)),
    },
    fields: "id, webViewLink, webContentLink",
  });

  if (!createResponse.data.id) {
    throw new Error("Google Drive upload succeeded but no file ID was returned.");
  }

  return {
    id: createResponse.data.id,
    webViewLink: createResponse.data.webViewLink,
    webContentLink: createResponse.data.webContentLink,
  };
}
