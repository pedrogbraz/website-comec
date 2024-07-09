"use client";

import React, { useState } from "react";

const images = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"];

const PhotoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full max-w-4xl mx-auto">
      <div className="overflow-hidden relative rounded-2xl">
        <div
          className="flex transition-transform duration-300 rounded-2xl"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="min-w-full h-[100%] rounded-2xl">
              <div className="absolute flex flex-col z-10 bottom-16 left-10 space-y-1">
                <span className=" text-white text-lg">Texto Slide 1</span>
                <p className="text-white text-sm max-w-[85%] font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quisquam quam amet molestias nihil qui eveniet illo beatae
                  ipsam consequuntur voluptates deserunt quae a aliquid
                  doloremque similique, odit temporibus, sequi fugit.
                </p>
              </div>
              <img
                alt={`Slide ${index + 1}`}
                className="w-full h-[520px] object-cover rounded-2xl"
                src={src}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
