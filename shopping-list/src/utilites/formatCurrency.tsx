const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
});

export default function formatCurrency(amount:number):string {
    return CURRENCY_FORMATTER.format(amount);
}