import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-red-700">جاباما</h1>
            <div className="space-x-4">
                <button
                    onClick={() => navigate('/login')}
                    className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200">
                    ورود به حساب
                </button>
                <button
                    onClick={() => navigate('/signup')}
                    className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-200">
                    ثبت‌نام
                </button>
            </div>
        </header>
    );
};

export default Header;