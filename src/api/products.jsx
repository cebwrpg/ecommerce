export const IMAGE_URL = "http://localhost:5173/images"; // or your image folder

export const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$99",
    image: `${IMAGE_URL}/image1.jpg`,
    route: "/item/1"
  },
  {
    id: 2,
    name: "Product 2",
    price: "$149",
    image: `${IMAGE_URL}/img2.jpg`,
    route: "/item/2"
  },
  {
    id: 3,
    name: "Product 3",
    price: "$199",
    image: `${IMAGE_URL}/img3.jpg`,
    route: "/item/3"
  }
];
