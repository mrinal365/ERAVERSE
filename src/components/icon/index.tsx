import Image from 'next/image'


export default function Icon({src}:any) {
    return (
//       border-radius: 8px;
// border: 1px solid #4E4E4E;
      <div>
        <div className="cursor-pointer border-[2px] w-fit rounded-[8px] border-[#4E4E4E]  border-solid p-4 ">
        <div className='relative w-3 h-3'>
          <Image src={src?src:'/iconx.png'} fill={true} alt="x"/>
        </div>
      </div>
      </div>
    )
  }
  