import Head from "next/head"
import Navbar from "../components/Navbar"
import Image from "next/image"
import unsoed from '../assets/unsoed.png'
import smansasi from '../assets/smansasi.png'
import sanber from '../assets/sanber.png'
export default function Education(){
    return (
        <div className="z-20 h-screen bg-gradient-to-br from-cyan-600 to-blue-800" >
        <Head>
          <title>Personal pages</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
         <Navbar/>
         <div className="md:w-3/6 mx-auto px-12 text-white space-y-16 py-24 jet">
            <div className="flex items-center  space-x-12">
              <Image src={unsoed} width={150} height={150} alt="unsoed logo" />
              <div className="space-y-4" >
                <div className="text-3xl font-semibold ">Universitas Jenderal Soedirman</div>
                <div className="text-xl ">Undergraduate Informatics, 2021</div>
              </div>
            </div>
            
            <div className="flex items-center  space-x-12">
              <Image src={smansasi} width={150} height={150} alt="smansasi logo" />
              <div className="space-y-4" >
                <div className="text-3xl font-semibold ">SMAN 1 Sidareja</div>
                <div className="text-xl ">Math and Science, 2017</div>
              </div>
            </div>
         </div>
      </div>
    )
}