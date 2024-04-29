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
        <div className="overflow-hidden relative w-fill">
            <div
                className="flex transition ease-out duration-400 items-center"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {cards.map((card, index) => (
                    <div key={index} className="min-w-[100%] px-8 md:px-24 box-border text-center">
                        <h2 className="text-3xl mb-3">{card.title}</h2>
                        <p className="mb-12">{card.content}</p>
                    </div>
                ))}
            </div>

            <div className="absolute top-0 h-full w-full flex justify-between items-center md:px-10 text-3xl">
                <button onClick={previousSlide}>
                    <FaArrowAltCircleLeft />
                </button>
                <button onClick={nextSlide}>
                    <FaArrowAltCircleRight />
                </button>
            </div>

            <div className="absolute bottom-0 p-4 flex justify-center gap-3 w-full">
                {cards.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`rounded-full w-5 h-5 cursor-pointer ${index === current ? 'bg-black' : 'bg-gray-300'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
