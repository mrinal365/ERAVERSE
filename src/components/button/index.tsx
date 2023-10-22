export default function Button({title}:any){
    return(
        <div className="cursor-pointer flex justify-center items-center bg-[#222222] text-white py-1 px-3 sm:py-2 sm:px-5 rounded-md">
            <p className="text-sm sm:text-base mobile:text-[10px] ">{title?title:"Get in touch"}</p>
        </div>
    )
}