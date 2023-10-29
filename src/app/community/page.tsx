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
            
        </>
    )
}
