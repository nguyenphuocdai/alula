export class product {
  constructor(
    public id: number,
    public name: String,
    public price: number,
    public currency: String,
    public image: String,
    public url: String,
    public shortDesc: String,
    public priceDiscount?: number,
    public added?: boolean,
    public quatity?: number
  ) {}
}

export const productsCollection: product[] = [
  {
    id: 10,
    name: "United Color beniton",
    price: 500.00,
    priceDiscount: 450.99,
    currency: "EUR",
    image: "assets/img/products/medium10.jpg",
    url:
      "https://static2.jassets.com/p/Puma-917-Mid-2.0-Ind.-Blue-Sneakers-4118-935263-1-product2.jpg",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatisautem consequuntur tempora magnam possimus sunt"
  },
  {
    id: 11,
    name: "Adidas sports shoes",
    price: 249.99,
    priceDiscount: 200.99,
    currency: "EUR",
    image: "assets/img/products/medium11.jpg",
    url:
      "http://scene7.zumiez.com/is/image/zumiez/pdp_hero/adidas-Flashback-White-%26-Black-Shoes-_272010-front-US.jpg",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatisautem consequuntur tempora magnam possimus sunt"
  },
  {
    id: 12,
    name: "Adidas",
    price: 240.99,
    priceDiscount: 220.99,
    currency: "EUR",
    image: "assets/img/products/medium12.jpg",
    url:
      "https://images-na.ssl-images-amazon.com/images/I/810h11HFM3L._UY395_.jpg",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatisautem consequuntur tempora magnam possimus sunt"
  },
  {
    id: 13,
    name: "PUMA sports ",
    price: 119.99,
    priceDiscount: 118.99,
    currency: "EUR",
    image: "assets/img/products/medium13.jpg",
    url:
      "http://assets.myntassets.com/assets/images/1920391/2017/6/8/11496905404701-Adidas-Men-Sports-Shoes-3121496905404588-5.jpg",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatisautem consequuntur tempora magnam possimus sunt"
  },
  {
    id: 14,
    name: "puma track",
    price: 599.99,
    priceDiscount: 540.99,
    currency: "EUR",
    image: "assets/img/products/medium14.jpg",
    url:
      "https://images-na.ssl-images-amazon.com/images/I/81t38mrch6L._UL1500_.jpg",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatisautem consequuntur tempora magnam possimus sunt"
  },
  {
    id: 15,
    name: "Adidas track",
    price: 149.99,
    priceDiscount: 100.99,
    currency: "EUR",
    image: "assets/img/products/medium15.jpg",
    url:
      "https://cdn.shopclues.com/images/thumbnails/37609/320/320/INDUSNBLREDb14634988211480324580.jpg",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatisautem consequuntur tempora magnam possimus sunt"
  },
  {
    id: 16,
    name: "United Color beniton",
    price: 499.99,
    priceDiscount: 450.99,
    currency: "EUR",
    image: "assets/img/products/medium16.jpg",
    url:
      "https://images-na.ssl-images-amazon.com/images/I/81t38mrch6L._UL1500_.jpg",
    shortDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatisautem consequuntur tempora magnam possimus sunt"
  }
];
