import Link from "next/link"

export default function Header() {

//dynamic code here like functions and variable useState's etc etc

  return (

     <nav className="px-10 p-5 mt-2 " >
        <ul className="flex justify-center gap-10 capitalize">
            
            <li><Link href="/">Think Again..
            </Link></li>
            <li><Link href="/myproject">My Project</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
        </ul>
     </nav>
     
  )
}


