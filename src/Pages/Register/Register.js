import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
    return (
        <div>
            <div className="hero my-36">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="pt-6 ">Please insert your credentials to singup</p>
                    </div>
                    <div className="card w-80 shadow-2xl bg-base-100">
                        <form>
                            <div className="card-body pb-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input name='photourl' type="text" placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-3">
                                    <button className="btn btn-primary bg-blue-500 hover:bg-blue-700 border-none text-white">Login</button>
                                </div>
                            </div>
                        </form>
                        <button className="btn btn-outline w-64 mx-auto mt-3 mb-10">Signup with Google
                            <FaGoogle className='ml-1'></FaGoogle>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;