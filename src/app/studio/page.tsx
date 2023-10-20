import Button from '@/components/button'
import Icon from '@/components/icon'
import SquareButton from '@/components/squarebutton'
import Image from 'next/image'

export default function Studio() {
    return (
        <>
        <div className="bg-black flex justify-center items-center h-[100vh] w-[100vw]">
            <div>
                <div className='relative h-[10vw] w-[40vw] '>
                    {/* <p>bkbk</p> */}
                    <Image src='/studioText.png' fill={true} alt="community" />
                </div>
            </div>
        </div>
        <div className='flex justify-center align-center absolute bottom-[4%] w-[100%]'>
                <div className='bg-[#121212] rounded-md p-1 flex items-center gap-5'>
                    <div>
                        <SquareButton/>
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
