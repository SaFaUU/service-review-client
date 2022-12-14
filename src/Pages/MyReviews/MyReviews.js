import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaEdit, FaTrash } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    const { user, loading, logOut } = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);


    useTitle('My Reviews');

    useEffect(() => {
        fetch(`https://service-review-server-safauu.vercel.app/myreviews/${user?.uid}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401) {
                    localStorage.clear();
                    // window.location.reload();
                    return logOut();
                }
                return res.json()

            })
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [user?.uid, logOut])

    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://service-review-server-safauu.vercel.app/myreviews/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const newReviews = reviews.filter(review => review._id != id)
                console.log(newReviews)
                setReviews(newReviews)
            })

    }
    const handleEdit = (event) => {
        event.preventDefault()
        const form = event.target;
        const info = form.info.value;
        const id = form.id.value;
        const updatedReview = {
            id,
            info
        }
        console.log(id)
        fetch(`https://service-review-server-safauu.vercel.app/myreviews/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(updatedReview),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const newReviews = reviews.filter(review => review._id != id)
                setReviews([...newReviews, data])
            })

    }
    if (loading) {
        return <h2>Loading ...</h2>
    }


    return (
        <div className='my-44'>
            {
                reviews?.length === 0 && <h1 className=' text-2xl'>No Reivew has been added</h1>
            }
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
                                    <div className='flex'>
                                        {/* <button onClick={() => handleEdit(review._id)} className='btn btn-ghost hover:bg-transparent px-0 min-h-min h-7 mr-4'>

                                        </button> */}
                                        <div>
                                            {/* The button to open modal */}
                                            <label htmlFor={`my-modal-${review._id}`} className='btn btn-ghost hover:bg-transparent px-0 min-h-min h-7 mr-4'>
                                                <FaEdit className='text-lg'>
                                                </FaEdit>
                                            </label>

                                            {/* Put this part before </body> tag */}
                                            <input type="checkbox" id={`my-modal-${review._id}`} className="modal-toggle" />
                                            <label htmlFor={`my-modal-${review._id}`} className="modal cursor-pointer">
                                                <label className="modal-box relative" htmlFor="">
                                                    <h2 className='font-bold text-2xl'>Update Review</h2>
                                                    <form onSubmit={handleEdit}>
                                                        <div className="card-body pb-0">
                                                            <div className="form-control">
                                                                <input name='id' type="text" placeholder="Name" className="input input-bordered"
                                                                    defaultValue={review._id} readOnly
                                                                    hidden />
                                                                <label className="label">
                                                                    <span className="label-text">Service Name</span>
                                                                </label>
                                                                <input name='title' type="text" placeholder="Name" className="input input-bordered"
                                                                    defaultValue={review.reviewName} readOnly
                                                                />

                                                            </div>
                                                            <div className="form-control">
                                                                <label className="label">
                                                                    <span className="label-text">Review</span>
                                                                </label>

                                                                <textarea name='info' className="textarea textarea-info" placeholder="Description"
                                                                    defaultValue={review.review}
                                                                ></textarea>
                                                            </div>
                                                            <div className="form-control mt-3 mb-10">
                                                                <button type='submit' className="btn btn-primary bg-blue-500 hover:bg-blue-700 border-none text-white">Update Changes</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </label>
                                            </label>
                                        </div>
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