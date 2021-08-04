import React from 'react';
import { NavLink } from 'react-router-dom';

const Products = (props) => {
    return (
        <div>
            <div className="container">
                <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {props.products.map(r =>
                                <div className="col mb-5" key={r.id}>
                                    <div className="card h-100">
                                        {/* Product image*/}
                                        <img className="card-img-top" src={r.image} alt="..." />
                                        {/* Product details*/}
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                {/* Product name*/}
                                                <h5 className="fw-bolder">{r.title}</h5>
                                                {/* Product price*/}
                                                ${r.price}
                                            </div>
                                        </div>
                                        {/* Product actions*/}
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><NavLink className="btn btn-outline-dark mt-auto" to={`/product/${r.id}`}>View options</NavLink></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Products;
