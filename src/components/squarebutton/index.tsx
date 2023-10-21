import Image from "next/image";

export default function SquareButton({src}:any){
    return(
        <div className="flex justify-enter items-center p-3 sm:p-5  bg-[#3E3E3E] rounded-md">
            <div className="relative h-3 w-3 sm:h-4 sm:w-4 flex justify-center items-center">
            <Image src={src?src:'/iconx.png'} fill={true} alt="icon"/>
            </div>
        </div>
    )
}