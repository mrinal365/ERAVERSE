'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../button'
import SquareButton from '../squarebutton'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import ButtonSec from '../buttonsec'
import Icon from '../icon'

function Navbar() {
    const pathname = usePathname()
    const [connected, setConnected] = useState(true)

    const renderNavBasedOnPath = () => {
        if (pathname == '/studio') {
            return (
                <div className='flex justify-center align-center absolute bottom-[4%] w-[100%]'>
                    {/* <p>{pathname}</p> */}
                    <div className='bg-[#21212180] backdrop-blur	  rounded-md p-1 flex items-center gap-5'>
                        <div>
                            <Link href="/">
                                <SquareButton src={'/iconab.png'} />
                            </Link>
                        </div>
                        <div className='h-1.5 w-1.5 bg-[lightgreen] rounded-lg'>

                        </div>
                        <div className="flex gap-3 sm:gap-5 text-white bg-[#3E3E3E] h-[100%] w-fit max-w-[100%] py-1 px-2 rounded-md items-center pl-6">
                            <div className='text-white flex items-center justify-center gap-[8px]'>
                                <div className='relative h-[2vh] w-[2vh] '>
                                    <Image src={'/danger.png'} fill={true} alt="danger" />
                                </div>
                                <p className="text-sm sm:text-base mobile:text-[9px]">The Studio is coming soon!</p>
                            </div>
                            <div className='flex gap-2'>

                                <Button title="Learn More" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (pathname == '/') {
            return (
                <div className='flex justify-center align-center absolute bottom-[4%] w-[100%]'>
                    <div className='bg-[#21212180] backdrop-blur	 rounded-md p-1 flex items-center gap-5'>
                        <div>
                            <SquareButton src={'/iconlo.png'} />
                        </div>
                        <div className='h-1.5 w-1.5 bg-[lightgreen] rounded-lg'>

                        </div>
                        <div className="flex gap-3 sm:gap-5 text-white bg-[#3E3E3E] h-[100%] w-fit max-w-[100%] py-1 px-2 rounded-md items-center pl-6 mobile:pl-2">
                            {/* <div className='text-white'>
                            <p>Community</p>
                        </div> */}
                            {/* <div className='hidden mobile:block'>
              <Icon src={'/ham.png'} />
            </div> */}
                            <div className='flex sm:flex gap-2 '>
                                <Link href="/community">
                                    <ButtonSec title="Community" />
                                </Link>
                                <Link href="/studio">
                                    <ButtonSec title="Studio" />
                                </Link>
                                <Link href="/shop">
                                    <ButtonSec title="Shop" />
                                </Link>
                                {/* <div className="block"> */}
                                <Button title="Connect" />
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (pathname == "/mint") {
            return (
                <div className='flex justify-center align-center absolute bottom-[4%] w-[100%]'>
                    <div className='bg-[#21212180] backdrop-blur	  rounded-md p-1 flex items-center gap-5 mobile:gap-2'>
                        <div>
                            <Link href="/">
                                <SquareButton src={"/iconab.png"} />
                            </Link>
                        </div>
                        <div className='h-1.5 w-1.5 bg-[lightgreen] rounded-lg'>

                        </div>
                        <div className="flex gap-3 sm:gap-5 text-white bg-[#3E3E3E] h-[100%] w-fit max-w-[100%] py-1 px-2 rounded-md items-center pl-6 mobile:pl-2 mobile:gap-3">
                            <div className='text-white'>
                                <p className="text-sm sm:text-base mobile:text-[10px]">Mint</p>
                            </div>
                            <div className='flex gap-2'>
                                <ButtonSec title="No. of NFT's" />
                                <div className="flex bg-[] items-center mr-2 ml-2 mobile:ml-0 mobile:mr-0">
                                    <p className="text-sm sm:text-base mobile:text-[10px]">Total Price: $0.00 </p>
                                </div>
                                {connected ? <Button title="Mint" /> : <Button title="Connect wallet first" />}

                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (pathname == '/community') {
            return (
                <div className='flex justify-center align-center absolute bottom-[4%] w-[100%]'>
                    <div className='bg-[#21212180] backdrop-blur	  rounded-md p-1 flex items-center gap-5'>
                        <div>
                            <Link href="/">
                                <SquareButton src={'/iconab.png'} />
                            </Link>
                        </div>
                        <div className='h-1.5 w-1.5 bg-[lightgreen] rounded-lg'>

                        </div>
                        <div className="flex gap-3 sm:gap-5 text-white bg-[#3E3E3E] h-[100%] w-fit max-w-[100%] py-0 px-2 rounded-md items-center pl-6 mobile:pl-2">
                            <div className='text-white mobile:hidden'>
                                <p className='text-sm mobile:text-[10px]'>Community</p>
                            </div>
                            {/* <div className='hidden mobile:block'>
                        <Icon src={'/ham.png'}/>
                        </div> */}
                            <div className='flex gap-2 '>
                                <Icon src={'/icond.png'} />
                                <Icon src={'/iconx.png'} />
                                <Icon src={'/iconi.png'} />
                                <Icon src={'/icona.png'} />

                            </div>
                            <Button title="Get in Touch" />
                        </div>
                    </div>
                </div>
            )
        }
        else if (pathname == '/shop') {
            return (
                <div className='flex justify-center align-center absolute bottom-[4%] w-[100%]'>
                    <div className='bg-[#21212180] backdrop-blur	  rounded-md p-1 flex items-center gap-5'>
                        <div>
                            <Link href="/">
                                <SquareButton src={'/iconab.png'} />
                            </Link>
                        </div>
                        <div className='h-1.5 w-1.5 bg-[lightgreen] rounded-lg'>

                        </div>
                        <div className="flex gap-3 sm:gap-5 text-white bg-[#3E3E3E] h-[100%] w-fit max-w-[100%] py-1 px-2 rounded-md items-center pl-6 mobile:pl-2">
                            <div className='text-white'>
                                <p className='mobile:text-[10px]'>Shop</p>
                            </div>
                            <div className='flex gap-2'>
                                <ButtonSec title="Apparel" />
                                <ButtonSec title="Collectibles" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <>
            {renderNavBasedOnPath()}
        </>
    )
}

export default Navbar