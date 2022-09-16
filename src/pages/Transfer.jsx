import React, { useState } from 'react'
import AppLayout from '../layouts/AppLayout'
import Input from '../components/Input'
import Logo from '../assets/bitcoin.svg'
import { ArrowRightIcon, ArrowLeftIcon, ArrowUpIcon, ArrowDownIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import Button from '../components/Button'

function Transfer() {
    // const [toggle, setToggle] = useState(false)

  return (
    <AppLayout>
        <div className='w-[90%] mx-auto border-[3px] mt-5 rounded text-xl text-slate-600 font-bold shadow-lg'>
        <h1 className='md:text-4xl sm:text-3xl text-center py-3 text-slate-500 font-bold'>TRANSFER</h1>
        <form action="" className='p-8'>
          <div className='w-[95%] mx-auto leading-10'>
          <div>
                <label htmlFor="">Recipient</label>
                <Input className='text-sm py-4' placeholder="Enter a BTC address"/>
            </div>
           
                <label htmlFor="">Withdraw from</label>
                <div className='flex border-2 relative border-slate-100 sm:px-4 md:px-[5%] py-3 text-xl items-center text-slate-400 bg-white rounded justify-between'>
                   <button className='w-8 absolute top-3 left-3'>
                   <PlusCircleIcon/>
                   </button>
                    <div className='flex items-center sm:gap-1 md:gap-4 py-3'>
                    <img src={Logo} alt="btc icon" />
                    <p className='sm:text-2xl md:text-3xl sm:font-semibold md:font-bold'>BTC WALLET</p>
                    </div>
                    <div>
                        <p className='py-2'>0.0778895BTC</p>
                        <p>$500.00</p>
                    </div>
               </div>
               <div>
                <ul className='hidden'>
                    <li className='flex justify-between px-[5%] bg-gray-200 opacity-70'>
                    <div className='flex items-center sm:gap-1 md:gap-4'>
                    <img src={Logo} alt="btc icon" />
                    <p className='sm:text-2xl md:text-3xl sm:font-semibold md:font-bold'>BTC WALLET</p>
                    </div>
                    <div>
                        <p >0.0778895BTC</p>
                        <p>$500.00</p>
                    </div>
                    </li>
                </ul>
               </div>
                        <label htmlFor="">Amount</label>
                        <div className="flex flex-col md:flex-row justify-center gap-[2%]">
                        <div className='flex relative w-[35%] sm:w-full'>
                            <Input />
                            <span className='bg-indigo-300 font-bold absolute h-full right-0 top-0 pt-2 px-4 text-white'>USD</span>
                        </div>
                      <div className='md:flex flex-col hidden h-12 text-slate-400 w-[14%]'>
                      <ArrowLeftIcon/>
                        <ArrowRightIcon />
                      </div>
                      <div className='flex flex-col md:hidden sm:flex-row h-12 sm:mx-auto text-slate-400 w-[14%]'>
                      <ArrowUpIcon/>
                        <ArrowDownIcon />
                      </div>
                        <div className='flex relative w-[35%] sm:w-full'>
                            <Input />
                            <span className='bg-indigo-300 font-bold absolute h-full right-0 top-0 pt-2 px-4 text-white'>BTC</span>
                        </div>
                        </div>

                        <label htmlFor="">Balance</label>
                        <Input placeholder="Main balance"/>

                        <label htmlFor="">Description</label>
                        <Input placeholder="Description"/>
          </div>
                       <Button children="proceed" variant="primary" className="my-5 mx-auto"/>
            </form>
        </div>
    </AppLayout>
  )
}

export default Transfer