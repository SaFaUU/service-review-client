import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllTours = () => {
    const services = useLoaderData()
    return (
        <div>
            <div className='w-3/4 mx-auto flex flex-col  lg:flex-col mt-10 justify-around items-center mb-10'>
                {
                    services?.map(service => {
                        return (
                            <div className="card card-side bg-base-100 shadow-xl w-2/3 mx-auto my-10 hover:scale-110 duration-300 ease-in-out">
                                <PhotoProvider>
                                    <PhotoView src={service.img_url}>
                                        <img src={service.img_url} alt="" className='w-1/3' />
                                    </PhotoView>
                                </PhotoProvider>
                                <div className="card-body">
                                    <h2 className="card-title font-bold text-left">{service.title}</h2>
                                    <p className='text-left text-sm'>{service.info}</p>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-primary w-1/3 text-white font-bold mt-5 bg-red-500 hover:bg-red-700 border-none">{service.price}BDT</button>
                                        <Link to={`/service/${service._id}`} className="btn btn-primary w-1/3 text-white font-bold mt-5 bg-blue-500 hover:bg-blue-700 border-none">View Package</Link>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllTours;