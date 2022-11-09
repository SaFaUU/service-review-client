import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl w-2/3 mx-auto my-10 hover:scale-110 duration-300 ease-in-out">
                <img src="https://sazzadul.com/wp-content/uploads/2022/07/SQl-or-NoSQL.jpg" alt="Question Related" className='w-1/3' />
                <div className="card-body">
                    <h2 className="card-title font-bold text-left">Difference between SQL and NoSQL</h2>
                    <p className='text-left text-sm'>In SQL Databases we use relational tables to make databases. An example for SQL database would be: SQLite, PostgreSQL. Whereas in NoSQL database we use Document based databases. SQL databases have fixed input parameters. If we want to have high flexibility and scalability NoSQL database would be a great choice.</p>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl w-2/3 mx-auto my-10 hover:scale-110 duration-300 ease-in-out">
                <img src="https://yami.io/wp-content/uploads/3/2020/01/jwt-1200x675.png" alt="Question Related" className='w-1/3' />
                <div className="card-body">
                    <h2 className="card-title font-bold text-left">What is JWT, and how does it work?</h2>
                    <p className='text-left text-sm'>Even if we use Protected Routes sometimes people can break API's and get unwanted access. So to prevent that and verify an authenticated user everytime he or she makes a request we use JSON web tokens.</p>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl w-2/3 mx-auto my-10 hover:scale-110 duration-300 ease-in-out">
                <img src="https://www.moweb.com/uploads/blogs/original/1651273914best-nodejs-frameworks.png" alt="Question Related" className='w-1/3' />
                <div className="card-body">
                    <h2 className="card-title font-bold text-left">What is the difference between javascript and NodeJS?</h2>
                    <p className='text-left text-sm'>Javascript is a scripting language. It is used to make a website more dynamic where as Nodejs is a open source server environment. It is used for server sides. Ryan Dahl was the person who used the V8 Engine to host javascript servers on the backend and make it popular.</p>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl w-2/3 mx-auto my-10 hover:scale-110 duration-300 ease-in-out">
                <img src="https://www.cronj.com/blog/wp-content/uploads/Event-Loop.png" alt="Question Related" className='w-1/3' />
                <div className="card-body">
                    <h2 className="card-title font-bold text-left">How does NodeJS handle multiple requests at the same time?</h2>
                    <p className='text-left text-sm'>Node is a single threaded application. Nodejs handles multiple requests using something called an event loop. When multiple requests come to the server it places them in an eventqueue. The event loop listens to the processes in the eventqueue. If there is a free thread it takes one process from the eventqueue and processes it. If the process at anytime is waiting for some other operation to happen, it sends it back to the eventqueue and moves on to the next one. That's how multiple requests are handled in Nodejs.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;