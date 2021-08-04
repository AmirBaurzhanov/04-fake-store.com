import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { setUserTC } from '../../redux/reducers/login';
import RegisterForm from './registerForm';

class RegisterContainer extends PureComponent {

    onSubmit = (formData) => {
        this.props.setUserTC(formData)
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="card my-5 border-0 shadow rounded-3 overflow-hidden">
                            <RegisterForm onSubmit={this.onSubmit} />
                            {this.props.user ? <Redirect to="/" /> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user.userData[0],
})

export const RegisterPage = connect(mapStateToProps, { setUserTC })(RegisterContainer);