import Image from "next/image";

export default function ButtonSec({title}:any){
    return(
        <div className="cursor-pointer flex justify-enter items-center p-3 sm:py-4 border-[1px] border-gray-500 border-solid bg-[#3E3E3E] rounded-md">
            <div className="relative px-0 py-0 sm:h-4 sm: flex justify-center items-center">
            <p>{title}</p>
            </div>
        </div>
    )
}