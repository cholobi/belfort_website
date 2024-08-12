"use client";

import { useState } from "react";
import { Dialog, DialogPanel, Button } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import headeImgCopy from '../assets/images/headeImgCopy.png';


export default function HeroSection3() {


    return (
        <div className='bg-white '>
            <div className='relative px-6 lg:px-8 pt-14 isolate flex flex-col justify-center items-center'>
                <div className="grid gap-x-12 p-4 w-3/5  grid-cols-1">
                    <p className=" p-2 text-4xl lg:text-sm text-center">
                        Efficiency
                    </p>
                    <h1 className=" text-4xl text-wrap p-2 text-center">
                        Offering Machinery Solutions For Diverse Industries
                    </h1>
                    <p className="text-sm p-2 text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, veniam fugit. Aut perspiciatis libero quia a corrupti illo? Quis id nisi odit iusto vero tenetur blanditiis, illo provident, optio placeat reiciendis vel voluptatibus tempore quidem! Optio at rerum id officia.
                    </p>
                </div>

                <div className="grid  my-4 justify-between  p-4 w-full grid-cols-1 lg:grid-cols-3">
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <p className="text-3xl text-center my-4">
                            <i class="ri-dice-fill "></i>
                        </p>
                        <h1 className="text text-3xl text-center mb-4">
                            Mining Solutions
                        </h1>
                        <p className="text text-sm text-center">
                            ipisicing elit. Enim veritatis, cumque libero ut ab omnis reprehenderit eligendi ipsam facere illum magni non laborum, laboriosam veniam. Consectetur facere odio dignissimos modi aliquid atque, molestiae, ipsam animi vel odit neque aspernatur assumenda.
                        </p>
                    </div>
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <p className="text-3xl text-center my-4">
                            <i class="ri-dice-fill "></i>
                        </p>
                        <h1 className="text text-3xl text-center mb-4">
                            Mining Solutions
                        </h1>
                        <p className="text text-sm text-center">
                            ipisicing elit. Enim veritatis, cumque libero ut ab omnis reprehenderit eligendi ipsam facere illum magni non laborum, laboriosam veniam. Consectetur facere odio dignissimos modi aliquid atque, molestiae, ipsam animi vel odit neque aspernatur assumenda.
                        </p>
                    </div>
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <p className="text-3xl text-center my-4">
                            <i class="ri-dice-fill "></i>
                        </p>
                        <h1 className="text text-3xl text-center mb-4">
                            Manufacturing Solutions
                        </h1>
                        <p className="text text-sm text-center">
                            ipisicing elit. Enim veritatis, cumque libero ut ab omnis reprehenderit eligendi ipsam facere illum magni non laborum, laboriosam veniam. Consectetur facere odio dignissimos modi aliquid atque, molestiae, ipsam animi vel odit neque aspernatur assumenda.
                        </p>
                    </div>
                </div>

                <div className=" mt-4 p-2 flex gap-x-4">
                    <Button className=" bg-white py-2 border-2 border-gray-300 px-4 text-sm text-black ">
                        Learn More
                    </Button>

                    <Button className=" bg-white py-2  px-4 text-sm text-black flex">
                        <p className="text-sm">Contact us</p>
                    </Button>


                </div>
            </div>
        </div>
    );
}
