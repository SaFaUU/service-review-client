import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { googleSignIn, logOut } = useContext(AuthContext)
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
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary bg-blue-500 hover:bg-blue-700 border-none text-white">Login</button>
                                <button onClick={handleGoogleLogin} className="btn btn-outline mt-3">Login with Google
                                    <FaGoogle className='ml-1'></FaGoogle>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;