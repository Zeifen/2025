
const categorys = [
    {
        id: 1,
        name: "Fruits"
    },
    {
        id: 2,
        name: "Vegetables"
    },
];

const products = [
    {
        id: 1,
        cat_id: 1,
        name: "apple",
        price: 1000
    },
    {
        id: 2,
        cat_id: 1,
        name: "orange",
        price: 2000
    },
    {
        id: 3,
        cat_id: 2,
        name: "potato",
        price: 2000
    },
    {
        id: 4,
        cat_id: 2,
        name: "tomato",
        price: 3000
    },
];

const countrys = [
    {
        id: 1,
        name: "Mexico"
    },
    {
        id: 2,
        name: "Argentina"
    },
    {
        id: 3,
        name: "Chile"
    },
    {
        id: 4,
        name: "Venezuela"
    },
];

const category_products = [
    {
        id:1,
        nombre: 'abarrotes'
    },
    {
        id:2,
        nombre: 'Lácteos'
    },
    {
        id:3,
        nombre: 'Carnes'
    },
];

const atributes = [
    {
        id:1,
        nombre: 'Perecible'
    },
    {
        id:2,
        nombre: 'Armable'
    },
    {
        id:3,
        nombre: 'Multiuso'
    },
];

const images = [{
    id: 1,
    titulo: "Cer1",
    nombre: './../cer1.jpg',
    caption: 'Scrum',
},
{
    id: 2,
    titulo: "Cer2",
    nombre: '../../cer2.jpg',
    caption: 'Net4Skills',
},
{
    id: 3,
    titulo: "Cer3",
    nombre: '../../cer3.jpg',
    caption: 'SQL y MySQL',
}
];

export {products, categorys, countrys, category_products, atributes, images};

