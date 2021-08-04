import * as axios from 'axios';

const i = axios.create({
    baseURL: 'https://fakestoreapi.com/'
})

export const getProducts = () => {
    return i.get('products?limit=5').then(response => response.data)
}

export const detailProducts = (id) => {
    return i.get(`products/${id}`).then(response => response.data)
}

export const getCategory = () => {
    return i.get(`products/categories`).then(response => response.data)
}

export const getSpecificCategory = (category) => {
    return i.get(`products/category/${category}`).then(response => response.data)

}

export const getAllUserData = () => {
    return i.get('users').then(response => response.data)
}

export const getCart = (id) => {
    return i.get(`carts/user/${id}`).then(response => response.data)
}

export const addProduct = (userId, productId, quantity) => {
    let date = Date.now()
    return i.post(`carts`, {
        userId,
        date,
        products: [{ productId: productId, quantity: quantity }]
    })
}

export const login = ({ username, password }) => {
    return i.post('auth/login', { username, password })
}