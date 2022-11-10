import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ServiceReview from './ServiceReview';

const SingleService = () => {
    const serviceData = useLoaderData()
    return (
        <div>
            <div className="card card-compact w-1/2 bg-base-100 shadow-md mx-auto my-10">
                <figure><PhotoProvider>
                    <PhotoView src={serviceData.img_url}>
                        <img src={serviceData.img_url} alt="" />
                    </PhotoView>
                </PhotoProvider></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceData.title}</h2>
                    <p className='text-left'>{serviceData.info}</p>
                    <div className="card-actions justify-around flex-nowrap">
                        <button className="btn btn-primary text-white font-bold mt-5 bg-red-500 hover:bg-red-700 border-none w-full">{serviceData.price}BDT</button>
                        {/* <Link to={`/services/${serviceData._id}`} className="btn btn-primary text-white font-bold mt-5 bg-blue-500 hover:bg-blue-700 border-none w-2/6">View Package</Link>
                        <Link to={`/services/${serviceData._id}`} className="btn btn-primary text-white font-bold bg-blue-500 hover:bg-blue-700 border-none mt-5 w-2/6">View Package</Link> */}
                    </div>
                </div>
            </div>
            <ServiceReview
                id={serviceData._id}
                serviceName={serviceData.title}
                serviceImg={serviceData.img_url}
            ></ServiceReview>
        </div >
    );
};

export default SingleService;