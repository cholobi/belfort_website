import React from 'react'
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogPanel, Button } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import headeImgCopy from '../assets/images/headeImgCopy.png';
const navigation = [
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Products", href: "#" },
  { name: "More", href: "#" },
];

export default function HeroSection() {

  return (
    <div className='bg-white'>
      <div className='relative px-6 lg:px-8 pt-14 isolate flex justify-center items-center'>
        <div className="grid gap-x-12 lg:grid-cols-2 grid-cols-1">
          <div className=" px-10 flex flex-col gap-y-2 py-2">
            <div className="text-4xl flex text-wrap ">
              Empowering Industries
            </div>
            <div className="text-4xl">
              with Innovative
            </div>
            <div className="text-4xl">
              Machinery Solutions
            </div>
            <div className="text-sm mt-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Velit explicabo mollitia necessitatibus nostrum veniam quae
              cupiditate culpa quis dignissimos voluptates reiciendis eius enim dolorem
              a nisi provident perspiciatis voluptas nam quod quaerat, tenetur deserunt! Neque
              ab natus laboriosam velit. Nobis.
            </div>
            <div className="flex gap-2 mt-2">
              <Button className=" bg-black py-2 px-4 text-sm text-white ">
                Learn More
              </Button>
              <Button className=" bg-white py-2 border border-gray-200 px-4 text-sm text-black ">
                Learn More
              </Button>
            </div>

          </div>
          <div className="px-4 lg:flex  lg:justify-center lg:items-center bg-gray-100">
            <img src={headeImgCopy} className="flex" />
          </div>
        </div>
      </div>
    </div>
  );
}
