import React from 'react';
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase()
    console.log(user);
    return (
        <>
            <div>
                <div className="min-h-full shadow-md">
                    <Disclosure as="nav">
                        {({ open }) => (
                            <>
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="grid grid-cols-2 gap-4 items-center py-5">
                                        <div className="flex-shrink-0">
                                            <Link to='/'>
                                                <h2 className='text-purple-500 font-semibold text-2xl capitalize'>IT  <span className='text-green-400'>Solutions</span></h2>
                                            </Link>
                                        </div>
                                        <div className="hidden md:block text-right">
                                            <div className="ml-10 space-x-4">
                                                <NavLink className='font-semibold hover:text-red-400 duration-300' to='/'>Home</NavLink>
                                                <NavLink className='font-semibold hover:text-red-400 duration-300' to='/about'>About Us</NavLink>
                                                <NavLink className='font-semibold hover:text-red-400 duration-300' to='/contact'>Contact</NavLink>
                                                {
                                                    user.email ? <div className='inline-block'> <span><img className='inline w-14 rounded-full' src={user.photoURL} alt="" /></span><Link to='/'><span className='cursor-pointer' onClick={logOut}>Log Out</span></Link> </div> : <NavLink className='font-semibold hover:text-red-400 duration-300' to='/login'>Login</NavLink>
                                                }
                                            </div>
                                        </div>
                                        <div className="-mr-2 flex justify-end md:hidden">
                                            {/* Mobile menu button */}
                                            <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open main menu</span>
                                                {open ? (
                                                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                                                ) : (
                                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                    </div>
                                </div>

                                <Disclosure.Panel className="md:hidden">
                                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                        <NavLink exact className='font-semibold hover:text-red-400 block' to='/'>Home</NavLink>
                                        <NavLink className='font-semibold hover:text-red-400 block' to='/about'>About Us</NavLink>
                                        <NavLink className='font-semibold hover:text-red-400 block' to='/contact'>Contact Us</NavLink>
                                        {
                                            user.email ? <div className='inline-block'>Log Out</div> : <NavLink className='font-semibold hover:text-red-400 block' to='/login'>Login</NavLink>
                                        }
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div >
        </>
    );
};

export default Header;