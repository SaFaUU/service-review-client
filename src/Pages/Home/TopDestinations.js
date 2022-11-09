import React from 'react';

const TopDestinations = () => {
    return (
        <div className='p-8'>
            <h2 className='my-6 font-bold text-2xl'>Top destinations</h2>
            <div className='grid grid-cols-6'>
                <div className='flex flex-col items-center'>
                    <div className="avatar">
                        <div className="w-32 rounded-full">
                            <img className='hover:scale-125 ease-in-out	duration-300' src="https://pathfriend-bd.com/wp-content/uploads/2019/08/Sundarban.jpg" />
                        </div>
                    </div>
                    <h2 className='text-lg font-semibold mt-2'>Sundarban</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="avatar">
                        <div className="w-32 rounded-full">
                            <img className='hover:scale-125 ease-in-out	duration-300' src="https://cdn.bangladeshscenictours.com/wp-content/uploads/2019/11/Exploring-Coxs-Bazar-990x490.jpg" />
                        </div>
                    </div>
                    <h2 className='text-lg font-semibold mt-2'>Coxs Bazar</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="avatar">
                        <div className="w-32 rounded-full">
                            <img className='hover:scale-125 ease-in-out	duration-300' src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Zero_Point_at_Zuflong.jpg" />
                        </div>
                    </div>
                    <h2 className='text-lg font-semibold mt-2'>Jaflong</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="avatar">
                        <div className="w-32 rounded-full">
                            <img className='hover:scale-125 ease-in-out	duration-300' src="https://www.deshghuri.com/wp-content/uploads/2014/10/a-train-journey-will-go-through-the-jungle-of-lawachora.jpg" />
                        </div>
                    </div>
                    <h2 className='text-lg font-semibold mt-2'>Srimagal</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="avatar">
                        <div className="w-32 rounded-full">
                            <img className='hover:scale-125 ease-in-out	duration-300' src="https://cdn.britannica.com/80/137580-050-9C6A745A/Hanging-Bridge-Kaptai-Lake-Rangamati-Bangl.jpg" />
                        </div>
                    </div>
                    <h2 className='text-lg font-semibold mt-2'>Rangamati</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="avatar">
                        <div className="w-32 rounded-full">
                            <img className='hover:scale-125 ease-in-out	duration-300' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSA-hs29wz7zWG_fcYTgkjGo-1-Xdf2TqLWPvkeUxwzr63GBikofC5LZFQ31Rc4gcZJug&usqp=CAU" />
                        </div>
                    </div>
                    <h2 className='text-lg font-semibold mt-2'>Lalbagh</h2>
                </div>
            </div>
        </div>
    );
};

export default TopDestinations;