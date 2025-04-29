"use client";
// @flow strict

import { skillsData } from "@/utils/data/skills";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

const SkillImage = dynamic(() => import('./skill-image'), { ssr: false });
const SkillsMarquee = dynamic(() => import('./skills-marquee'), { ssr: false });

function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        {mounted && <SkillsMarquee />}
      </div>
    </div>
  );
};

export default Skills;