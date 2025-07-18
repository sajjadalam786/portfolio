import Image from "next/image"

export default function Hero(){
    return(
        <>
            <div className="flex justify-center items-center">
                <div className="w-1/2">
                 <Image
                 className="rounded-xl shadow-md "
                  src="/office.jpeg"
                  width={500}
                  height={500}
                  objectFit="contain"
                  alt="Sajjad Alam - Full Stack Developer" />
                </div>
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold">
                        I am a <span className="text-[#00df9a]">Full Stack Developer</span>
                    </h1>
                    <p className="py-6">
                        I am a Full Stack developer with 5+ years of experience. I build responsive websites using React.js.
                    </p>
                    <p className="">
                        I am a passionate Full Stack Developer with over 5 years of comprehensive experience in building robust, scalable web applications. I specialize in creating seamless user experiences through modern frontend technologies while architecting powerful backend solutions. My expertise spans the entire development lifecycle, from concept to deployment, ensuring every project delivers exceptional performance and user satisfaction.

I am committed to writing clean, maintainable code and staying current with emerging technologies. My approach combines technical excellence with creative problem-solving, enabling me to transform complex business requirements into elegant, efficient solutions. I thrive on challenges and am dedicated to delivering high-quality results that exceed expectations. 
                    </p>

                    <p className="py-6 pb-3">
                        
                        <b className="text-xl">Frontend</b> <br />React.js • Next.js • TypeScript • Tailwind CSS • JavaScript ES6+ • Vue.js • Responsive Design <br />
                        <b className="text-xl">Backend</b> <br />Node.js • Express.js • Python • Django • RESTful APIs • GraphQL • MongoDB • PostgreSQL <br />
                        <b className="text-xl">Tools & DevOps</b> <br /> Git • Docker • AWS • CI/CD • Agile • Jest • Webpack • npm/yarn <br />
                        <b className="text-xl">Specializations</b> <br />Full-Stack Architecture • API Development • Database Design • Performance Optimization • Mobile-First Development
                        
                    </p>
                    <br />
                   
                </div>
                
            </div>
        </>
    )
}