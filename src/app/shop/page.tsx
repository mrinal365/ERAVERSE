import Button from '@/components/button'
import Icon from '@/components/icon'
import SquareButton from '@/components/squarebutton'
import Image from 'next/image'

export default function Shop() {
    return (
        <>
            <div className="bg-black flex justify-center items-center h-[100vh] w-[100vw]">
                <div>
                    <div className='relative h-[25vw] w-[100vw] '>
                        {/* <p>bkbk</p> */}
                        <Image src='/bg.png' fill={true} alt="bg" />
                        <div className='bg-[] h-[100%] w-[100%] flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center'>
                                    <div className='relative  top-[-13vh] bg-[] h-[18vh] w-[18vh]'>
                                        <Image src={'/icon2.png'} fill={true} alt="Icon" />
                                    </div>
                                </div>

                                <p className='relative m-0 top-[-13vh] text-[3vw] text-[white] text-center '>ERAVERSE [LIMITED] APPAREL AND<br /> COLLECTIBLES.</p>
                                <p className='relative top-[-13vh] text-[white] text-center	'>COMING SOON</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-0 flex justify-start align-center bg-[]  h-[auto] w-[100%]'>
                <div className='relative   bg-[] h-[33vh] w-[33vh]'>
                    <Image src={'/tshirt2.png'} fill={true} alt="Icon" />
                </div>
            </div>
            <div className='absolute bottom-[15vh] flex justify-end align-center bg-[]  h-[auto] w-[100%]'>
                <div className='relative   bg-[] h-[33vh] w-[33vh]'>
                    <Image src={'/tshirt1.png'} fill={true} alt="Icon" />
                </div>
            </div>
            <div className='absolute bottom-[10vh] flex justify-start align-center px-[20vw] bg-[]  h-[auto] w-[100%]'>
                <div className='relative  bg-[] h-[30vh] w-[30vh] '>
                    <Image src={'/tshirt3.png'} fill={true} alt="tshirt3" />
                </div>
            </div>
            <div className='flex justify-center align-center absolute bottom-[4%] w-[100%]'>
                <div className='bg-[#121212] rounded-md p-1 flex items-center gap-5'>
                    <div>
                        <SquareButton />
                    </div>
                    <div className='h-1.5 w-1.5 bg-[lightgreen] rounded-lg'>

                    </div>
                    <div className="flex gap-3 sm:gap-5 text-white bg-[#3E3E3E] h-[100%] w-fit max-w-[100%] py-1 px-2 rounded-md items-center pl-6">
                        <div className='text-white'>
                            <p>Community</p>
                        </div>
                        <div className='flex gap-2'>
                            <Icon />
                            <Icon />
                            <Icon />
                            <Icon />
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
