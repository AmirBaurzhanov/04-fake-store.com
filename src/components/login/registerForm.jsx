import { ErrorMessage, Field, Form, Formik } from 'formik';
import f from './static/style.module.css'
import React from 'react';
import * as Yup from 'yup'

const RegisterForm = (props) => {
    const initalValues = {
        username: '',
        password: '',
        confirmpassword: '',
    }
    const validationSchema = Yup.object({
        username: '',
        password: Yup.string().required('Invalid password'),
        confirmpassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('requeried'),
    })
    return (
            <Formik initialValues={initalValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
                {
                    formik => {
                        return <Form>
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>
                                <ErrorMessage className="alert alert-danger" role="alert" name="confirmpassword" component="div" />
                                <div className="form-floating mb-3">
                                    <Field component="input" type="text" name="username" className="form-control" id="floatingInputUsername" placeholder="myusername" required autoFocus />
                                    <label htmlFor="floatingInputUsername">Username</label>
                                </div>
                                <hr />
                                <div className="form-floating mb-3">
                                    <Field component="input" type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Field type="password" name="confirmpassword" className="form-control" id="floatingPasswordConfirm" placeholder="Confirm Password" />
                                    <label htmlFor="floatingPasswordConfirm">Confirm Password</label>
                                    <ErrorMessage className="color-red" name="confirmpassword" component="div" />
                                </div>
                                <div className="d-grid mb-2">
                                    <button className={`btn btn-lg btn-primary ${f.btn_login} fw-bold text-uppercase`} type="submit" disabled={!formik.isValid}>
                                        Log in
                                    </button>
                                </div>
                                <a className="d-block text-center mt-2 small" href="https://fakestoreapi.com/users">Here you can find login and password!</a>
                                
                            </div>
                        </Form>
                    }
                }
            </Formik>
    );
}

export default RegisterForm;
