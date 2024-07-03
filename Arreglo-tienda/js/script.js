let numeroRegistros;
let nuevoProducto;
let listaBusqueda = [];
let tienda = [
    {producto: 'Arroz', tipoProducto: 'granos', tipoUnidad: 'gramos', cantidad: 1000, precio: 2450},
    {producto: 'Papa', tipoProducto: 'fruver', tipoUnidad: 'gramos', cantidad: 500, precio: 1000},
    {producto: 'Mora', tipoProducto: 'fruver', tipoUnidad: 'gramos', cantidad: 500, precio: 1500},
    {producto: 'Trucha', tipoProducto: 'carnes', tipoUnidad: 'gramos', cantidad: 500, precio: 9000},
    {producto: 'Pollo Entero', tipoProducto: 'carnes', tipoUnidad: 'gramos', cantidad: 500, precio: 4500}
];

nuevoProducto = {producto: 'Res', tipoProducto: 'carnes', tipoUnidad: 'gramos', cantidad: 500, precio: 7500};
tienda.push(nuevoProducto);
tienda[2].precio = 3000;
numeroRegistros = tienda.length;

for (let i = 0; i < numeroRegistros; i++) {
    console.log(tienda[i]);
}

for (let i = 0; i < numeroRegistros; i++) {
    if (tienda[i].tipoProducto === 'fruver') {
        listaBusqueda.push(tienda[i]);
    }
}

console.log(listaBusqueda);
