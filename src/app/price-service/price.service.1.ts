export class PriceService {
  constructor() {}
  calculatorTotalPrice(basePrice: number, state: string){
    const tax = Math.random();
    return basePrice + tax;
  }
}
