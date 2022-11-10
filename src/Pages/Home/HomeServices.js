import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const HomeServices = ({ services }) => {
    console.log(services)
    return (
        <div>
            <h2 className='my-6 font-bold text-2xl'>Check Our Available Tour Services</h2>
            <div className='w-3/4 mx-auto flex flex-col  lg:flex-row mt-10 justify-around items-center'>
                {
                    services.map(service => {
                        return (
                            <div className="card lg:w-80 bg-base-100 shadow-xl sm:mt-5 hover:scale-110 duration-300 ease-in-out" key={service._id}>
                                <figure>
                                    <PhotoProvider>
                                        <PhotoView src={service.img_url}>
                                            <img src={service.img_url} alt="" />
                                        </PhotoView>
                                    </PhotoProvider></figure>
                                <div className="card-body">

                                    <h2 className="card-title mx-auto">{service.title}</h2>

                                    <p className='text-sm'>{service.info.slice(0, 100)}</p>
                                    <div>
                                        <span className="indicator-item indicator-middle badge badge-secondary font-bold text-white bg-orange-500 border-none mr-2">
                                            {service.price}BDT
                                        </span>
                                        <span className="indicator-item indicator-middle badge badge-secondary font-bold text-white bg-amber-500 border-none">
                                            Breakfast Included
                                        </span>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Link to={`/services/${service._id}`} className="btn btn-primary w-full text-white font-bold mt-5 bg-blue-500 hover:bg-blue-700 border-none">View Package</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Link className='btn btn-ghost bg-blue-500 hover:bg-blue-700 text-white mt-10' to='/services'>See All Tours</Link>
        </div>
    );
};

export default HomeServices;