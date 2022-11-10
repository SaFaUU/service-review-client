import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { googleSignIn, logIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const currentUser = {
                    email: user.email,
                }
                //get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token)
                    })

                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleGoogleLogin = (event) => {
        event.preventDefault();
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <div>
            <div className="hero my-36">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="pt-6 ">Please login using your credentials</p>
                    </div>
                    <div className="card w-80 shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn}>
                            <div className="card-body pb-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-3">
                                    <button type='submit' className="btn btn-primary bg-blue-500 hover:bg-blue-700 border-none text-white">Login</button>
                                </div>
                            </div>
                        </form>
                        <button onClick={handleGoogleLogin} className="btn btn-outline w-64 mx-auto mb-10 mt-3">Login with Google
                            <FaGoogle className='ml-1'></FaGoogle>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;