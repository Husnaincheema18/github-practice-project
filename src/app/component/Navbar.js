"use client"

import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { listData } from "./S_data";
import Link from "next/link";

const Navbar = () => {

    const [toggel, settoggel]=useState(false)
    const [selectList, setselectList]=useState("Home")


    const toggelMenu=()=>{
        settoggel(!toggel)
    }


  return (
    <div className="fixed top-0  bg-blue-800 right-0 left-0">
      <div className=' flex justify-between w-4/5 m-auto pt-2'>
      <div className=' w-1/5'>
        <img src="images/logoo.png" alt="logo" className=' max-w-32 max-h-16 py-3  ' />
        </div>
        <div className='  w-1/3'>
        <ul className='lg:flex  hidden justify-between text-white py-3 mt-2'>
            {
                listData.map((list, index)=>{
                    return   <>
                    <Link href={list.link}><li key={index} onClick={() => setselectList(list.name)} className={`cursor-pointer hover:text-blue-300 ${ selectList=== list.name ? " text-blue-300 font-bold" : ""}`}>
                               {list.name}
                              </li></Link>

                    
    
                    </>                        
                })
            }
        </ul>
      </div>


    {/* ###############responisve nabvar##########################3 */}
    
      <div className='lg:hidden text-white'>
        <h1 onClick={toggelMenu} className="mt-1 py-3 " >
            {!toggel ? <MenuIcon /> : <CloseIcon />  }
        </h1>
      </div>
      </div>
      {
        toggel ? 
      <div className=" h-screen w-[20vh] border  bg-blue-800 right-0 top-0 absolute   lg:hidden ">
      <div className=''>
      <CloseIcon className="mt-5 text-white ml-5" onClick={toggelMenu} />
        <ul className='   text-white text-center mt-20 '>
        {
                listData.map((list, index)=>{
                    return   <div onClick={toggelMenu}>
                    <Link href={list.link}><li key={index} onClick={() => setselectList(list.name)} className={`cursor-pointer py-5 ${list.name === selectList ? " text-blue-200 font-bold" : ""}`} >
                               {list.name}
                              </li></Link>

                    
    
                    </div>                        
                })
            }
         </ul>
      </div>
      </div>
      : ""
      }
    </div>
  )
}

export default Navbar
