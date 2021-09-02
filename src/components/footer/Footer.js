import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import { MdReport } from 'react-icons/md';
import { RiGovernmentFill } from 'react-icons/ri';
import { GiRelationshipBounds } from 'react-icons/gi';
import { MdAssessment } from 'react-icons/md';
import { RiDoorOpenLine } from 'react-icons/ri';
import { BiBasket } from 'react-icons/bi';
import { FaCashRegister } from 'react-icons/fa';
import { RiContactsBookLine } from 'react-icons/ri';
import { BsClock } from 'react-icons/bs';


function Footer() {
    const [info, setInfo] = useState(false)
    const clickInfo = (info) => {
        setInfo(info)
    }

    const FooterDatas = [
        { title: 'Government Portal', path: '/', icon: <RiGovernmentFill /> },
        { title: 'Coorperate Universe', path: '/', icon: <RiDoorOpenLine /> },
        { title: 'Contact Domain', path: '/', icon: <RiContactsBookLine /> },
        { title: 'Investor Relation', path: '/', icon: <GiRelationshipBounds /> },
        { title: 'Dispute Portfolio', path: '/', icon: <BiBasket /> },
        { title: 'Minutes Block', path: '/', icon: <BsClock /> },
        { title: 'Reporting Tool', path: '/', icon: <MdAssessment /> },
        { title: 'Attendance Register', path: '/', icon: <FaCashRegister /> },
    ]

    const FooterLinks = ({ title, icon, index, path, clickInfo }) => {
        return (
            <div className=" w-28 flex justify-self-center items-center" onClick={() => clickInfo(index)}>
                <Link to={path} >
                    <p className="footerIcon mr-2">{icon}</p>
                    <span >{title}</span>
                </Link>
                {info === index && <div className="information rounded  h-4 w-6 flex items-center justify-center">< MdReport /></div>}
            </div>
        )
    }

    return (
        <div>
            <div className="flex items-center text-sm font-semibold mt-4 justify-start text-gray-500 ml-16 mr-16 md:mr-0 md:ml-48" >
                <p>ALL MODULES</p>
                <div className="modules ml-1"></div>
            </div>
            <div className="footer mt-4 text-sm  md:text-sm grid grid-cols-2 mr-8 ml-4  mb-4  md:grid-cols-3  " >
                {FooterDatas.map((data, index) => (
                    <FooterLinks data={data} title={data.title} index={index} path={data.path} icon={data.icon} key={index} clickInfo={clickInfo} />
                ))}
            </div>
            <div className="btn flex items-center text-sm justify-between mr-12 ml-12 md:ml-36 md:mr-36">
                <button className=" text-pink-500 mt-4 font-bold">Go Back</button>
                <button className="rounded-md border bg-yellow-400 font-bold h-8 w-24 mt-4">Continue</button>
            </div>
        </div>

    )
}

export default Footer
