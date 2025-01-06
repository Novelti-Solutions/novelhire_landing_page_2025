import CoursouselComponent from "@/components/courousel-component";
import TabsComponent from "@/components/tab-component/tabs-component";
import React from "react";
import { featuresTabData } from "../../../data";

const FeaturesSection = () => {
  return (
    <section className='mx-auto max-w-screen-xl p-8 md:py-10 lg:py-10 py-10'>
        <div className='flex justify-center items-start flex-col cursor-pointer'>
            <p className='uppercase tracking-widest font-semibold mb-4'>Features</p>
            <h1 className='text-2xl md:text-3xl md:w-[30%] text-theme-primary font-semibold mb-10'>Meet NovelHire: <span className='text-theme-secondary'>Smarter Hiring Starts Here</span></h1>
            <TabsComponent data={featuresTabData}/>
            <CoursouselComponent/>
        </div>
      
    </section>
  );
};

export default FeaturesSection;
