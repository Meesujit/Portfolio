import React from 'react'
import { about, techStack } from '../../constants'
// import profileImage from '../icons/sujitgouda.jpg'
import { FaRegFileAlt, FaMailBulk   } from "react-icons/fa";
const About = () => {
  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      {
        about.map((item) => (
          <div>
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
                  I&apos;m {item.fullName}. I live in {item.location}, where I
                  design the future.
                </h1>
                <div className="flex flex-col gap-y-3 text-zinc-400 leading-relaxed">
                  {item.fullBio}
                </div>
              </div>
              <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <div>
                  <img
                    className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
                    src={item.profileImage}
                    width={400}
                    height={400}
                    quality={100}
                    alt='profile image'
                  />

                  <a
                    href={`${item.resumeURL}?dl=${item.fullName}_resume.pdf`} target='_blank'
                    className="flex items-center justify-center gap-x-2 bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-cell font-medium"
                  >
                    <FaRegFileAlt  className="text-base" /> Resumé
                    
                  </a>
                </div>
                <ul>
                  <li>
                    <a
                      href={`mailto:${item.email}`}
                      className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
                    >
                      <FaMailBulk className="text-lg" />
                      {item.email}
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mt-24 max-w-2xl">
              <h2 className="font-semibold text-5xl mb-4">Expertise</h2>
              <p className="text-zinc-400 max-w-lg">
                I&apos;ve spent few years working on my skills. In no particular
                order, here are a few of them.
              </p>

              <ul className="flex flex-wrap items-center gap-3 mt-8">
                {
                  techStack.map((skill) => (
                    <li
                    className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1"
                  >
                    {skill.language}
                  </li>
                  ))
                }
              </ul>
            </section>
          </div>
        ))
      }

    </main>
  )
}

export default About