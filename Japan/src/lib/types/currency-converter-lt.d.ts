declare module 'currency-converter-lt' {
    export default class CurrencyConverter {
        constructor(config?: {
            from?: string;
            to?: string;
            amount?: number;
            isDecimalComma?: boolean;
        });

        convert(): Promise<number>;
    }
}
