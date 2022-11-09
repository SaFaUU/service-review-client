import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext)

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)

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

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        const photourl = form.photourl.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                handleUpdateUserProfile(name, photourl)
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="hero my-36">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="pt-6 ">Please insert your credentials to signup</p>
                    </div>
                    <div className="card w-80 shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister}>
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
                                    <button type='submit' className="btn btn-primary bg-blue-500 hover:bg-blue-700 border-none text-white">Register</button>
                                </div>
                            </div>
                        </form>
                        <button onClick={handleGoogleLogin} className="btn btn-outline w-64 mx-auto mt-3 mb-10">Signup with Google
                            <FaGoogle className='ml-1'></FaGoogle>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;