import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-300 flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-red-700 mb-6">ورود به حساب</h2>
                <form className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-1">ایمیل</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="your@email.com"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">رمز عبور</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="****"/>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-700 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-200">
                        ورود
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;