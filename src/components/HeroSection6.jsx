"use client";

import { useState } from "react";
import { Dialog, DialogPanel, Button } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import headeImgCopy from '../assets/images/headeImgCopy.png';


export default function HeroSection6() {


    return (
        <div className='bg-white animate-fade-right'>
            <div className='relative px-6 lg:px-8 pt-14 isolate flex flex-col justify-center items-center'>
                <div className="grid  my-4 justify-between  p-4 w-full grid-cols-1 lg:grid-cols-2">
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <p className="text-md leading-6 p-2">Innovate</p>
                        <h1 className="text-4xl p-2 leading-snug">
                            Unleash The power of Innovation With Confidence
                        </h1>
                        <div className=" mt-4 p-2 flex gap-x-4">
                            <Button className=" bg-white py-2 border-2 border-gray-300 px-4 text-sm text-black ">
                                Learn More
                            </Button>

                            <Button className=" bg-white py-2  px-4 text-sm text-black flex">
                                <p className="text-sm">Sign up</p>
                            </Button>

                        </div>
                    </div>
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <div className=" gap-y-4 grid lg:grid-cols-2 grid-cols-1 justify-center">
                            <div className=" flex flex-col gap-y-2 ml-28 items-center justify-center">
                                <p className="text text-2xl">
                                    <i className="ri-box-3-fill"></i>
                                </p>
                                <div className="w-px h-16 border-1 border-black bg-black"></div>
                            </div>
                            <div className=" flex flex-col gap-y-2 items-start">
                                <h1 className="text text-md font-bold leading-6">
                                    Building Success
                                </h1>
                                <p className="text text-sm ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, at.
                                </p>
                            </div>
                        </div>
                        <div className=" gap-y-4 grid lg:grid-cols-2 grid-cols-1 justify-center">
                            <div className=" flex flex-col gap-y-2 ml-28 items-center justify-center">
                                <p className="text text-2xl">
                                    <i className="ri-box-3-fill"></i>
                                </p>
                                <div className="w-px h-16 border-1 border-black bg-black"></div>
                            </div>
                            <div className=" flex flex-col gap-y-2 items-start">
                                <h1 className="text text-md font-bold leading-6">
                                    Building Success
                                </h1>
                                <p className="text text-sm ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, at.
                                </p>
                            </div>
                        </div>
                        <div className=" gap-y-4 grid lg:grid-cols-2 grid-cols-1 justify-center">
                            <div className=" flex flex-col gap-y-2 ml-28 items-center justify-center">
                                <p className="text text-2xl">
                                    <i className="ri-box-3-fill"></i>
                                </p>
                                <div className="w-px h-16 border-1 border-black bg-black"></div>

                            </div>
                            <div className=" flex flex-col gap-y-2 items-start">
                                <h1 className="text text-md font-bold leading-6">
                                    Building Success
                                </h1>
                                <p className="text text-sm ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, at.
                                </p>
                            </div>
                        </div>
                        <div className=" gap-y-4 grid lg:grid-cols-2 grid-cols-1 justify-center">
                            <div className=" flex flex-col gap-y-2 ml-28 items-center justify-center">
                                <p className="text text-2xl">
                                    <i className="ri-box-3-fill"></i>
                                </p>
                                <div className="w-px h-16 border-1 border-black bg-black"></div>
                            </div>
                            <div className=" flex flex-col gap-y-2 items-start">
                                <h1 className="text text-md font-bold leading-6">
                                    Building Success
                                </h1>
                                <p className="text text-sm ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, at.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
