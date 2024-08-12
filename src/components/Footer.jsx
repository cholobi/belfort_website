"use client";

import { useState } from "react";
import { Dialog, DialogPanel, Button } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import headeImgCopy from '../assets/images/headeImgCopy.png';


export default function Footer() {


    return (
        <div className='bg-white '>
            <div className='relative px-6 lg:px-8 pt-14 isolate flex flex-col justify-center items-center'>
                <div className="grid  my-4 justify-between  p-4 w-full grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col gap-y-2 p-4">
                        <h1 className="text-3xl">
                            {/* Find The Perfect Machinery Solutions */}
                            CHOLOBI
                        </h1>

                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, numquam!
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-2 p-4 ">
                        <div className="flex gap-x-4  justify-end">
                            <Button className=" bg-black py-2  border-gray-300 px-4 text-sm text-white ">
                                Learn More
                            </Button>

                            <Button className=" bg-white py-2  px-4 text-sm text-black flex">
                                <p className="text-sm">Request</p>
                            </Button>
                        </div>
                    </div>
                </div>


                <div className="grid  my-4 justify-between  p-4 w-full grid-cols-1 lg:grid-cols-3">

                    <div className="flex flex-row gap-x-4 p-4 justify-start items-start w-full">
                        <h1 className=" text-3xl">
                            Logo
                        </h1>
                    </div>


                    <div className="flex flex-row justify-center items-center gap-x-4 p-4 w-full">
                        <a href="#">
                            Link one
                        </a>
                        <a href="#">
                            Link Two
                        </a>
                        <a href="#">
                            Link Three
                        </a>
                        <a href="#">
                            Link Four
                        </a>
                    </div>

                    <div className="flex flex-row justify-end items-end gap-x-4 p-4 w-full">
                        <a href="#">
                            <i class="ri-linkedin-box-fill text-lg"></i>
                        </a>
                        <a href="#">
                            <i class="ri-instagram-fill text-lg"></i>
                        </a>
                        <a href="#">
                            <i class="ri-twitter-x-fill text-lg"></i>
                        </a>
                        <a href="#">
                            <i class="ri-facebook-circle-fill text-lg"></i>
                        </a>
                    </div>
                </div>
                <div className="w-full ">
                    <hr class="border-t border-black " />
                </div>
                <div className="grid  my-4 justify-center items-center  p-4 w-full grid-cols-1 lg:grid-cols-1">

                    <div className="flex flex-row justify-center items-center gap-x-4 p-4 w-full">
                        <a href="#">
                            <p className="text">@ 2024 <span>Private Policy</span></p>
                        </a>
                        <a href="#">
                            Terms of Service
                        </a>
                        <a href="#">
                            Cookies Settings
                        </a>
                    </div>


                </div>


            </div>
        </div>
    );
}
