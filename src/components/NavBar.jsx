import React from 'react'
import { Dialog, DialogPanel, Button } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const navigation = [
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Products", href: "#" },
    { name: "More", href: "#" },
];
const getNavHeader = document.getElementById("nav_header");
console.log(getNavHeader?.offsetTop);


function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    return <header className=' inset-x-0 top-0 z-50  p-3 mt-0 shadow-lg absolute'>
        {/* NAV BAR START */}
        <nav
            aria-label='Global'
            className='flex justify-start items-start p-1'
        >
            <div className='flex mr-4'>
                <a
                    href='#'
                    className='bg-white border border-gray-300 -m-1.5 p-1.5 w-10 h-10 rounded-full'
                >
                    <span className='sr-only'>Your Company</span>
                    {/* <img
          alt=''
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          className='w-auto h-8'
        /> */}
                </a>
            </div>

            {/* NAVIGATION MENU BUTTON  START*/}
            <div className='flex lg:hidden'>
                <button
                    type='button'
                    onClick={() => setMobileMenuOpen(true)}
                    className='inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-700'
                >
                    <span className='sr-only'>Open main menu</span>
                    <Bars3Icon aria-hidden='true' className='w-6 h-6' />
                </button>
            </div>
            {/* NAVIGATION MENU BUTTON END  */}

            {/* NAVIGATION MENUS START*/}
            <div className=' w-full  hidden lg:flex gap-x-6 justify-center items-center w-p-0 lg:gap-x-14'>
                {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className='text-sm font-semibold leading-6 text-gray-900'
                    >
                        {item.name}
                    </a>
                ))}
            </div>
            {/* NAVIGATION MENUS END */}
        </nav>


        {/* NAVBAR END */}
        <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className='lg:hidden'
        >
            <div className='fixed inset-0 z-50' />
            <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:ring-1 sm:ring-gray-900/10 sm:max-w-sm'>
                <div className='flex items-center justify-between'>
                    <a href='#' className='-m-1.5 p-1.5'>
                        <span className='sr-only'>Your Company</span>
                        <img
                            alt=''
                            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                            className='w-auto h-8'
                        />
                    </a>
                    <button
                        type='button'
                        onClick={() => setMobileMenuOpen(false)}
                        className='-m-2.5 p-2.5 rounded-md text-gray-700'
                    >
                        <span className='sr-only'>Close menu</span>
                        <XMarkIcon aria-hidden='true' className='w-6 h-6' />
                    </button>
                </div>
                <div className='flow-root mt-6'>
                    <div className='-my-6 divide-y divide-gray-500/10'>
                        <div className='py-6 space-y-2'>
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className='block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50'
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
}

export default NavBar