import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-14 bg-base-200 text-base-content justify-items-center">
            <div className='flex flex-col items-center justify-center'>
                <img src="http://www.tourtoday.com.bd/shop/wp-content/uploads/2018/05/TourTodayBD.png" alt="" className='w-20' />
                <p>Safa Tours<br />Providing reliable tour services since 1992</p>
            </div>
            <div className='justify-items-center'>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Branding</Link>
                <Link className="link link-hover">Design</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link className="link link-hover">Advertisement</Link>
            </div>
            <div className='justify-items-center'>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div className='justify-items-center'>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;