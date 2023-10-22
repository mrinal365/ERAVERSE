import Button from "@/components/button";
import ButtonSec from "@/components/buttonsec";
import Icon from "@/components/icon";
import SquareButton from "@/components/squarebutton";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[100vh]">
        <p className="text-[10vw] mobile:text-[20vw]">ERAVERSE</p>
        <div className="absolute bg-[none] w-[100%] h-[100vh] flex items-center justify-center">
          <div className="relative w-[24vw] h-[30vw] mobile:h-[30vh] mobile:w-[24vh] mobile:top-[-13vh]">
            <Image src={'/girl2.png'} alt="girl" fill={true} />
          </div>
        </div>
        <div className="absolute bg-[none] bg w-[100%] h-[100vh] flex items-center pl-[2vw] justify-start">
          <div className="relative w-[18vw] h-[24vw] mobile:h-[20vh] mobile:w-[14vh]  mobile:top-[10vh]">
            <Image src={'/girl1.png'} alt="girl" fill={true} />
          </div>
        </div>
      </div>
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

    </>
  )
}
