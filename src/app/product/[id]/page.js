"use client"
import { useParams } from "next/navigation"


const page = () => {
    const id= useParams().id;
    console.log(id,"id")
  return (
    <div className="mt-20">
      <h1>id data </h1>
    </div>
  )
}

export default page
