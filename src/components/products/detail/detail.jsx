import { Field, Form, Formik } from 'formik';
import React from 'react';

const Detail = (props) => {
    const initalValues = {
        productId: props.products.id,
        userId: props.userId,
        quantity: 1,
    }
    return (
        <div>
            <Formik initialValues={initalValues} onSubmit={props.onSubmit}>
                <Form>
                    <section className="py-5">
                        <div className="container px-4 px-lg-5 my-5">
                            <div className="row gx-4 gx-lg-5 align-items-center">
                                <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={props.products.image} alt="..." /></div>
                                <div className="col-md-6">
                                    <div className="small mb-1">{props.products.category}</div>
                                    <h1 className="display-5 fw-bolder">{props.products.title}</h1>
                                    <div className="fs-5 mb-5">
                                        <span>${props.products.price}</span>
                                    </div>
                                    <p className="lead">{props.products.description}</p>
                                    <div className="d-flex">
                                        <Field component="input" name="quantity" className="form-control text-center me-3" id="inputQuantity" type="num" style={{ maxWidth: '3rem' }} />
                                        <button className="btn btn-outline-dark flex-shrink-0" type="submit">
                                            <i className="bi-cart-fill me-1" />
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Form>
            </Formik>
        </div>
    );
}

export default Detail;
