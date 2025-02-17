"use client";
import { SectionHeader } from "@/components/SectionHeader";
import {Card} from "@/components/Card";


import headShot from "@/assets/images/dos-headshot-1.jpg";
import headShot2 from "@/assets/images/dos-headshot-2.jpg";
import Image from "next/image";
import MAPImage from "@/assets/images/map.jpg";
import waveMemoji from "@/assets/images/dos-wave.png";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import DatabaseIcon from "@/assets/icons/database.svg";
import Css3Icon from "@/assets/icons/css3.svg";
import GitIcon from "@/assets/icons/github.svg";
import PythonIcon from "@/assets/icons/python.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JavaIcon from "@/assets/icons/java.svg";
import AzureIcon from "@/assets/icons/azure.svg";
import AwsIcon from "@/assets/icons/aws.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Javascript",
    iconType:JavascriptIcon
  },
  {
    title: "AWS",
    iconType:AwsIcon
  },
  {
    title: "Azure",
    iconType:AzureIcon
  },
  {
    title: "SQL/NoSQL Databases",
    iconType:DatabaseIcon
  },
  {
    title: "Java",
    iconType:JavaIcon
  },
  {
    title: "Python",
    iconType:PythonIcon
  },
  {
    title: "React",
    iconType:ReactIcon
  },
  {
    title: "CSS3",
    iconType:Css3Icon
  },
  {
    title: "Git",
    iconType:GitIcon
  },
  {
    title: "HTML5",
    iconType: HTMLIcon
  },
]

const hobbies =[
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",

  },
  {
    title: "Music",
    emoji: "🎸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Poker",
    emoji: "🃏",
    left: "35%",
    top: "40%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "10%",
    top: "35%",
  },
  {
    title: "Fashion",
    emoji: "🕴🏿",
    left: "70%",
    top: "40%",
  },
  {
    title: "Fitness",
    emoji: "🏋🏿",
    left: "5%",
    top: "65%",
  },
  {
    title: "Rug Tufting",
    emoji: "🧶",
    left: "45%",
    top: "70%",
  },
]
export const AboutSection = () => {
  const constraintRef = useRef(null)
  return( 
  <div className = "py-20 lg:py-28">
    <div className = "container">
      <SectionHeader 
      eyebrow = "About Me" 
      title = "A Glipse Into My World" 
      description="Learn more about who I am, what I do, and what inspires me"
      />
      <div className = "mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="The Face" description="The face behind the code."/>
            <div className = "w-40 mx-auto mb-2 md:mb-0 ">
              <Image src={headShot} alt="heashot " className="rounded-full "/>
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2" >
            <CardHeader 
              title="My Toolbox" 
              description="Explore the technologies and tools I used to craft exceptional digital experiences." 
              />
            <ToolboxItems items={toolboxItems} className ="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
            <ToolboxItems items={toolboxItems} className ="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:20s]" />

          </Card>
        </div>
        <div className = "grid grid-cols-1 md:grid-cols-5 gap-8 ">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3">
            <CardHeader title="Beyond The Code" description="Explore my interest and hobbies beyound the digital realm." className ="px-6 py-6"/>
            <div className = "relative flex-1 "ref = {constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div 
                key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style = {{left: hobby.left, top: hobby.top}} drag dragConstraints={constraintRef}>
                  <span>{hobby.emoji}</span>
                  <span className = "font-medium text-gray-950">{hobby.title}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2" >
            <Image src={MAPImage} alt="map" className="h-full w-full object-cover object-left-top"/>
            <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:contetnt-[''] after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={waveMemoji} alt="wave" className="size-20"/>
            </div>
          </Card>
        </div>
        
      </div>
    </div>
  </div>
  );
};
