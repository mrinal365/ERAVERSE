import Button from "@/components/button";
import Icon from "@/components/icon";
import SquareButton from "@/components/squarebutton";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[100vh]">
        <p className="text-[10vw]">ERAVERSE</p>
        <div className="absolute bg-[none] w-[100%] h-[100vh] flex items-center justify-center">
          <div className="relative w-[24vw] h-[30vw] ">
            <Image src={'/girl2.png'} alt="girl" fill={true}/>
          </div>
        </div>
        <div className="absolute bg-[none] w-[100%] h-[100vh] flex items-center pl-[2vw] justify-start">
          <div className="relative w-[18vw] h-[24vw] ">
            <Image src={'/girl1.png'} alt="girl" fill={true}/>
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
