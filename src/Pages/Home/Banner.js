import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-2/3" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-auto text-white pt-9 pb-6">
                    <h1 className="mb-1 text-5xl font-bold">Your world of joy</h1>
                    <p className="mb-4">Find what makes you happy anytime, anywhere</p>
                    <div className="form-control">
                        <label className="input-group flex justify-center h-9">
                            <span className='bg-amber-400'>Subsribe</span>
                            <input type="text" placeholder="abcd@gmail.com" className="input input-bordered h-9" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;