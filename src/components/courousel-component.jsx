'use client';


import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Card } from './ui/card';

const carouselData = [
  { img: './logolight.svg' },
  { img: './sample.svg' },
  { img: './logolight.svg' },
  { img: './sample.svg' },
  { img: './logolight.svg' },
  { img: './sample.svg' },
  { img: './logolight.svg' },
  { img: './sample.svg' },
  { img: './logolight.svg' },
  { img: './sample.svg' },
  { img: './logolight.svg' },
  { img: './logolight.svg' },
  { img: './logolight.svg' },
  { img: './sample.svg' },
  { img: './logolight.svg' },
  { img: './logolight.svg' },
  { img: './sample.svg' },
  { img: './logolight.svg' },
];

const CoursouselComponent = () => {
  return (
    <section  className="flex w-full flex-col items-center justify-center gap-10 mt-10">
      <Carousel
        className="w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {carouselData.map((item, index) => {
            return (
              <CarouselItem
                key={index}
                className="basis-1/2 pl-2 sm:basis-1/3 md:basis-1/4 md:pl-4 lg:basis-1/6"
              >
                <Card className="flex h-full items-center justify-center p-3 md:p-5">
                  <div className="relative h-[60px] w-[80px] sm:w-[90px] md:h-[50px] md:w-[80px]">
                    <Image
                      src={item.img}
                      alt="company logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      </section>
  );
};

export default CoursouselComponent;
