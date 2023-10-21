import Image from 'next/image'
import Link from 'next/link'

//import Components below
import Icon from '@/components/icon/index'
import Button from '@/components/button'
import SquareButton from '@/components/squarebutton'

export default function Community() {
    return (
        <>
            <div className="bg-black flex justify-center items-center h-[100vh] w-[100vw]">
                <div>
                    <div className='relative h-[15vw] w-[45vw] '>
                        {/* <p>bkbk</p> */}
                        <Image src='/communityText.png' fill={true} alt="community" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center align-center absolute bottom-[4%] w-[100%]'>
                <div className='bg-[#121212] rounded-md p-1 flex items-center gap-5'>
                    <div>
                    <Link href="/">
                        <SquareButton src={'/iconab.png'}/>
                        </Link>
                    </div>
                    <div className='h-1.5 w-1.5 bg-[lightgreen] rounded-lg'>

                    </div>
                    <div className="flex gap-3 sm:gap-5 text-white bg-[#3E3E3E] h-[100%] w-fit max-w-[100%] py-0 px-2 rounded-md items-center pl-6">
                        <div className='text-white'>
                            <p className='text-sm'>Community</p>
                        </div>
                        <div className='flex gap-2'>
                            <Icon src={'/icond.png'} />
                            <Icon  src={'/iconx.png'} />
                            <Icon src={'/iconi.png'} />
                            <Icon src={'/icona.png'}/>
                            <Button title="Get in Touch"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
