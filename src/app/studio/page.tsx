import Button from '@/components/button'
import Icon from '@/components/icon'
import SquareButton from '@/components/squarebutton'
import Image from 'next/image'
import Link from 'next/link'

export default function Studio() {
    return (
        
            <div className="bg-black flex justify-center items-center h-[100vh] w-[100vw]">
                <div>
                    <div className='relative h-[10vw] w-[40vw] mobile:w-[90vw] mobile:h-[25vw] '>
                        {/* <p>bkbk</p> */}
                        <Image src='/studioText.png' fill={true} alt="community" />
                    </div>
                </div>
            </div>
         
        
    )
}
