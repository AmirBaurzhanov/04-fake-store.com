import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { getSpecificCategoryTC } from '../../redux/reducers/getCategory';
import Preloader from '../commons/preloader';
import Header from '../header/Header';
import Category from './category'

class CategoryContainer extends PureComponent {
    componentDidMount() {
        let category = this.props.match.params.category
        this.props.getSpecificCategoryTC(category)
    }
    render() {
        return (
            <div>
                <Header />
                {this.props.isFetching ? <Preloader /> : null}
                {!this.props.user ? <Redirect to="/login" /> : null}
                <Category products={this.props.categoryProducts} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    category: state.category.category,
    user: state.user.userData[0],
    categoryProducts: state.category.categoryProducts
})

const RouteCategory = withRouter(CategoryContainer)

export const CategoryPage = connect(mapStateToProps, { getSpecificCategoryTC })(RouteCategory);
