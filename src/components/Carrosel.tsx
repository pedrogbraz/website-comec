"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const slides = [
  {
    image: "/slide1.jpg",
    title: "Title 1",
    description: "Description 1",
  },
  {
    image: "/slide2.jpg",
    title: "Title 2",
    description: "Description 2",
  },
  {
    image: "/slide3.jpg",
    title: "Title 3",
    description: "Description 3",
  },
];

export function Carrosel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[520px]">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute flex flex-col w-full h-full justify-end items-start p-12 bg-black bg-opacity-50 text-white">
                <h1 className="text-2xl font-medium">{slide.title}</h1>
                <p className="text-sm">{slide.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
