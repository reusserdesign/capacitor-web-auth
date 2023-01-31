export interface CapacitorWebAuthPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
