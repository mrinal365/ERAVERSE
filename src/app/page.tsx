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
      

    </>
  )
}
