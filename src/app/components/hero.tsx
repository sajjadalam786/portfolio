import Image from "next/image"

export default function Hero(){
    return(
        <>
            <div className="flex justify-center items-center">
                <div className="w-1/2">
                 <Image src="/office.jpeg"
                  width={500}
                  height={500}
                  objectFit="contain"
                  alt="" />
                </div>
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold">
                        I am a <span className="text-[#00df9a]">Frontend Developer</span>
                    </h1>
                    <p className="py-6">
                        I am a Full Stack developer with 5+ years of experience. I build responsive websites using React.js.
                    </p>
                    <button className="bg-[#00df9a] px-5 py-3 rounded-md">
                        Contact Me
                    </button>
                </div>
                
            </div>
        </>
    )
}