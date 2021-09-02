import React, { useState } from 'react'
import './main.css'
import { IoMdCheckmark } from 'react-icons/io'
import Slide from './Slider'


function Main() {
    const [active, setActive] = useState('')

    const showIcon = (points) => {
        setActive(points)
    }

    const Offers = ({ offer }) => {
        return (
            <div className="text-sm ">{offer}</div>
        )
    }
    return (
        <div className="maincontainer grid md:grid-cols-1  justify-self-center  gap-y-3 md:gap-y-0 md:gap-x-14 mt-8  md:justify-self-center ">

            <div className=" grid md:grid-cols-2  mb-4  md:ml-0 md:mr-0 gap-y-3 md:gap-y-0 md:gap-x-14 mt-4   ">
                <div>
                    <h1 className="text-gray-600">HEY, TERRY</h1>
                    <p className="font-bold text-xl">Start your <span className="text-yellow-500 italic">30 days</span> Trial</p>
                    <p className="text-xs">Select your preffered package below</p>
                </div>

                <div className="md:ml-24">
                    <h1 className="text-blue-300 text-sm">NGN</h1>
                    <p className="text-blue-500 font-bold">1,999,999</p>
                    <p className=""> Total <span className=" text-sm">(EXCLUDES VAT)</span> </p>
                </div>

                <div className="firstpart   shadow-xl mt-8 p-8 mr-4 md:mr-0 relative" onClick={() => showIcon('first')} >
                    {active === 'first' && <div className="first border w-full justify-end flex  h-full absolute"><IoMdCheckmark /></div>}
                    <p className="text-yellow-500 font-semibold">starts From</p>
                    <p>NGN</p>
                    <h1 className="font-bold">5,999,999.99</h1>
                    <p className="text-sm mb-4">per annum</p>
                    <h1 className="font-bold">Premium</h1>
                    <p className="text-sm">100 Users <span className="text-yellow-500 h-12">.</span> All Modules</p>
                </div>

                <div className="firstpart shadow-xl p-8 mr-4 md:mr-0  relative" onClick={() => showIcon('second')}>
                    {active === 'second' && <div className="second border w-full h-full justify-end flex absolute"><IoMdCheckmark /></div>}
                    <div className="mb-4" className="text-sm mb-4">
                        <h1 className="text-blue-500 font-bold text-xl">Basic</h1>
                        <p >30 days trails on our premium</p>
                        <p>app features and features</p>
                    </div>
                    <Offers offer="INCLUDES ---------------------" />
                    <Offers offer="-25 Users" />
                    <Offers offer="-All modules & features " />
                    <Offers offer="-Unlimited commitees" />
                    <Offers offer="-Unlimited roles creation" />
                </div>

                <div className="mt-4 text-sm font-semibold">
                    <h1>Add more users</h1>
                    <p>NGN 99.999 per users</p>
                </div>
            </div>

            <Slide />

        </div>
    )
}

export default Main
