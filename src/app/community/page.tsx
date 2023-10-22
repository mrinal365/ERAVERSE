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
                    <div className='relative h-[15vw] w-[45vw] mobile:w-[90vw] mobile:h-[30vw] '>
                        <Image src='/communityText.png' fill={true} alt="community" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center align-center absolute bottom-[4%] w-[100%]'>
                <div className='bg-[#21212180] backdrop-blur	  rounded-md p-1 flex items-center gap-5'>
                    <div>
                    <Link href="/">
                        <SquareButton src={'/iconab.png'}/>
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
                            <Icon  src={'/iconx.png'} />
                            <Icon src={'/iconi.png'} />
                            <Icon src={'/icona.png'}/>
                            
                        </div>
                        <Button title="Get in Touch"/>
                    </div>
                </div>
            </div>
        </>
    )
}
