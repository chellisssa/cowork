export interface PriceCard {
    id: number,
    title: string,
    isPopular: boolean,
    text: string,
    subtext?: string,
    price: number,
    afterText: string,
    advantages: string[],
    tags: string[],
    buttonText: string,
}