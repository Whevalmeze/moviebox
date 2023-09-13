import { useState } from "react"
import HeartIcon from "../assets/heart-icon.svg"
import Poster from "../assets/posters/p-1.svg"
import ImdbLogo from "../assets/imdb-logo.svg"
import RtLogo from "../assets/tomato.svg"

function Card() {
    const spanText = "text-xs md:text-sm text-gray-400";
    const flexclass = "flex text-xs";
    const tags = "px-3 bg-tags rounded-xl z-20"
    const favorite = "px-2.5 py-2.5 bg-tags hover:bg-white rounded-full absolute top-[2%] right-[5%] z-20";
    const [currentCard, setCurrentCard] = useState(false);
    function handleCurrentCard (){
        setCurrentCard(!currentCard)
    }
    const movie = {
        title : "Stranger Things",
        imgURL : "",
        country: "USA",
        year: 2016,
        tomatoRating: 97,
        imdbRating: 87
    }
    return (    
        <div onClick={handleCurrentCard} className='cursor-pointer max-w-full w-full relative'>
            <div className='w-full flex flex-col gap-y-2.5 font-semibold'>
                <div className='absolute top-[2%] left-[5%] flex items-center justify-between min-w-[90%]'>
                    { currentCard && <div className={tags}><span className="uppercase text-xs md:text-base">TV Series</span></div>}
                    <div className={favorite}><img src={HeartIcon} alt="" /></div>
                </div>
                <div className="w-full max-h-[426px] overflow-hidden">
                    <img className="w-full hover:scale-105 transition-all" src={Poster} alt=""/>
                </div>
                <span className={spanText}>{movie.country + ", " + movie.year}</span>
                <h3 className='font-bold text-xl md:text-2xl xl:text-3xl'>{movie.title}</h3>
                <div className={flexclass + " gap-x-2.5 md:gap-x-5 justify-between"}>
                    <div className={flexclass + " gap-x-1 md:gap-x-2.5"}>
                        <img src={ImdbLogo} alt="imdb logo" />
                        <p className="text-xs md:text-sm">{movie.imdbRating + " %"} / 100</p>
                    </div>
                    <div className={flexclass + " gap-x-1 md:gap-x-2.5"}>
                        <img src={RtLogo} alt="rotten tomato logo" />
                        <p className="text-xs md:text-sm">{movie.tomatoRating + " %"}</p>
                    </div>
                </div>
                <p className={spanText}>
                    {"Action" + ", " + "Adventurous" + ", " + "Horror"}
                </p>
            </div>
        </div>
     );
}

export default Card;