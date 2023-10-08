"use client";
import Image from "next/image";
import React from "react";
import splash from "@/assets/splash-accent-1.png";
import splash2 from "@/assets/splash-2.png";
import bottles from "@/assets/bottles-source.webp";
import { motion } from "framer-motion";

function Header() {
  return (
    <header
      className="overflow-hidden flex pt-10 relative"
      style={{ background: "linear-gradient(-90deg,#8cdff0 0,#8ab8e6 100%)" }}
    >
      <div className="absolute left-0 top-0 h-full w-full ">
        <motion.div
          initial={{ opacity: 0.1, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-[35%] top-16 lg:top-32 h-full w-[30%]"
        >
          <Image
            alt="splash-img"
            src={splash}
            className=" object-contain w-full translate-x-20"
            style={{ transform: "rotateY(180deg)" }}
          />
        </motion.div>

        <motion.div
          className="relative h-full"
          initial={{ opacity: 0.1, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            alt="splash-img"
            src={splash2}
            className="absolute -left-[13%] top-0 h-full w-[60%] object-contain align-middle"
            style={{ transform: "rotateY(180deg)" }}
          />
        </motion.div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full cursor-default flex flex-col justify-center items-center text-[5vw] font-bold text-white"
      >
        <span>مياه سينا</span>
        <span>الافضل على الاطلاق</span>
      </motion.h1>
      <div className="flex justify-center items-center w-full relative">
        <motion.div
          className="h-full z-10"
          initial={{ opacity: 0.6, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image alt="bottles" className="w-[87%]" src={bottles} />
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
