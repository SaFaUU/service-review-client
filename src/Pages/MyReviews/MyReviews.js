import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaEdit, FaTrash } from 'react-icons/fa';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const loadedReviews = useLoaderData()
    const [reviews, setReviews] = useState(loadedReviews);

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/myreviews/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const newReviews = reviews.filter(review => review._id != id)
                console.log(newReviews)
                setReviews(newReviews)
            })

    }
    const handleEdit = (id) => {
        console.log(id)
    }
    return (
        <div>
            <h2>This is my Review</h2>
            {
                reviews?.map(review => {
                    return (
                        <div className='flex mb-10 px-10 items-center justify-center' key={review._id}>
                            <div className="avatar online">
                                <div className="w-12 rounded-full">
                                    <img src={user?.photoURL} alt='' />
                                </div>
                            </div>
                            <div className="ml-10 w-1/2">
                                <label className="flex pt-0 justify-between mb-2">
                                    <h2 className="label-text text-lg font-bold">Service Name: {review?.reviewName}</h2>
                                    <div>
                                        <button onClick={() => handleEdit(review._id)} className='btn btn-ghost hover:bg-transparent px-0 min-h-min h-7 mr-4'>
                                            <FaEdit className='text-lg'></FaEdit>
                                        </button>
                                        <button onClick={() => handleDelete(review._id)} className='btn btn-ghost hover:bg-transparent px-0 min-h-min h-7'>
                                            <FaTrash className='text-lg'></FaTrash>
                                        </button>

                                    </div>
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

export default MyReviews;