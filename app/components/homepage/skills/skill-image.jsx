"use client";

import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function SkillImage({ skill }) {
  const image = skillsImage(skill);
  
  return (
    <Image
      src={image?.src}
      alt={skill}
      width={40}
      height={40}
      className="h-full w-auto rounded-lg"
    />
  );
}

export default SkillImage; 