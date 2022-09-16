import { useEffect, useState } from 'react'
import AppLayout from '../layouts/AppLayout'
import Input from '../components/Input/index'
import Button from '../components/Button'


function Withdrawal() {
    const [buttons, setButtons] = useState([{ text: 'BTC', active: true },
    { text: 'SOL', active: false },
    { text: 'TRON', active: false }]);

    const handleSwitch = (text) => setButtons(() => buttons.map(button => ({ ...button, active: button.text === text })))


    const activeButton = buttons.find((button) => button.active)


    return (
        <AppLayout>
            <div className='bg-indigo-50 py-16 leading-10 text-slate-500 font-semibold uppercase gap-[15%] justify-center flex '>
                <div className='md:w-[65%] sm:w-[80%]'>
                    <h1 className='font-bold text-5xl sm:text-4xl pb-4'>WITHDRAWAL</h1>
                    <label htmlFor="">Amount</label>
                    <div className='flex relative'>
                        <span className='text-center pt-2 absolute z-10 top-0 left-2 h-full px-6 text-white bg-indigo-300'>{activeButton.text}</span>
                        <Input className="border-2 pl-28 focus:text-black border-indigo-300" placeholder="Min 0.001 BTC" />
                    </div>

                    <p className='pt-6 pb-2'>Select chain:</p>
                    <div className='flex items-center gap-6 text-indigo-400'>
                        {
                            buttons.map((button, index) => {
                                return (
                                    <Button
                                        key={index}
                                        variant={button.active === true ? 'primary' : 'default'}
                                        children={button.text}
                                        className={button.active === false ? "bg-white border-2 rounded-md transition border-indigo-400 hover:bg-indigo-200 hover:text-white hover:border-2 hover:border-transparent duration-500 ease p-10" : "bg-white border-2 focus:outline-none rounded-md border-indigo-400"} 
                                        onClick={()=>handleSwitch(button.text)}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div>
                <form action="">
                    <div className='w-[75%] mx-auto uppercase text-slate-500 font-semibold flex flex-col my-10 gap-8'>
                        <div>
                            <label htmlFor="" className='text-lg'>Wallet Address</label>
                            <Input className="py-4 border-2 focus:text-black border-indigo-300" placeholder="Enter Address" />
                        </div>

                        <div>
                            <label htmlFor="" className='text-lg'>Price</label>
                            <Input className=" py-4 border-2  border-indigo-300" value="0.0003 BTC" />
                        </div>
                    </div>
                </form>

                <Button children="Proceed" variant="primary" className="py-3 px-6 mx-auto" />
            </div>

        </AppLayout>
    )
}

export default Withdrawal