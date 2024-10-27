import { describe, expect, it } from "@jest/globals";
import {getProducts, addProducttoCart, deleteAllProductsfromCart, deleteProductfromCart} from "./src/pages/data"
import {productsMock} from "./src/mock/ProductsMock"


describe('getProducts', () => {
    it('should return products from localStorage if available', () => {
        // Arrange
        const mockProducts = [{ id: 1, count: 0 }, { id: 2, count: 1 }];
        localStorage.setItem('products', JSON.stringify(mockProducts));

        // Act
        const products = getProducts();

        // Assert
        expect(products).toEqual(mockProducts);
    });

    
});


describe('getProducts', () => {
    it('should return productsMock if localStorage is empty', () => {
        // Arrange
        localStorage.removeItem('products');

        // Act
        const products = getProducts();

        // Assert
        expect(products).toEqual(productsMock); 
    });
    

    
});

describe('deleteAllProductsfromCart', () => {

    const productsJson = localStorage.getItem('products');
    


    it('should reset product count to zero in the cart', () => {
        // Arrange
        const product = { id: 1, count: 3 };
        const productsMock = [product];
        localStorage.setItem('products', JSON.stringify(productsMock));

        // Act
        deleteAllProductsfromCart(1);

        // Assert
        const updatedProducts = JSON.parse(localStorage.getItem('products') ?? '[]');
        expect(updatedProducts[0].count).toBe(0);
    });

    it('should not change count if product is not found', () => {
        // Arrange
        const productsMock = [{ id: 1, count: 3 }];
        localStorage.setItem('products', JSON.stringify(productsMock));

        // Act
        deleteAllProductsfromCart(2); 

        // Assert
        const updatedProducts = JSON.parse(localStorage.getItem('products') ?? '[]');
        expect(updatedProducts[0].count).toBe(3);
    });
});


describe('deleteProductfromCart', () => {
    it('should decrement product count in the cart', () => {
        // Arrange
        const product = { id: 1, count: 1 };
        const productsMock = [product];
        localStorage.setItem('products', JSON.stringify(productsMock));

        // Act
        deleteProductfromCart(1);

        // Assert
        const updatedProducts = JSON.parse(localStorage.getItem('products') ?? '[]');
        expect(updatedProducts[0].count).toBe(0);
    });

    it('should not change count if product is not found', () => {
        // Arrange
        const productsMock = [{ id: 1, count: 1 }];
        localStorage.setItem('products', JSON.stringify(productsMock));

        // Act
        deleteProductfromCart(2); 

        // Assert
        const updatedProducts = JSON.parse(localStorage.getItem('products') ?? '[]');
        expect(updatedProducts[0].count).toBe(1);
    });
});




describe('addProducttoCart', () => {
    it('should increment product count in the cart', () => {
        // Arrange
        const product = { id: 1, count: 0 };
        const productsMock = [product];
        localStorage.setItem('products', JSON.stringify(productsMock));

        // Act
        addProducttoCart(1);

        // Assert
        const updatedProducts = JSON.parse(localStorage.getItem('products') ?? '[]');
        expect(updatedProducts[0].count).toBe(1);
    });

    it('should not change count if product is not found', () => {
        // Arrange
        const productsMock = [{ id: 1, count: 0 }];
        localStorage.setItem('products', JSON.stringify(productsMock));

        // Act
        addProducttoCart(2); 

        // Assert
        const updatedProducts = JSON.parse(localStorage.getItem('products') ?? '[]');
        expect(updatedProducts[0].count).toBe(0);
    });
});


