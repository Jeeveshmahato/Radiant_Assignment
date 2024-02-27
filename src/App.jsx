import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { GoCheckCircle } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import img1 from '../src/assets/download 1.jpg'
import { IoDiamondOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

const App = () => {
  const [selects, setSelects] = useState('');

  return (
    <>
      <div className=' mx-auto text-[#5C6874] flex flex-col w-[100%] gap-10'>
        <header className=' w-full bg-[#212731] flex justify-center '>
          <div className=' text-[12px] md:text-[16px] font-[500] text-[#D1D6DA] flex items-center gap-2 md:gap-5 lg:gap-10 py-4 mx-auto'>
            <div className=' flex gap-2 p-2  bg-white rounded-[8px]'>
              <FiSearch className=' text-black text-[24px]' />
              <input className=' w-10 md:w-full' type="text" />
            </div>
            <p>Categories</p>
            <p>Website Builders</p>
            <p>Today's deals</p>
          </div>

        </header>
        <body className=' bg-[#FBFCFD] w-full p-5  mx-auto justify-center gap-3'>
          <div className='flex flex-col gap-3 md:w-[90%] w-full  lg:w-[80%] mx-auto'>
            <p className=' text-centers md:text-[20px] text-[16px]  lg:text-[35px] font-[400] '>Best Website builders in the US</p>
            <div className=' w-full border border-[#E1E4E6]'>
            </div>
            <div className=' text-[#4B5665] items-center md:text-[16px] sm:text-[14px] text-[12px] lg:text-[20px] font-[400] flex justify-between'>
              <div className=' flex gap-1 items-center'>
                <GoCheckCircle className=' font-normal ' />
                <p className=''>Last Updated </p>
                <p>-</p>
                <p>February 22, 2020</p>
                <IoMdInformationCircleOutline className=' ml-4' />
                <p>Advertising Disclosure</p>
              </div>
              <div className=' w- flex flex-col items-center justify-center'>
                <h1>{selects}</h1>
                <select className=' ' value={selects} onChange={(e) => setSelects(e.target.value)}>
                  <option>Top Relevant</option>
                  <option>Most Recent</option>
                  <option>Highest Rated</option>
                  <option>Lowest Price</option>
                </select>
              </div>
            </div>
            <div className=' w-full border border-[#E1E4E6]'>

            </div>
            <div className=' flex flex-wrap gap-5'>
              <button className=' rounded-[12px] flex bg-[#FFFFFF] items-center justify-center md:px-4 px-2 lg:px-8 py-2'>
                Tools
              </button>
              <button className=' rounded-[12px] flex bg-[#FFFFFF] items-center justify-center md:px-4 px-2 lg:px-8 py-2'>
                AWS Builder
              </button>
              <button className=' rounded-[12px] flex bg-[#FFFFFF] items-center justify-center md:px-4 px-2 lg:px-8 py-2'>
                Start Build
              </button>
              <button className=' rounded-[12px] flex bg-[#FFFFFF] items-center justify-center md:px-4 px-2 lg:px-8 py-2'>
                Build Supplies
              </button>
              <button className=' rounded-[12px] flex bg-[#FFFFFF] items-center justify-center md:px-4 px-2 lg:px-8 py-2'>
                Tooling
              </button>
              <button className=' rounded-[12px] flex bg-[#FFFFFF] items-center justify-center md:px-4 px-2 lg:px-8 py-2'>
                BlueHosting
              </button>
            </div>
            <div className=' text-[12px] lg:text-[16px] items-center font-[500] text-[#5C6874] flex gap-3'>
              <p>Home</p>
              <RiArrowRightSLine />
              <p>Home</p>
              <RiArrowRightSLine />
              <p>Home</p>
              <RiArrowRightSLine />
              <p>Home</p>
              <RiArrowRightSLine />
              <p>Hosting5</p>
            </div>
            <div className=' mt-6 relative bg-white flex flex-col  lg:flex-row gap-3 justify-between px-5 '>
              <div className=' bg-[#FF7724] text-white flex text-[20px] gap-2 rounded-[8px] items-center  p-2 absolute -top-2 left-0'>
                <  GoTrophy />
                <p className=' text-[16px] font-[400]'>Best Choice</p>
              </div>
              <div className=' absolute rounded-full bg-white  top-10 -left-6 h-[44px] w-[44px] flex items-center justify-center '>
                <p>1</p>
              </div>
              <div className=' flex items-center justify-center flex-col w-[340px] my-20  gap-4'>
                <img className='w-[140px] h-[100px] ' src={img1} alt="" />
                <p className=' text-center'>Builder 1</p>

              </div>
              <div className=' text-[16px] py-9  text-[#56606E]'>
                <span className='text-[#4B5665] font-[700]'>WixPro 72-Inch Responsive Website Builder<span className='font-[400]'>- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</span></span>
                <p className='text-[#4B5665]  mt-2 font-[700]'>Main highlights</p>
                <p className=' ml-4'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                <div className=' text-[#1B88F4] mt-7 text-[16px] items-center hover:cursor-pointer flex gap-1'>
                  <p>Show more </p>
                  <IoIosArrowDown />
                </div>
              </div>
              <div className=' flex gap-10  justify-between flex-col'>
                <div className=' flex flex-col  mx-auto items-center justify-center p-4 rounded-b-[15px] bg-[#F3F9FF]'>
                  <p className='text-[#074786] text-[36px] font-[400]'>9.8</p>
                  <p className='text-[#074786] text-[16px] font-[400]'>Exceptional</p>
                  <div className=' flex gap-1'>
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaStar className='text-[#FFB80F] text-[11px]' />

                  </div>
                </div>
                <button className=' mb-5 px-20 py-2 rounded-[12px] bg-[#1B88F4] text-white'>
                  View
                </button>
              </div>
            </div>
            <div className=' mt-6 relative bg-white flex flex-col  lg:flex-row  gap-3 justify-between px-5 '>
              <div className=' bg-[#FF7724] text-white flex text-[20px] gap-2 rounded-[8px] items-center  p-2 absolute -top-2 left-0'>
                <  IoDiamondOutline />
                <p className=' text-[16px] font-[400]'>Best Values</p>
              </div>
              <div className=' absolute rounded-full bg-white  top-10 -left-6 h-[44px] w-[44px] flex items-center justify-center '>
                <p>2</p>
              </div>
              <div className=' flex items-center justify-center flex-col w-[340px] my-20  gap-4'>
                <img className='w-[140px] h-[100px] ' src={img1} alt="" />
                <p className=' text-center'>Builder</p>

              </div>
              <div className=' text-[16px] py-9  text-[#56606E]'>
                <span className='text-[#4B5665] font-[700]'>SiteCraft 68-Inch Ultimate Web Design Studio<span className='font-[400]'>- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</span></span>
                <p className='text-[#4B5665]  mt-2 font-[700]'>Main highlights</p>
                <p className=' ml-4'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
                <div className=' text-[#1B88F4] mt-7 text-[16px] items-center hover:cursor-pointer flex gap-1'>
                  <p>Show more </p>
                  <IoIosArrowDown />
                </div>
              </div>
              <div className=' flex gap-10  justify-between flex-col'>
                <div className=' flex flex-col  mx-auto items-center justify-center p-4 rounded-b-[15px] bg-[#F3F9FF]'>
                  <p className='text-[#074786] text-[36px] font-[400]'>9.5</p>
                  <p className='text-[#074786] text-[16px] font-[400]'>Excellent</p>
                  <div className=' flex gap-1'>
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaStar className='text-[#FFB80F] text-[11px]' />

                  </div>
                </div>
                <button className=' mb-5 px-20 py-2 rounded-[12px] bg-[#1B88F4] text-white'>
                  View
                </button>
              </div>
            </div>

            <div className=' mt-6 relative bg-white flex flex-col  lg:flex-row   gap-3 justify-between px-5 '>

              <div className=' absolute rounded-full bg-white  top-10 -left-6 h-[44px] w-[44px] flex items-center justify-center '>
                <p>3</p>
              </div>
              <div className=' flex items-center justify-center flex-col w-[340px] my-20  gap-4'>
                <img className='w-[140px] h-[100px] ' src={img1} alt="" />
                <p className=' text-center'>Builder 1</p>

              </div>
              <div className=' text-[16px] py-9  text-[#56606E]'>
                <span className='text-[#4B5665] font-[700]'>WixPro 72-Inch Responsive Website Builder<span className='font-[400]'>- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</span></span>
                <p className='text-[#4B5665]  mt-2 font-[700]'>Main highlights</p>
                <p className=' ml-4'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                <div className=' text-[#1B88F4] mt-7 text-[16px] items-center hover:cursor-pointer flex gap-1'>
                  <p>Show more </p>
                  <IoIosArrowDown />
                </div>
              </div>
              <div className=' flex gap-10  justify-between flex-col'>
                <div className=' flex flex-col  mx-auto items-center justify-center p-4 rounded-b-[15px] bg-[#F3F9FF]'>
                  <p className='text-[#074786] text-[36px] font-[400]'>9.8</p>
                  <p className='text-[#074786] text-[16px] font-[400]'>Exceptional</p>
                  <div className=' flex gap-1'>
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaStar className='text-[#FFB80F] text-[11px]' />

                  </div>
                </div>
                <button className=' mb-5 px-20 py-2 rounded-[12px] bg-[#1B88F4] text-white'>
                  View
                </button>
              </div>
            </div>
            <div className=' mt-6 relative bg-white flex flex-col  lg:flex-row   gap-3 justify-between px-5 '>

              <div className=' absolute rounded-full bg-white  top-10 -left-6 h-[44px] w-[44px] flex items-center justify-center '>
                <p>4</p>
              </div>
              <div className=' flex items-center justify-center flex-col w-[340px] my-20  gap-4'>
                <img className='w-[140px] h-[100px] ' src={img1} alt="" />
                <p className=' text-center'>CDK</p>

              </div>
              <div className=' text-[16px] py-9  text-[#56606E]'>
                <span className='text-[#4B5665] font-[700]'>CDK Resposive Builder<span className='font-[400]'>: An extensive library of widgets and apps, and detailed step-by-step guides</span></span>
                <p className='text-[#4B5665]  mt-2 font-[700]'>Main highlights</p>

                <div className='ml-4 flex flex-col gap-0 rounded-[12px] bg-[#FFF4ED]'>
                  <div className=' px-8 py-3 text-[16px] font-[400] items-center flex gap-2 '>
                    <div className=' rounded-[8px] text-[#1B88F4]  bg-white px-4 py-2'>
                      9.9
                    </div>
                    <p>Building Responsive</p>
                  </div>
                  <div className=' px-8 py-3 text-[16px] font-[400] items-center flex gap-2 '>
                    <div className=' rounded-[8px] text-[#1B88F4]  bg-white px-4 py-2'>
                      8.9
                    </div>
                    <p>Cool</p>
                  </div>
                  <div className=' px-8 py-3 text-[16px] font-[400] items-center flex gap-2 '>
                    <div className=' rounded-[8px] text-[#1B88F4]  bg-white px-4 py-2'>
                      8.9
                    </div>
                    <p>Docs</p>
                  </div>
                </div>
                <p className='text-[16px] font-[400] my-4 '>Why we love it</p>
                <div className=' flex flex-col gap-2'>
                  <div className=' text-[16px] font-[400]  flex items-center gap-2'>
                    <div className=' bg-[#EBF5FF] p-1 rounded-full flex items-center justify-center'>
                      <FaCheck className='text-[#0855A1]' />
                    </div>
                    <p>Documentation</p>
                  </div>
                  <div className=' text-[16px] font-[400]  flex items-center gap-2'>
                    <div className=' bg-[#EBF5FF] p-1 rounded-full flex items-center justify-center'>
                      <FaCheck className='text-[#0855A1]' />
                    </div>
                    <p>Easy Use</p>
                  </div>
                  <div className=' text-[16px] font-[400]  flex items-center gap-2'>
                    <div className=' bg-[#EBF5FF] p-1 rounded-full flex items-center justify-center'>
                      <FaCheck className='text-[#0855A1]' />
                    </div>
                    <p>Out of box</p>
                  </div>
                  <div className=' text-[#1B88F4] mt-7 text-[16px] items-center hover:cursor-pointer flex gap-1'>
                    <p>Show more </p>
                    <IoIosArrowDown />
                  </div>
                </div>
              </div>
              <div className=' flex gap-10  justify-between flex-col'>
                <div className=' flex flex-col  mx-auto items-center justify-center p-4 rounded-b-[15px] bg-[#F3F9FF]'>
                  <p className='text-[#074786] text-[36px] font-[400]'>9.5</p>
                  <p className='text-[#074786] text-[16px] font-[400]'>Very Good</p>
                  <div className=' flex gap-1'>
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaStar className='text-[#FFB80F] text-[11px]' />
                    <FaRegStar className='text-[#FFB80F] text-[11px]' />

                  </div>
                </div>
                <button className=' mb-5 px-20 py-2 rounded-[12px] bg-[#1B88F4] text-white'>
                  View
                </button>
              </div>
            </div>

            <p className=' text-centers text-[25px] font-[400]  text-[#2C384A]'>Related deals you might like for</p>
            <div className=' flex flex-wrap  justify-between gap-5'>
              <div className=' bg-white flex w-[330px] h-[420px] flex-col gap-1'>
                <div className=' flex my-10 items-center justify-center'>
                  <img className=' flex   w-[140px] h-[100px] ' src={img1} alt="" />
                </div>

                <div className=' flex pl-8 gap-1'>
                  <button className=' rounded-[8px] text-[#074786] bg-[#F2F4F7] p-2 flex items-center justify-center'>
                    <p>20% Off</p>

                  </button>
                  <button className=' rounded-[8px] text-[#074786] bg-[#F2F4F7] p-2 flex items-center justify-center'>
                    <p>Limited time</p>

                  </button>

                </div>
                <p className=' text-center text-[#626E79] text-[24px] font-[700] py-2'>Webbuilder 1</p>
                <p className=' text-[16px] mx-auto font-[400]'>Computer  Modern clasic with wix support</p>

                <div className=' mx-4 text-[24px] font-[400] flex gap-2'>
                  <p>$39.96</p>
                  <p className='text-[16px] text-[#9FA9B3] flex items-end'>$49.96</p>
                  <p className='text-[16px]  text-[#EF4C5D] flex items-end'>(20% off)</p>
                </div>
                <button className='mx-4 my-3 px-20 py-2 rounded-[12px] bg-[#1B88F4] text-white'>
                  View Deal
                </button>
              </div>
              <div className=' bg-white flex w-[330px] h-[420px] flex-col gap-1'>
                <div className=' flex my-10 items-center justify-center'>
                  <img className=' flex   w-[140px] h-[100px] ' src={img1} alt="" />
                </div>

                <div className=' flex pl-8 gap-1'>
                  <button className=' rounded-[8px] text-[#074786] bg-[#F2F4F7] p-2 flex items-center justify-center'>
                    <p>20% Off</p>

                  </button>
                  <button className=' rounded-[8px] text-[#074786] bg-[#F2F4F7] p-2 flex items-center justify-center'>
                    <p>Limited time</p>

                  </button>

                </div>
                <p className=' text-center text-[#626E79] text-[24px] font-[700] py-2'>Webbuilder 1</p>
                <p className=' text-[16px] mx-auto font-[400]'>Computer  Modern clasic with wix support</p>

                <div className=' mx-4 text-[24px] font-[400] flex gap-2'>
                  <p>$39.96</p>
                  <p className='text-[16px] text-[#9FA9B3] flex items-end'>$49.96</p>
                  <p className='text-[16px]  text-[#EF4C5D] flex items-end'>(20% off)</p>
                </div>
                <button className='mx-4 my-3 px-20 py-2 rounded-[12px] bg-[#1B88F4] text-white'>
                  View Deal
                </button>
              </div>
              <div className=' bg-white flex w-[330px] h-[420px] flex-col gap-1'>
                <div className=' flex my-10 items-center justify-center'>
                  <img className=' flex   w-[140px] h-[100px] ' src={img1} alt="" />
                </div>

                <div className=' flex pl-8 gap-1'>
                  <button className=' rounded-[8px] text-[#074786] bg-[#F2F4F7] p-2 flex items-center justify-center'>
                    <p>20% Off</p>

                  </button>
                  <button className=' rounded-[8px] text-[#074786] bg-[#F2F4F7] p-2 flex items-center justify-center'>
                    <p>Limited time</p>

                  </button>

                </div>
                <p className=' text-center text-[#626E79] text-[24px] font-[700] py-2'>Webbuilder 1</p>
                <p className=' text-[16px] mx-auto font-[400]'>Computer  Modern clasic with wix support</p>

                <div className=' mx-4 text-[24px] font-[400] flex gap-2'>
                  <p>$39.96</p>
                  <p className='text-[16px] text-[#9FA9B3] flex items-end'>$49.96</p>
                  <p className='text-[16px]  text-[#EF4C5D] flex items-end'>(20% off)</p>
                </div>
                <button className='mx-4 my-3 px-20 py-2 rounded-[12px] bg-[#1B88F4] text-white'>
                  View Deal
                </button>
              </div>

            </div>
            <div className='  mt-10 flex justify-between '>
              <p className=' md:text-[20px] text-[14px] lg:text-[28px] font-[400]'>Sign up and get exclusive special deals</p>
              <div className=' flex'>
                <input className='m-2' type="text" />
                <button className='  flex items-center justify-center px-2 md:px-4 lg:px-6 py-2 rounded-r-[12px] text-white bg-[#1B88F4]'>Sign Up</button>
              </div>
            </div>

          </div>
        </body>
        <footer>
          <div className=' text-[14px] font-[400]  w-full text-white bg-[#212731] flex justify-center mx-auto sm:gap-10 md:gap-20 lg:gap-32   gap-5 p-2 py-4'>
            <div className=' flex flex-col gap-2 '>
              <p className='text-[20px]'>Categories</p>
              <p>Web Builder</p>
              <p>Hosting</p>
              <p>Data Center</p>
              <p>Robotic-Automation</p>
            </div>
            <div className=' flex flex-col gap-2 '>
              <p className='text-[20px]'>Contact</p>
              <p>Contact</p>
              <p>Privacy Policy</p>
              <p>Terms Of Service</p>
              <p>Categories</p>
              <p>About</p>
            </div>
            <div className=' flex items-center gap-2'>
              <p>United States</p>
              <MdKeyboardArrowDown className='text-white' />
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App