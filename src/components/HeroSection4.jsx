"use client";

import { useState } from "react";
import { Dialog, DialogPanel, Button } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import headeImgCopy from '../assets/images/headeImgCopy.png';


export default function HeroSection4() {


    return (
        <div className='bg-white '>
            <div className='relative px-6 lg:px-8 pt-14 isolate flex flex-col justify-center items-center'>
                <div className="grid gap-x-12 p-4 w-3/5  grid-cols-1">
                    <p className=" p-2 text-4xl text-center">
                        Satisfied Customers
                    </p>

                    <p className="text-sm p-2 text-center">
                        vel voluptatibus tempore quidem! Optio at rerum id officia.
                    </p>
                </div>

                <div className="grid  my-4 justify-between  p-4 w-full grid-cols-1 lg:grid-cols-3">
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <p className="text-3xl text-center my-4">
                            <i class="ri-remix-run-fill"></i>
                        </p>

                        <p className="text text-sm text-center">
                            ipisicing elit. Enim veritatis, cumque libero ut ab omnis reprehenderit eligendi ipsam facere illum magni non laborum, laboriosam veniam. Consectetur facere odio dignissimos modi aliquid atque, molestiae, ipsam animi vel odit neque aspernatur assumenda.
                        </p>
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
                            </div>
                        </div>
                    </div>
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <p className="text-3xl text-center my-4">
                            <i class="ri-remix-run-fill"></i>
                        </p>

                        <p className="text text-sm text-center">
                            ipisicing elit. Enim veritatis, cumque libero ut ab omnis reprehenderit eligendi ipsam facere illum magni non laborum, laboriosam veniam. Consectetur facere odio dignissimos modi aliquid atque, molestiae, ipsam animi vel odit neque aspernatur assumenda.
                        </p>
                        <div className=" flex flex-col justify-center gap-y-1 p-2 mt-4 items-center">
                            <div className="border-2 inline-block rounded-full bg-gray-300 p-3">
                                <img src={headeImgCopy} className="w-4 h-4" />
                            </div>
                            <div className=" w-3/4 flex flex-col justify-center items-center p-3">
                                <p className="text text-sm font-bold">
                                    Jane Smith
                                </p>
                                <p className="text text-md text-center">
                                    Operation Manager XYZ Coorporation
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex-col gap-y-2 p-4 items-center justify-center">
                        <p className="text-3xl text-center my-4">
                            <i class="ri-remix-run-fill"></i>
                        </p>

                        <p className="text text-sm text-center">
                            ipisicing elit. Enim veritatis, cumque libero ut ab omnis reprehenderit eligendi ipsam facere illum magni non laborum, laboriosam veniam. Consectetur facere odio dignissimos modi aliquid atque, molestiae, ipsam animi vel odit neque aspernatur assumenda.
                        </p>
                        <div className=" flex flex-col justify-center gap-y-1 p-2 mt-4 items-center">
                            <div className="border-2 inline-block rounded-full bg-gray-300 p-3">
                                <img src={headeImgCopy} className="w-4 h-4" />
                            </div>
                            <div className=" w-3/4 flex flex-col justify-center items-center p-3">
                                <p className="text text-sm font-bold">
                                    Mark Johnson
                                </p>
                                <p className="text text-md">
                                    CEO,ABC Company
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
