'use client'

import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function MultiCardCarousel({ cards }) {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        setCurrent(current === 0 ? cards.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === cards.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition ease-out duration-400"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {cards.map((card, index) => (
                    <div key={index} className="flex-1 flex-col align-center w-full">
                        <h2 className="text-3xl">{card.title}</h2>
                        <p>{card.content}</p>
                    </div>
                ))}
            </div>

            <div className="absolute top-0 h-full w-full flex justify-between items-center px-10 text-3xl">
                <button onClick={previousSlide}>
                    <FaArrowAltCircleLeft />
                </button>
                <button onClick={nextSlide}>
                    <FaArrowAltCircleRight />
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {cards.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`rounded-full w-5 h-5 cursor-pointer ${index === current ? 'bg-white' : 'bg-gray-500'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
