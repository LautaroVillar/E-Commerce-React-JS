const products = [
  {
    id: "01",
    name: "Nike Court Legacy",
    category: "moda",
    description:
      "Las Zapatillas Nike Court Legacy rinden tributo al clásico diseño de tenis que se reinventa para traer un modelo en cuero, aportando mayor resistencia y elegancia a este calzado.",
    price: 23.099,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw32ace6c9/products/NI_CU4150-102/NI_CU4150-102-1.JPG",
    stock: 5,
  },
  {
    id: "02",
    name: " Nike Venture Runner",
    category: "moda",
    description:
      "Las Zapatillas Nike Venture Runner se inspiran en el calzado de los años 80 que revolucionó el running. La capellada es de malla flexible para mejorar la transpirabilidad y con costuras visibles para darte un look casual.",
    price: 27.499,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7f97754f/products/NI_CK2944-403/NI_CK2944-403-1.JPG",
    stock: 15,
  },
  {
    id: "03",
    name: "Adidas Grand Court",
    category: "moda",
    description:
      "Con las Zapatillas adidas Grand Court, vas a lucir un estilo casual y cómodo para todos los días, gracias a sus materiales de primera calidad.",
    price: 25.299,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwde470f8d/products/AD_F36393/AD_F36393-1.JPG",
    stock: 7,
  },
  {
    id: "04",
    name: "Puma BMW Motorsport R78",
    category: "moda",
    description:
      "Las zapatillas Puma BMW Motorsport R78 son la marca de tu pasión. Confeccionadas con un estilo urbano perfecto y detalles de BMW, son un must para todos los amantes del motor y el ADN Puma.",
    price: 17.899,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb9f6f5b8/products/PU_307291-01/PU_307291-01-1.JPG",
    stock: 3,
  },
  {
    id: "05",
    name: "Nike Zoom Winflo 8",
    category: "deportivas",
    description:
      "Para los amantes del running y la velocidad, las zapatillas Nike Zoom Winflo 8 son perfectas. Porque acompañan tu ritmo dándote amortiguación en cada pisada.",
    price: 36.299,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw343c2c59/products/NI_CW3419-010/NI_CW3419-010-1.JPG",
    stock: 10,
  },
  {
    id: "06",
    name: " Nike Wildhorse 7",
    category: "deportivas",
    description:
      "Las zapatillas Nike Wildhorse 7 son zapatillas todo terreno. Porque garantizan durabilidad para carreras largas y caminos difíciles.",
    price: 43.999,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw197bb13d/products/NI_CZ1856-003/NI_CZ1856-003-1.JPG",
    stock: 4,
  },
  {
    id: "07",
    name: "Puma Retaliate 2",
    category: "deportivas",
    description:
      "Sumale a tus rutinas de entrenamiento o carrera las Zapatillas Puma Retaliate 2. Su diseño incluye un aspecto fresco a la línea Contemporary Essentials de la marca, su capellada en mesh las hace ligeras y se ajustan perfecto a tu pie.",
    price: 24.199,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9e2e89eb/products/PU_378144-03/PU_378144-03-1.JPG",
    stock: 4,
  },
  {
    id: "08",
    name: "Salomon Daintree Mid Gore Tex M",
    category: "aventura",
    description:
      "Transforma cualquier camino en tu pista de carreras con las Zapatillas Salomon Daintree Mid Gore Tex M, diseñadas con una entresuela acolchada que mejora tus pasos y plantilla OrthoLite para brindar una amortiguación superior.",
    price: 45.199,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd2b9762f/products/SL_416784/SL_416784-1.JPG",
    stock: 4,
  },
  {
    id: "09",
    name: "Salomon Supercross 3",
    category: "aventura",
    description:
      "Las Zapatillas Salomon Supercross 3para que corras sin límites y en cualquier superficie. La suela Contagrip®, que aporta mayor agarre en terrenos irregulares o embarrados, te permite lucirte en cualquier lado gracias a sus tacos profundos. ",
    img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5bb23e41/products/SL_414496/SL_414496-1.JPG",
    price: 31.499,
    stock: 4,
  },
];

export const data = new Promise((resolve, reject) => {
  //acciones
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve(products);
    } else {
      reject("Algo salio mal");
    }
  }, 3000);
});
