import Link from "next/link"
import { useRouter } from "next/router"

export default function Navbar(options) {
    const router = useRouter()
    console.log(router.pathname);
    return (
        <div className="container flex justify-between text-white md:w-5/6 mx-auto py-8 ">
          <div className="font-black text-2xl poppins">mlnhq_</div>
          <div className="md:flex hidden  space-x-12 jet text-lg">
          <p className={`hover:border-b-4 ${router.pathname == '/' ? 'border-b-4 font-bold' : ''} hover:transition-all duration-200 ease-in-out flex h-8`} ><Link  href='/' >Home</Link></p>

              {
                  ['Education','Course','Activity'].map(el => {
                      return <p key={el}  className={`hover:border-b-4 ${router.pathname == '/'+el ? `border-b-4 font-bold` : ''} hover:transition-all duration-200 ease-in-out flex h-8`} ><Link href={el} >{el}</Link></p>
                  })
              }
            </div>
            <button onClick={()=> window.location.href ='https://api.whatsapp.com/send/?phone=628976809782&text=Hallo+Maulana+kenalan+dong&app_absent=0'}  className="bg-white rounded-lg hover:scale-125 hover:transition-all duration-200 ease-in-out px-5 poppins text-blue-900">Lets Talk</button>
         </div>
    )
}