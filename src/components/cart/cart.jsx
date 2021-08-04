import React from 'react';

const Cart = (props) => {
    return (
        <div className="container">
            <table className="table caption-top">
                <caption>Your cart</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cartProducts.map(c =>
                        <tr key={c.id}>
                            <th scope="row">{c.id}</th>
                            <td><img className="w-25" src={c.image} alt="..." /></td>
                            <td>{c.title}</td>
                            <td>${c.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Cart;