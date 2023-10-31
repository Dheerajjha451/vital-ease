import React from 'react';

const Signup = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="mb-10">
                <h6 className="text-lg font-semibold">
                    Join us. Sign up below
                </h6>
            </div>
            <div className="flex justify-center">
                <div className="w-96 p-8 border border-gray-300">
                    <input
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                        type="text"
                        placeholder="Full Name"
                    />
                    <input
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <button
                        className="w-full bg-green-500 text-white p-2 rounded"
                    >
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
