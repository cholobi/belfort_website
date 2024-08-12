"use client";

import { useState } from "react";
import { Dialog, DialogPanel, Button } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import headeImgCopy from '../assets/images/headeImgCopy.png';


export default function HeroSection5() {


    return (
        <div className='bg-white '>
            <div className='relative px-6 lg:px-8 pt-14 isolate flex flex-col justify-center items-center'>
                <div className="grid gap-x-12 p-4 w-3/5  grid-cols-1">
                    <p className=" p-2 text-4xl lg:text-sm text-center">
                        Experienced
                    </p>
                    <h1 className=" text-4xl text-wrap p-2 text-center">
                        Meet Our Team
                    </h1>
                    <p className="text-sm p-2 text-center">
                        placeat reiciendis vel voluptatibus tempore quidem! Optio at rerum id officia.
                    </p>
                </div>

                <div className="grid  my-4 justify-between  p-4 w-full grid-cols-1 lg:grid-cols-4">
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <div className=" flex flex-col justify-center gap-y-1 p-2 mt-4 items-center">
                            <div className="border-2 inline-block rounded-full bg-gray-300 p-3">
                                <img src={headeImgCopy} className="w-4 h-4" />
                            </div>
                            <div className=" w-3/4 flex flex-col justify-center items-center p-3">
                                <p className="text text-sm font-bold">
                                    John Doe
                                </p>
                                <p className="text text-md text-center">
                                    CEO,ABC Company
                                </p>
                                <p className="text-sm text-center my-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, amet!
                                </p>
                                <div className="flex justify-between gap-x-4 p-2">
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-linkedin-box-fill "></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-twitter-fill"></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-dribbble-line"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <div className=" flex flex-col justify-center gap-y-1 p-2 mt-4 items-center">
                            <div className="border-2 inline-block rounded-full bg-gray-300 p-3">
                                <img src={headeImgCopy} className="w-4 h-4" />
                            </div>
                            <div className=" w-3/4 flex flex-col justify-center items-center p-3">
                                <p className="text text-sm font-bold truncate">
                                    Jane Smith
                                </p>
                                <p className="text text-md text-center truncate">
                                    Operation Manager XYZ Coorporation
                                </p>
                                <p className="text-sm text-center my-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, amet!
                                </p>
                                <div className="flex justify-between gap-x-4 p-2">
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-linkedin-box-fill "></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-twitter-fill"></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-dribbble-line"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <div className=" flex flex-col justify-center gap-y-1 p-2 mt-4 items-center">
                            <div className="border-2 inline-block rounded-full bg-gray-300 p-3">
                                <img src={headeImgCopy} className="w-4 h-4" />
                            </div>
                            <div className=" w-3/4 flex flex-col justify-center items-center p-3">
                                <p className="text text-sm font-bold">
                                    Mark Johnson
                                </p>
                                <p className="text text-md truncate">
                                    CEO,ABC Company
                                </p>
                                <p className="text-sm text-center my-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, amet!
                                </p>
                                <div className="flex justify-between gap-x-4 p-2">
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-linkedin-box-fill "></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-twitter-fill"></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-dribbble-line"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <div className=" flex flex-col justify-center gap-y-1 p-2 mt-4 items-center">
                            <div className="border-2 inline-block rounded-full bg-gray-300 p-3">
                                <img src={headeImgCopy} className="w-4 h-4" />
                            </div>
                            <div className=" w-3/4 flex flex-col justify-center items-center p-3">
                                <p className="text text-sm font-bold truncate">
                                    Mark Johnson
                                </p>
                                <p className="text text-md">
                                    CEO,ABC Company
                                </p>
                                <p className="text-sm text-center my-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, amet!
                                </p>
                                <div className="flex justify-between gap-x-4 p-2">
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-linkedin-box-fill "></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-twitter-fill"></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-dribbble-line"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid  my-4 justify-between  p-4 w-full grid-cols-1 lg:grid-cols-4">
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <div className=" flex flex-col justify-center gap-y-1 p-2 mt-4 items-center">
                            <div className="border-2 inline-block rounded-full bg-gray-300 p-3">
                                <img src={headeImgCopy} className="w-4 h-4" />
                            </div>
                            <div className=" w-3/4 flex flex-col justify-center items-center p-3">
                                <p className="text text-sm font-bold">
                                    John Doe
                                </p>
                                <p className="text text-md text-center">
                                    CEO,ABC Company
                                </p>
                                <p className="text-sm text-center my-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, amet!
                                </p>
                                <div className="flex justify-between gap-x-4 p-2">
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-linkedin-box-fill "></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-twitter-fill"></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-dribbble-line"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <div className=" flex flex-col justify-center gap-y-1 p-2 mt-4 items-center">
                            <div className="border-2 inline-block rounded-full bg-gray-300 p-3">
                                <img src={headeImgCopy} className="w-4 h-4" />
                            </div>
                            <div className=" w-3/4 flex flex-col justify-center items-center p-3">
                                <p className="text text-sm font-bold truncate">
                                    Jane Smith
                                </p>
                                <p className="text text-md text-center truncate">
                                    Operation Manager XYZ Coorporation
                                </p>
                                <p className="text-sm text-center my-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, amet!
                                </p>
                                <div className="flex justify-between gap-x-4 p-2">
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-linkedin-box-fill "></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-twitter-fill"></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-dribbble-line"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <div className=" flex flex-col justify-center gap-y-1 p-2 mt-4 items-center">
                            <div className="border-2 inline-block rounded-full bg-gray-300 p-3">
                                <img src={headeImgCopy} className="w-4 h-4" />
                            </div>
                            <div className=" w-3/4 flex flex-col justify-center items-center p-3">
                                <p className="text text-sm font-bold">
                                    Mark Johnson
                                </p>
                                <p className="text text-md truncate">
                                    CEO,ABC Company
                                </p>
                                <p className="text-sm text-center my-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, amet!
                                </p>
                                <div className="flex justify-between gap-x-4 p-2">
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-linkedin-box-fill "></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-twitter-fill"></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-dribbble-line"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <div className=" flex flex-col justify-center gap-y-1 p-2 mt-4 items-center">
                            <div className="border-2 inline-block rounded-full bg-gray-300 p-3">
                                <img src={headeImgCopy} className="w-4 h-4" />
                            </div>
                            <div className=" w-3/4 flex flex-col justify-center items-center p-3">
                                <p className="text text-sm font-bold truncate">
                                    Mark Johnson
                                </p>
                                <p className="text text-md">
                                    CEO,ABC Company
                                </p>
                                <p className="text-sm text-center my-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, amet!
                                </p>
                                <div className="flex justify-between gap-x-4 p-2">
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-linkedin-box-fill "></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-twitter-fill"></i>
                                    </p>
                                    <p className="text-xl text-center my-2">
                                        <i class="ri-dribbble-line"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
