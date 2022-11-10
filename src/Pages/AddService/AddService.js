import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    const navigate = useNavigate();

    useTitle('Add Service')
    const handleServiceSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const info = form.info.value;
        const price = form.price.value;
        const img_url = form.img_url.value;
        console.log(title, info, price, img_url);
        const serviceData = {
            title,
            info,
            price,
            img_url,
        }

        fetch("https://service-review-server-safauu.vercel.app/addservice", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate("/")
                event.target.reset();
            });
    }
    return (
        <div>
            <div className="hero my-20">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Add a Service now!</h1>
                        <p className="pt-6 ">Please insert Service Details to add</p>
                    </div>
                    <div className="card w-96 shadow-2xl bg-base-100">
                        <form onSubmit={handleServiceSubmit}>
                            <div className="card-body pb-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input name='title' type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Tour Image</span>
                                    </label>
                                    <input name='img_url' type="text" placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Info</span>
                                    </label>
                                    {/* <input name='info' type="text" placeholder="Email" className="input input-bordered" /> */}
                                    <textarea name='info' className="textarea textarea-info" placeholder="Description"></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input name='price' type="text" placeholder="Price" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-3 mb-10">
                                    <button type='submit' className="btn btn-primary bg-blue-500 hover:bg-blue-700 border-none text-white">Add Service</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;