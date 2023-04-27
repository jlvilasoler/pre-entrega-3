const productos = [{
    id: 60001,
    foto: "./img/Aguacongasnativa600ml.png",
    articulo: "Agua con gas",
    descripcion: "BT 600ml",
    marca: "NATIVA",
    precio: 148.50,
    cantidadCompra: 1
},
{
    id: 60002,
    foto: "./img/DentalcleanHilodentalconcera130m.jpg",
    articulo: "Hilo Dental",
    descripcion: "Con cera 130m",
    marca: "DENTALCLEAN",
    precio: 119.00,
    cantidadCompra: 1
},
{
    id: 60003,
    foto: "./img/EnjuagueBucalDENTALCLEANBlueDiamond-Mentasuave.jpg",
    articulo: "Enjuague Bucal",
    descripcion: "Blue Diamond",
    marca: "DENTALCLEAN",
    precio: 250.50,
    cantidadCompra: 1
},
{
    id: 60004,
    foto: "./img/EnjuagueBucalDENTALCLEANGreenDiamond-HortelaSuave.jpg",
    articulo: "Enjuague Bucal",
    descripcion: "Green Diamond",
    marca: "DENTALCLEAN",
    precio: 250.00,
    cantidadCompra: 1
},
{
    id: 60005,
    foto: "./img/CEPERASalsadeSoja150ml.jpg",
    articulo: "Salsa de Soja",
    descripcion: "150ml",
    marca: "CEPERA",
    precio: 59.00,
    cantidadCompra: 1
},
{
    id: 60006,
    foto: "./img/CEPERASalsacalabresayPimienta150ml.jpg",
    articulo: "Salsa",
    descripcion: "Calabresa y Pimienta",
    marca: "CEPERA",
    precio: 49.00,
    cantidadCompra: 1
},
{
    id: 60007,
    foto: "./img/MayonesaSalsayCebollaSinGluten.jpg",
    articulo: "Mayonesa",
    descripcion: "Salsa y Cebolla",
    marca: "CEPERA",
    precio: 49.00,
    cantidadCompra: 1
},
{
    id: 60008,
    foto: "./img/CEPERASalsaInglesa150ml.jpg",
    articulo: "Salsa Inglesa",
    descripcion: "150ml",
    marca: "CEPERA",
    precio: 49,
    cantidadCompra: 1
},
{
    id: 60009,
    foto: "./img/dulcedeleche-los-nietitos.png",
    articulo: "Dulce de leche",
    descripcion: "700g",
    marca: "LOS NIETITOS",
    precio: 130.00,
    cantidadCompra: 1
},
{
    id: 60010,
    foto: "./img/cocacola1.jpg",
    articulo: "Coca Cola",
    descripcion: "Sabor Original 1.5L",
    marca: "COCA COLA",
    precio: 170.00,
    cantidadCompra: 1
},
{
    id: 60011,
    foto: "./img/Patricia340cc.png",
    articulo: "Cerveza",
    descripcion: "340cc",
    marca: "PATRICIA",
    precio: 100.00,
    cantidadCompra: 1
},
{
    id: 60012,
    foto: "./img/salusfrutte-limonada.png",
    articulo: "Agua Saborizada",
    descripcion: "Frutte Limonada 1L",
    marca: "SALUS",
    precio: 110.00,
    cantidadCompra: 1
}
];








let prodBuscado = prompt("INGRESA EL ARTICULO Y VERÉ SI SE ENCUENTRA EN LA LISTA:");
let productoEncontrado = productos.filter((producto) => producto.marca.toLowerCase().includes(prodBuscado.toLowerCase()));
console.log(productoEncontrado)

if(productoEncontrado.length > 0){
    console.log("Producto encontrado")
}else{
   console.log("Producto no encontrado")
}
