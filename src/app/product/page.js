"use client"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductDataAsync } from "../slices/Produc_data_slice"
 import { style } from "../component/Style"
import Link from "next/link"


const page = () => {
  const dispatch =useDispatch()
  const product_data=useSelector((state)=>state.product_store.productData)
  
useEffect(()=>{
  dispatch(getProductDataAsync())
},[])

  console.log("data", product_data)
  return (
    <div className="mt-20 m-auto w-4/5">
      <h1 className={`text-center ${style.h1} text-gray-300`}>Product Data</h1>
      <div className=" grid lg:grid-cols-3 gap-5 mt-10">
        {
          product_data.map((currentItem, index)=>{
          return <div key={index} className="border border-gray-400 mt-5">
          <Link href={`/product/${currentItem.id}`}>
               <img src={currentItem.image} alt={currentItem.name} className=" hover:p-1" />
               </Link>
               <h1 className={`${style.h1} text-center text-gray-400 mt-5`}>{currentItem.name}</h1>
               <p className="mt-5 text-center">{currentItem.description.slice(0, 130)}</p>
               <div className="text-center">
               <button className={`${style.btn}`}>More detail</button>
               </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default page
