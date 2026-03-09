export const MATERIAL_PRICING = {
  ABS: 38,
  POM: 65,
  PC: 75,
} as const;

export type MaterialType = keyof typeof MATERIAL_PRICING;

export type QuoteComputationInput = {
  material: MaterialType;
  quantity: number;
};

export type QuoteComputationResult = {
  unitPrice: number;
  totalPrice: number;
};

export function computeQuoteValues(input: QuoteComputationInput): QuoteComputationResult {
  const unitPrice = MATERIAL_PRICING[input.material];
  return {
    unitPrice,
    totalPrice: unitPrice * input.quantity,
  };
}

export function isMaterialType(value: string): value is MaterialType {
  return value in MATERIAL_PRICING;
}

export function materialOptions(): MaterialType[] {
  return Object.keys(MATERIAL_PRICING) as MaterialType[];
}
