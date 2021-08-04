import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getProductsTC } from '../../redux/reducers/getProductsReducer'
import Preloader from '../commons/preloader'
import Header from '../header/Header';
import Products from './products';

class ProductsContainer extends PureComponent {
    componentDidMount() {
        this.props.getProductsTC()
    }
    render() {
        return (
            <>
                <Header />
                {this.props.isFetching ? <Preloader /> : null}
                {!this.props.user ? <Redirect to="/login" /> : null}
                <Products products={this.props.products} />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products.products,
    user: state.user.userData[0],
    isFetching: state.products.isFetching
})


export const ProductsPage = connect(mapStateToProps, { getProductsTC })(ProductsContainer)