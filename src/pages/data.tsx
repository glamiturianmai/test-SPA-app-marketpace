
import { productsMock } from '../mock/ProductsMock';



export const getProducts = () => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : productsMock;
};

export const addProducttoCart = (productId: number) => {
    const products = getProducts();
    const product = products.find((p: { id: number; }) => p.id === productId);
    if (product) {
        product.count = product.count + 1
        localStorage.setItem('products', JSON.stringify(products));
    }
};

export const deleteProductfromCart = (productId: number) => {
    const products = getProducts();
    const product = products.find((p: { id: number; }) => p.id === productId);
    if (product) {
        product.count = product.count - 1
        localStorage.setItem('products', JSON.stringify(products));
    }
};

export const deleteAllProductsfromCart = (productId: number) => {
    const products = getProducts();
    const product = products.find((p: { id: number; }) => p.id === productId);
    if (product) {
        product.count = 0
        localStorage.setItem('products', JSON.stringify(products));
    }
};


