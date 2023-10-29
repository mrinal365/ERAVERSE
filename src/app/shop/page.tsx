import Button from '@/components/button'
import ButtonSec from '@/components/buttonsec'
import Icon from '@/components/icon'
import SquareButton from '@/components/squarebutton'
import Image from 'next/image'
import Link from 'next/link'

export default function Shop() {
    return (
        <>
            <div className="bg-black flex justify-center items-center h-[100vh] w-[100vw]">
                <div>
                    <div className='relative h-[25vw] w-[100vw] mobile:h-[30vh] '>
                        {/* <p>bkbk</p> */}
                        <Image src='/bg.png' fill={true} alt="bg" />
                        <div className='bg-[] h-[100%] w-[100%] flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center'>
                                    <div className='relative  top-[-13vh] bg-[] h-[18vh] w-[18vh] mobile:top-[-9vh]'>
                                        <Image src={'/icon2.png'} fill={true} alt="Icon" />
                                    </div>
                                </div>

                                <p className='relative m-0 top-[-13vh] text-[3vw] text-[white] text-center mobile:text-[6vw]'>ERAVERSE [LIMITED] APPAREL AND<br /> COLLECTIBLES.</p>
                                <p className='relative top-[-13vh] text-[white] text-center	'>COMING SOON</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-0 flex justify-start align-center bg-[]  h-[auto] w-[100%] mobile:top-[0vh] mobile:left-[0px]'>
                <div className='relative   bg-[] h-[33vh] w-[33vh]'>
                    <Image src={'/tshirt2.png'} fill={true} alt="Icon" />
                </div>
            </div>
            <div className='absolute bottom-[15vh] flex justify-end align-center bg-[]  h-[auto] w-[100%]'>
                <div className='relative   bg-[] h-[33vh] w-[33vh]'>
                    <Image src={'/tshirt1.png'} fill={true} alt="Icon" />
                </div>
            </div>
            <div className='absolute bottom-[10vh] flex justify-start align-center px-[20vw] bg-[]  h-[auto] w-[100%] mobile:px-[2vw]'>
                <div className='relative  bg-[] h-[30vh] w-[30vh] '>
                    <Image src={'/tshirt3.png'} fill={true} alt="tshirt3" />
                </div>
            </div>
            
        </>
    )
}
