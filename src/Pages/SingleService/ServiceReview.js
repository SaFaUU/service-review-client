import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const ServiceReview = ({ id, serviceName, serviceImg }) => {
    const { user } = useContext(AuthContext)
    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch(`https://service-review-server-safauu.vercel.app/review/${id}`)
            .then(result => result.json())
            .then(data => {
                // console.log(data)
                setReview(data)
            })
    }, [id])

    const handleReviewSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const review = form.info.value;
        const userID = user.uid;
        const postID = id;
        const name = user.displayName;
        const photoURL = user.photoURL;
        const reviewName = serviceName;
        const serviceImage = serviceImg;

        const reviewData = {
            review,
            userID,
            postID,
            name,
            photoURL,
            reviewName,
            serviceImage,
            timestamp: Date.now(),

        }

        fetch("https://service-review-server-safauu.vercel.app/addreview", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const newReview = [reviewData, ...reviews]
                // console.log('inside fetch post')
                // console.log(newReview)
                setReview(newReview)
                event.target.reset()
            });
    }

    return (
        <div className="card card-compact w-1/2 bg-base-100 shadow-md mx-auto my-10">
            <h2 className='my-6 font-bold text-2xl'>Please Write a Review</h2>
            <div className='flex mb-10 px-10 items-center'>
                <div className="avatar online  lg:block hidden">
                    {
                        user?.photoURL ?
                            <div className="lg:w-24 w-full rounded-full">

                                <img src={user?.photoURL} alt='' />
                            </div>
                            :
                            <FaUser className='text-5xl'></FaUser>
                    }

                </div>
                <form onSubmit={handleReviewSubmit} className='w-full'>
                    <div className="lg:ml-10">
                        <label className="label pt-0">
                            <span className="label-text">Write your Review</span>
                        </label>
                        <textarea name='info' className="textarea textarea-info w-full" placeholder="Review"></textarea>
                        <div className='flex justify-end'>
                            <button type='submit' className='btn w-1/4 min-h-min h-7 mt-2 bg-blue-500 hover:bg-blue-700 border-none text-white'>Post</button>
                        </div>
                    </div>
                </form>
            </div>
            {
                reviews?.map(review => {
                    return (
                        <div className='flex mb-10 px-10 items-center' key={review._id}>
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={review?.photoURL} alt='' />
                                </div>
                            </div>
                            <div className="ml-10 w-full">
                                <label className="label pt-0">
                                    <span className="label-text">{review?.name}</span>
                                </label>
                                <p name='info' className="textarea border-none bg-slate-200 text-left textarea-info w-full" placeholder="Review">{review.review}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ServiceReview;