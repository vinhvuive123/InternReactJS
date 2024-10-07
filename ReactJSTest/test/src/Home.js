import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Đảm bảo bạn có file CSS tương ứng

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
        <header className="w-full flex justify-between items-center p-6">
            <div className="flex items-center">
                <div className="w-4 h-4 bg-pink-500 rounded-full mr-1"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            </div>
            <button className="bg-purple-500 text-white py-2 px-6 rounded-full">Sign In</button>
        </header>
        <main className="flex flex-col items-center text-center mt-10">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Save your data storage here</h1>
            <p className="text-gray-600 mb-8 max-w-md">
                Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.
            </p>
            <button className="bg-purple-500 text-white py-3 px-8 rounded-full mb-10">Learn more</button>
            <img src="https://placehold.co/600x400" alt="Illustration of people managing data storage" className="w-full max-w-2xl"/>
        </main>
    </div>

    );
};

export default Home;
