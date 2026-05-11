import React from 'react';

const Signup = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-green-700 mb-6">ایجاد حساب کاربری</h2>
                <form className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-1">نام کامل</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="نام و نام خانوادگی" />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">ایمیل</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">رمز عبور</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="****" />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-700 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-200">
                        ثبت‌نام
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;