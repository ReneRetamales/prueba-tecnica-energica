// Generated by https://quicktype.io

export interface AutosResponse {
  brand: string;
  count: number;
  image?: string;
  logo: string;
  model?: string;
  path: string;
  type: Type;
}

export enum Type {
  Brand = "brand",
  Model = "model",
}
