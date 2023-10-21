export default function Button({title}:any){
    return(
        <div className="cursor-pointer bg-[#222222] text-white p-3 px-6 rounded-md">
            {title?title:"Get in touch"}
        </div>
    )
}