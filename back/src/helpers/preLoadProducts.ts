import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
  id?:number;
}

const productsToPreLoad: IProduct[] = [

  //PRODUCTOS DE HENRY CON LA IMAGEN ROTA
  
  // {
  //   name: "iPhone 11",
  //   price: 699,
  //   description:
  //     "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
  //   image:
  //     "https://www.apple.com/v/iphone-11/a/images/meta/og__f2j3dwkzna2u.png",
  //   categoryId: 1,
  //   stock: 10,
  // },
  // {
  //   name: "MacBook Air",
  //   price: 999,
  //   description:
  //     "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
  //   image:
  //     "https://www.apple.com/v/macbook-air/a/images/meta/og__d5k62k8b4qka.png",
  //   categoryId: 2,
  //   stock: 10,
  // },
  // {
  //   name: "iPad Pro",
  //   price: 799,
  //   description:
  //     "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
  //   image:
  //     "https://www.apple.com/v/ipad-pro/a/images/meta/og__d8m6x7smkntm.png",
  //   categoryId: 3,
  //   stock: 10,
  // },
  // {
  //   name: "Apple Watch Series 6",
  //   price: 399,
  //   description:
  //     "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
  //   image:
  //     "https://www.apple.com/v/apple-watch-series-6/a/images/meta/og__c1zv8c8n7q06.png",
  //   categoryId: 4,
  //   stock: 10,
  // },
  // {
  //   name: "AirPods Pro",
  //   price: 249,
  //   description:
  //     "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
  //   image:
  //     "https://www.apple.com/v/airpods-pro/a/images/meta/og__c1zv8c8n7q06.png",
  //   categoryId: 5,
  //   stock: 10,
  // },
  // {
  //   name: "HomePod mini",
  //   price: 99,
  //   description:
  //     "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
  //   image:
  //     "https://www.apple.com/v/homepod-mini/a/images/meta/og__d5k62k8b4qka.png",
  //   categoryId: 6,
  //   stock: 10,
  // },



  //productos que agregue a la base de datos 

  {
  
    name: 'Apple Watch Series 7',
    price: 299,
    description:"El Apple Watch Series 7 es un reloj inteligente con una pantalla más grande y funciones avanzadas de seguimiento de salud.",
    stock: 10,
    image: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7-availability_hero_10052021_big.jpg.large.jpg',
    categoryId: 9,
  },
  {
    
    name: 'iPhone 13',
    price: 699,
    description:"El iPhone 13 es el último teléfono inteligente de Apple con una potente cámara y un rendimiento excepcional.",
    stock: 5,
    image: 'https://m.media-amazon.com/images/I/61p1I5f5ApL._AC_SL1500_.jpg',
    categoryId: 1,
  },
  {
   
    name: 'MacBook Pro',
    price: 899,
    description:" El MacBook Pro es una potente computadora portátil diseñada para profesionales creativos y usuarios exigentes.",
    stock: 3,
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/230125131405-macbook-pro-14-inch-2023-review-cnnu-7.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp',
    categoryId: 2,
  },
  {
      id:4,
      name: 'Rtx 3050ti',
      price: 150,
      description:"Tarjeta gráfica Rtx 3050ti para juegos y aplicaciones de alto rendimiento.",
      stock: 3,
      image: 'https://m.media-amazon.com/images/I/71Qa+vAazvL._AC_SL1500_.jpg',
      categoryId: 9,
    },
    {
     
      name: 'Logitech g502',
      price: 19,
      description:"Ratón Logitech g502 con sensor de alta precisión y botones programables.",
      stock: 3,
      image: 'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg',
      categoryId: 9,
    },
    {
      
      name: 'Teclado RoyalKludge',
      price: 25,
      description:"Teclado mecánico RoyalKludge con retroiluminación RGB y diseño compacto.",
      stock: 3,
      image: 'https://m.media-amazon.com/images/I/61nghmq8GPL._AC_SL1500_.jpg',
      categoryId: 9,
    },
    {
   
      name: 'Tecla Gigante Enter',
      price: 3,
      description:"Tecla Gigante Enter para agregar diversión a tu teclado.",
      stock: 3,
      image: 'https://m.media-amazon.com/images/I/61jCGWTu-mL._AC_SL1017_.jpg',
      categoryId: 9,
    },
   

    //articulos fuer adel carousel 

    {
  
      name: '27 Inch Gaming Monitor',
      price: 170,
      description:"Fast IPS QHD 2560 x 1440p, 180Hz 1ms GTG Vertical Monitor, Adaptive Sync, 95% DCI-P3, Height Pivot Stand, Eye Care, VESA, HDMI 2.1 144Hz, DisplayPort 1.4, P27A2R",
      stock: 10,
      image: 'https://m.media-amazon.com/images/I/71VgMc+nWcL._AC_SL1500_.jpg',
      categoryId: 7,
    },
    {
  
      name: '32" Curved Gaming Monitor',
      price: 199,
      description:"2k 1440p 144Hz Monitor, QHD 2560 x 1440, 1500R Frameless VA, Adaptive Sync, 95% DCI-P3, VESA, Low Blue Light, Tilt, HDMI 2.0, DisplayPort 1.4, N32SQ Plus",
      stock: 10,
      image: 'https://m.media-amazon.com/images/I/71pP9atM-pL._AC_SL1500_.jpg',
      categoryId: 7,
    },
    {
  
      name: 'SANSUI 27 Inch WQHD Monitor',
      price: 153,
      description:"WQHD 2560 x 1440 Gaming Monitor 180Hz 1ms Fast IPS Computer Monitor, HDMI 2.0 x2 | DP 1.2 x2 | VESA Mount, 120% sRGB HDR Eye Care Frameless Metal Stand and Base (ES-G27F2Q)",
      stock: 10,
      image: 'https://m.media-amazon.com/images/I/81Qvgd5Ge-L._AC_SL1500_.jpg',
      categoryId: 7,
    },

    {
  
      name: 'SAMSUNG Galaxy Tab A9+ Plus 11',
      price: 179,
      description:"64GB Android Tablet, Big Screen, Quad Speakers, Upgraded Chipset, Multi Window Display, Slim, Light, Durable, Kids Friendly Design, US Version, 2024, Silver",
      stock: 10,
      image: 'https://m.media-amazon.com/images/I/61h+qeD-qfL._AC_SL1500_.jpg',
      categoryId: 3,
    },
    {
  
      name: 'Amazon Fire HD 10 tablet',
      price: 95,
      description:"built for relaxation, 10.1 vibrant Full HD screen, octa-core processor, 3 GB RAM, latest model (2023 release), 32 GB, Black",
      stock: 10,
      image: 'https://m.media-amazon.com/images/I/61mmQjjSEeL._AC_SL1000_.jpg',
      categoryId: 3,
    },
    {
  
      name: 'JBL Tune 510BT',
      price: 40,
      description:"ireless On-Ear Headphones with Purebass Sound - Black",
      stock: 10,
      image: 'https://m.media-amazon.com/images/I/61ZDwijKtxL._AC_SL1500_.jpg',
      categoryId: 4,
    },
    {
  
      name: 'BERIBES Bluetooth Headphones',
      price: 27,
      description:"Over Ear, 65H Playtime and 6 EQ Music Modes Wireless Headphones with Microphone, HiFi Stereo Foldable Lightweight Headset, Deep Bass for Home Office Cellphone PC Ect.",
      stock: 10,
      image: 'https://m.media-amazon.com/images/I/71F2ccIPPLL._AC_SL1500_.jpg',
      categoryId: 4,
    },
    {
  
      name: 'Panasonic Headphones',
      price: 17,
      description:"Lightweight Over the Ear Wired Headphones with Clear Sound and XBS for Extra Bass, Long Cord, 3.5mm Jack for Phones and Laptops – RP-HT161-K (Black)",
      stock: 10,
      image: 'https://m.media-amazon.com/images/I/61N0YijxlcL._AC_SL1200_.jpg',
      categoryId: 4,
    },
    {
  
      name: 'SAMSUNG 990 PRO SSD ',
      price: 170,
      description:"2TB PCIe 4.0 M.2 2280 Internal Solid State Hard Drive, Seq. Read Speeds Up to 7,450 MB/s for High End Computing, Gaming, and Heavy Duty Workstations, MZ-V9P2T0B/AM",
      stock: 10,
      image: 'https://m.media-amazon.com/images/I/61N0YijxlcL._AC_SL1200_.jpg',
      categoryId: 8,
    },
    {
  
      name: 'TEAMGROUP T-Force Vulcan Z 240GB',
      price: 17,
      description:"240GB SLC Cache 3D NAND TLC 2.5 Inch SATA III Internal Solid State Drive SSD (R/W Speed up to 520/450 MB/s) T253TZ240G0C101",
      stock: 10,
      image: 'https://m.media-amazon.com/images/I/91FAhElMh8L._AC_SL1500_.jpg',
      categoryId: 8,
    },
    {
  
      name: 'SP 512GB SSD',
      price: 29,
      description:"512GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5 7mm (0.28) Internal Solid State Drive (SP512GBSS3A55S25)",
      stock: 10,
      image: 'https://m.media-amazon.com/images/I/71YkdVQ3+PL._AC_SL1500_.jpg',
      categoryId: 8,
    },
    {
  
      name: '4K Digital Camera for Photography',
      price: 88,
      description:"Autofocus 48MP 4K Camera with SD Card, 180° 3.0 inch Flip Screen Vlogging Camera for YouTube Video Compact Cameras with 16X Digital Zoom, Anti-Shake, 2 Batteries",
      stock: 10,
      image: 'https://m.media-amazon.com/images/I/81odLYRPfQL._AC_SL1500_.jpg',
      categoryId: 5,
    },
    {
  
      name: 'Canon EOS Rebel T7',
      price: 599,
      description:"DSLR Camera|2 Lens Kit with EF18-55mm + EF 75-300mm Lens, Black",
      stock: 10,
      image: 'https://m.media-amazon.com/images/I/71ZYxtmYkPL._AC_SL1500_.jpg',
      categoryId: 5,
    },
    {
  
      name: '4K Digital Camera 64MP',
      price: 49,
      description:"Auto Focus Video Camera with 32GB Card 18X Zoom 2 Batteries Compact Vlog Camera for Beginner Student Kids Teen Black",
      stock: 10,
      image: 'https://m.media-amazon.com/images/I/7169XCEgFNL._AC_SL1500_.jpg',
      categoryId: 5,
    },





];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
