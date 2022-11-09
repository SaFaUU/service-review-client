import React from 'react';

const SpecialOffers = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-2/3 mx-auto my-16">
            <figure className='lg:w-2/3'><img src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-07-1024x683.jpg" alt="Album" /></figure>
            <div className="card-body flex items-center justify-center">
                <h2 className="card-title">Get special offers, and more from TourToday</h2>
                <p className='flex-grow-0'>Subscribe to see secret deals prices drop the moment you sign up!</p>
                <div className="card-actions">
                    <div>
                        <div className="form-control w-80">
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary bg-blue-500 hover:bg-blue-700 border-none text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;