import React from 'react'
import HeroSvg from './icons/HeroSvg';
import { BioData } from '../constants';

import { socialLinks } from '../constants';


const Hero = () => {
    return (
        <main className="max-w-7xl mx-auto lg:px-16 px-6 ">
            <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
                <div>
                    {
                        BioData.map((item) => (
                            <div className='lg:max-w-2xl max-w-2xl'>
                                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                                    {item.headline}
                                </h1>
                                <p className="text-base text-zinc-400 leading-relaxed">
                                    {item.shortBio}
                                </p>
                            </div>
                        ))
                    }                   
                    
                         <ul className="flex items-center gap-x-6 my-10 ">
                         {socialLinks.map((item) => {
                           const Icon = item.icon;
                           return (
                             <li key={item.label}>
                               <a href={item.href} target="_blank" rel="noreferrer noopener" className='hover:text-purple-400 duration-300 flex gap-2 text-xl'>

                                 <Icon className='mt-1' />{item.label}
                               </a>                               
                             </li>
                           );
                         })}
                       </ul>
                    

                </div>
                <HeroSvg />
            </section>
        </main>
    )
}
export default Hero