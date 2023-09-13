import Nav from './Nav.jsx'
import ImdbLogo from "../assets/imdb-logo.svg"
import RtLogo from "../assets/tomato.svg"
import PlayIcon from "../assets/play-sm.svg"

export default function Hero() {
    const wrapperClass =  "flex flex-col max-w-full h-[90vh] min-h-[90vh] bg-[url('./src/assets/Poster.svg')] text-white container mx-auto px-4 pb-4 bg-cover bg-no-repeat bg-blend-multiply";
    const flexclass = "flex text-xs"

    return(
        <div className={wrapperClass}>
            <Nav/>
        <div className='h-full flex flex-col justify-center px-4 py-4 container mx-auto'>
            <div className='max-w-md flex flex-col gap-y-4'>
                <h1 className=' text-4xl md:text-5xl font-bold'>John Wick 3 : Parabellum</h1>
                <div className={flexclass + " gap-x-5"}>
                    <div className={flexclass + " gap-x-2.5"}>
                        <img src={ImdbLogo} alt="imdb logo" />
                        <p>86.0 / 100</p>
                    </div>
                    <div className={flexclass + " gap-x-2.5"}>
                        <img src={RtLogo} alt="rotten tomato logo" />
                        <p>97%</p>
                    </div>
                </div>
                    <p className='text-sm font-medium'>
                        John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                    </p>
                    <div>
                        <div className='flex w-fit gap-x-2 bg-rose-700 rounded-md py-1.5 px-4 transition-all hover:bg-black hover:text-white hover:invert active:invert active:bg-black active:text-white'>
                            <img src={PlayIcon} alt=" bg-gradient-to-b from-transparent to-gray-400" />
                            <button>WATCH TRAILER</button>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )
};