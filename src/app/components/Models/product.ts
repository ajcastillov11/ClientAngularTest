export class Product {
    constructor(productId: number,
      productName: string,
      introductionDate: string,
      price: string,
      url: string,
      categoryId: number
        ) {
      this.productId = productId;
      this.productName = productName;
      this.introductionDate = introductionDate;
      this.price = price;
      this.url = url;
      this.categoryId = categoryId;

    }
    productId: number;
    productName: string;
    introductionDate: string;
    price: string;
    url: string ;
    categoryId: number;
}
