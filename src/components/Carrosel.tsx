"use client"

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const images = [
  "/slide1.jpg",
  "/slide2.jpg",
  "/slide3.jpg",
  "/slide4.jpg",
  "/slide5.jpg",
];
const titles = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5"];
const descriptions = [
  "Description 1",
  "Description 2",
  "Description 3",
  "Description 4",
  "Description 5",
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
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[520px]">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute flex flex-col w-[100%] h-[100%] justify-end items-start p-12 bg-black bg-opacity-50 text-white">
                <h1 className="text-2xl font-medium">{titles[index]}</h1>
                <p className="text-sm">{descriptions[index]}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
