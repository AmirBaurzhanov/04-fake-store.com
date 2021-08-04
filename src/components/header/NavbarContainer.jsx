import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCartTC } from '../../redux/reducers/getCart';
import { getCategoryTC } from '../../redux/reducers/getCategory';
import Navbar from './Navbar'

class NavbarContainer extends Component {
    componentDidMount() {
        this.props.getCategoryTC()
    }
    render() {
        return (
            <div>
                <Navbar cart={this.props.cart} category={this.props.category} />
            </div>
        );
    }
}


let mapStateToProps = (state) => ({
    category: state.category.category,
    cart: state.cart.cartProducts.length,
    isFetching: state.category.isFetching
})

export const NavbarPage = connect(mapStateToProps, { getCategoryTC, getCartTC })(NavbarContainer);