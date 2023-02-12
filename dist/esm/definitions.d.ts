export interface CapacitorWebAuthPlugin {
    login(options: {
        url: string;
        redirectScheme: string;
    }): Promise<{
        value: string;
    }>;
}
