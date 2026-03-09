# David Kim Portfolio

Premium personal portfolio website for David Kim (UX/UI & Product Designer), built with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Area Administrativa de Orcamentos

Rota administrativa:

- `/admin/orcamentos`

Funcionalidades implementadas:

- Formulario para montar orcamento
- Geracao de PDF no servidor
- Download automatico do PDF no navegador
- Upload opcional para Google Drive (quando configurado)

### Configuracao

1. Copie `.env.example` para `.env.local`.
2. Ajuste os dados da empresa.
3. (Opcional) Configure as variaveis do Google Drive com uma Service Account.

Para integracao com Drive funcionar:

- Compartilhe a pasta de destino com o email da Service Account
- Defina o ID da pasta em `GOOGLE_DRIVE_FOLDER_ID`

Endpoint usado pela area admin:

- `POST /api/admin/quotes`

## Fonts

`Poppins` is loaded using `next/font/google`.

`Quincy CF` is loaded via local `@font-face`. Add licensed files into `public/fonts/`:

- `QuincyCF-Regular.woff2`
- `QuincyCF-Bold.woff2`

Without those files, heading typography falls back to system serif fonts.
