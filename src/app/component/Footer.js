import { style } from "./Style"

const Footer = () => {
  return (
    <div className="bg-blue-800 mt-20">
    <div className=' w-4/5 m-auto  mt-10  text-white pb-5  '  >
    <div className='grid lg:grid-cols-4 md:col-span-2 '>
    <div className='mt-5'>
        <img src="images/logoo.png" alt="heroSection" className="w-[60%] lg:h-10 sm:h-20 md:20 " />
        <p className="mt-7">A new way to make the payments easy, reliable and secure.</p>
    </div>
    <div className="mt-5 lg:mx-5">
        <p className={` font-bold mt-5`}>Usefull Links</p>
        <div className={`${style.color}`}>
        <p>Content</p>
        <p>How it Works</p>
        <p>Create</p>
        <p>Explore</p>
        <p>Terms & Services</p>
        </div>
    </div>
    <div className="mt-5 lg:mx-5">
    <p className={` font-bold mt-5`}>Community</p>
    <div className={`${style.color}`}>
        <p>Help Center</p>
        <p>Partners</p>
        <p>Suggestions</p>
        <p>Blog</p>
        <p>Newsletters</p>
        </div>
    </div>
    <div className="mt-5 lg:mx-5">
    <p className={` font-bold mt-5`}>Partner</p>
    <div className={`${style.color}`}>
        <p>Our Partner</p>
        <p>Become a Partner</p>
        </div>
        </div>
            </div>
<hr className="h-5 mt-5" />
            <div className="flex justify-between">
                <div className="w-[60%]">copyright 2024 HooBank. All Rights Reserved.</div>
                <div className="flex float-right">
                    <img src="images/socialicon.png" alt="socialIcon" className=" float-right  h-5 " />
                </div>
            </div>
    </div>
    </div>
  )
}

export default Footer
