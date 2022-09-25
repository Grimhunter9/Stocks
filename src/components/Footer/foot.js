import React from "react";
import { BsTelegram , BsLinkedin , BsGithub , BsTwitter} from "react-icons/bs";



export default function Foot(){
    return(
        <div  className="flex flex-col bg-gray-700 items-center justify-center h-full sm:flex-row sm:h-52 sm:justify-around">
    
            <div className='flex flex-col pt-5 items-center text-white w-1/2 sm:w-auto sm:pt-0'>
                <h1 className="text-[#2795E1] pb-4 text-5xl">Seasting</h1>

            </div>

            <div className="flex flex-col items-start w-5/6 pt-5 pb-10 h-1/2 sm:w-1/3 sm:pt-0 sm-pb-0">
                <h1 className="text-[#2795E1] pb-4 text-xl">Social</h1>
                <div className="flex sm:flex-row sm:mt-3 justify-between w-full">
                    <a href="https://t.me/Yehorsk"><BsTelegram className=" ml-3 text-3xl cursor-pointer hover:text-[#2F9DD6]"/></a>
                    <a href="https://www.linkedin.com/in/seasting-vd-57a68824a/"><BsLinkedin className="text-3xl cursor-pointer hover:text-[#1569BF]"/></a>
                    <a href="https://github.com/BadaBing01"><BsGithub className="text-3xl cursor-pointer hover:text-white"/></a>
                    <a href="https://twitter.com/seastingvd"><BsTwitter className="text-3xl cursor-pointer hover:text-[#2795E1]"/></a>
                </div>

           </div>
        </div>
    )
}