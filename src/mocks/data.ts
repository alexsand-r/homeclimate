// data.ts
import type { TelemetryReading } from "../types/telemetry";
export const MOCK_READINGS: TelemetryReading[] = [
  { temperature: 16.4, humidity: 30 },
  { temperature: 21.8, humidity: 47 },
  { temperature: 26.2, humidity: 68 },
  { temperature: null, humidity: null },
];
