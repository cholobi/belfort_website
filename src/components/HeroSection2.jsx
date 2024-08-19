"use client";

import { useState } from "react";
import { Dialog, DialogPanel, Button } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import headeImgCopy from '../assets/images/headeImgCopy.png';
const navigation = [
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Products", href: "#" },
    { name: "More", href: "#" },
];

export default function HeroSection2() {


    return (
        <div className='bg-white animate-fade-up'>
            <div className='relative px-6 lg:px-8 pt-14 isolate flex justify-center items-center'>
                <div className="grid gap-x-12 lg:grid-cols-2 grid-cols-1">
                    <div className="px-4 flex justify-center items-center  bg-gray-100">
                        <img src={headeImgCopy} alt="" className=" p-4" />
                    </div>
                    <div className=" px-10 flex flex-col gap-y-2 py-2">
                        <div className="text-4xl flex text-wrap">
                            Delivering Machine Solutions
                        </div>
                        <div className="text-4xl">
                            For Mining, Constructions
                        </div>
                        <div className="text-4xl">
                            Manufactiring,Marines And
                        </div>
                        <div className="text-4xl">
                            Transportation Sectors
                        </div>
                        <div className="text-sm mt-1">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Velit explicabo mollitia necessitatibus nostrum veniam quae
                            cupiditate culpa quis dignissimos voluptates reiciendis eius enim dolorem
                            a nisi provident perspiciatis voluptas nam quod quaerat, tenetur deserunt! Neque
                            ab natus laboriosam velit. Nobis.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
