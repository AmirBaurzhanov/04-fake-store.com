
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { checkCartTC } from '../../redux/reducers/getCart';
import Cart from './cart';

class CartContainer extends PureComponent {
    componentDidMount() {
        this.props.products.map(p => {
            this.props.cart.map(c => {
                if (JSON.stringify(p.id) === JSON.stringify(c.productId)) {
                    return this.props.checkCartTC(p)
                }
            })
        })
    }
    render() {
        return (
            <div>
                <Cart cartProducts={this.props.cartProducts} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
    cartProducts: state.cart.cartProducts,
    products: state.products.products
})

export const CartPage = connect(mapStateToProps, { checkCartTC })(CartContainer);