import Image from 'next/image'
import ts_icon from '../assets/typescript.svg'
import js_icon from '../assets/javascript.svg'
import html from '../assets/html-5.svg'
import css from '../assets/css3.svg'
import nodejs from '../assets/nodejs.svg'
import react_icon from '../assets/react.svg' 
import mysql from '../assets/mysql.svg'
import python from '../assets/python.svg'
import golang from '../assets/golang.svg'
import git from '../assets/git.svg'
import mongodb from '../assets/mongodb.png'
export default function Heading(options) {
    return (
        <div className="constainer text-white mt-24 jet" >
            <div className="flex flex-col space-y-12 justify-center ">
                <div className="text-4xl font-medium w-2/3 mx-auto text-center" > Hi folks, I{'`'}m <span className="font-bold" > Maulana Imamul Khaq.</span> </div><br />
                <div className="text-lg w-2/3 mx-auto text-center">I am a software engineer enthusiast with spesialize to frontend development, interested in competitive programming, UI/UX design, backend development and familiar with computer science fundamentals such as DSA</div>
                <div className="text-lg pt-16 mx-auto font-bold ">Tech stack skills</div>
                <div className="flex mx-auto space-x-12">
                    <div className="icon flex flex-row space-x-8">
                        
                {
                    [ts_icon,js_icon,nodejs,react_icon,html,css,python,golang,git,mysql,mongodb].map(el => {
                        return <div key={el} className='hover:scale-150 animate-pulse icon hover:transition-all transition ease-in-out' ><Image src={el} width={80} height={80} alt='image' /></div>
                    })
                }
        
                </div>
            </div>
            </div>
        </div>
    )
}