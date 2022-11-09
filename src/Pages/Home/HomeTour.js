import React from 'react';

const HomeTour = () => {
    return (
        <div>
            <h2 className='my-6 font-bold text-2xl'>Check Our Available Tour Services</h2>
            <div className='w-3/4 mx-auto flex flex-col  lg:flex-row mt-10 justify-around items-center'>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary w-full text-white font-bold mt-5 bg-blue-500 hover:bg-blue-700 border-none">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary w-full text-white font-bold mt-5 bg-blue-500 hover:bg-blue-700 border-none">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary w-full text-white font-bold mt-5 bg-blue-500 hover:bg-blue-700 border-none">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTour;