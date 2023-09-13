import Facebook from "../assets/facebook.svg"
import Instagram from "../assets/instagram.svg"
import X from "../assets/twitter.svg"
import Youtube from "../assets/youtube.svg"


function Footer() {
    return ( 
        <div className="py-16">
            <div className="flex flex-col gap-4 items-center m-full">
                <div className="flex gap-6">
                    <img className="cursor-pointer" src={Facebook} alt="" />
                    <img className="cursor-pointer" src={Instagram} alt="" />
                    <img className="cursor-pointer" src={X} alt="" />
                    <img className="cursor-pointer" src={Youtube} alt="" />
                </div>
                <div className="flex gap-6">
                    <a href="http://" className="font-bold">Conditions of Use</a>
                    <a href="http://" className="font-bold">Privacy &amp; Policy</a>
                    <a href="http://" className="font-bold">Press Room</a>
                </div>
                <div>
                    <p className="font-bold text-gray-600">&copy; 2021 MovieBox by Adriana Eka Prayudha </p>
                </div>
            </div>
        </div>
     );
}

export default Footer;