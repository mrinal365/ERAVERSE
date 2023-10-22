'use client'
import Image from "next/image";
import Icon from "@/components/icon";
import SquareButton from "@/components/squarebutton";
import Button from "@/components/button";
import ButtonSec from "@/components/buttonsec";
import { useState } from "react";
import Link from "next/link";
export default function Mint() {
    const [connected, setConnected] = useState(true)
    return (
        <>
            <div className="h-[100vh] bg-[#0D0C0C] flex items-center justify-center w-[100%]">
                <div className="relative h-[72vh] w-[45vh] mobile:w-[98vw] mobile:h-[150vw]">
                    <Image src="/nft.png" fill={true} alt="nft" />
                </div>
            </div>
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
        </>
    )
}