import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { addProductTC } from '../../../redux/reducers/getCart';
import { detailProductsTC } from '../../../redux/reducers/getProductsReducer'
import Preloader from '../../commons/preloader'
import Header from '../../header/Header';
import Detail from './detail';

class DetailContainer extends PureComponent {
    componentDidMount() {
        let id = this.props.match.params.id
        this.props.detailProductsTC(id)
    }
    onSubmit = (e) => {
        this.props.addProductTC(this.props.user[0].id, this.props.match.params.id, e.quantity)
    }
    render() {
        return (
            <>
                <Header />
                {this.props.isFetching ? <Preloader /> : null}
                {!this.props.user[0] ? <Redirect to="/login" /> : null}
                <Detail onSubmit={this.onSubmit} products={this.props.products} />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products.product,
    user: state.user.userData,
    isFetching: state.products.isFetching
})

const RouteDetail = withRouter(DetailContainer)

export const Details = connect(mapStateToProps, { detailProductsTC, addProductTC })(RouteDetail);