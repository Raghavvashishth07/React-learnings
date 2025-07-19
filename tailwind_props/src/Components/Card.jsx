import React from 'react';

function Card({ username, btnText = "Visit me" }) {
    return (
        <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden w-64 mb-4">
            <img
                src="https://images.pexels.com/photos/9218664/pexels-photo-9218664.jpeg"
                alt="Profile"
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h2 className="font-bold text-lg">{username}</h2>
                <p className="text-sm text-gray-600">
                    Haryanvi hu time laagega, jami chala ped denge!!!!
                </p>
                <button className="mt-3 px-4 py-2 bg-black text-white rounded">
                    {btnText} →
                </button>
            </div>
        </div>
    );
}

export default Card;
