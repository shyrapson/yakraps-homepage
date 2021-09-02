import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function SideBar({ active }) {
    const [arrow, setArrow] = useState(false)
    const showArrow = (arrow) => {
        setArrow(arrow)
    }
    const sideDatas = [
        { title: "Trial & Pricing", path: "/" },
        { title: "Payment Method", path: "/" },
        { title: "------------", path: "/" },
        { title: "Get started", path: "/" },
    ]

    const Navlinks = ({ title, index }) => {
        return (
            <div className="side mt-2 flex items-center justify-between" onClick={() => showArrow(index)}>
                <Link to="/" >{title}</Link>
                {arrow === index && <div className="line text-white w-28 flex justify-around items-center">
                    <div>

                    </div>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="22px" width="2em"
                        xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd"
                            d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg>

                </div>}

            </div>
        )
    }
    return (
        <div className=" flex flex-col  bg-black text-white md:hidden " >
            {active && <div className=" sidebar flex flex-col ml-5 mb-12  items-start md:flex-row md:items-center " >
                <div className="mt-16">
                    {sideDatas.map((data, index) => (
                        <Navlinks data={data} key={index} index={index} showArrow={showArrow} title={data.title} />
                    ))}

                    <div className="flex items-center  rounded-xl border mt-36 h-40 w-72 ">
                        <div className="qoute relative bg-black pr-4">
                            <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 512 512"
                                height="4em" width="4em" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 
                         160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5
                         21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
                        </div>

                        <p className="flex items-center w-52 h-32 " >sucess is not final; failure is not fatal;
                            it is the courage to continue that counts.<br />
                            -wiston churchil
                        </p>
                        
                    </div>
                </div>

            </div>}

        </div>

    )
}







export default SideBar
