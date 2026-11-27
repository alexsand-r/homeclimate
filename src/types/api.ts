// api.ts
export type ApiReading = {
  temperature: number | null;
  humidity: number | null;
  unit: string;
  sensor: string;
};
