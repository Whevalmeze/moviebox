import Logo from '../assets/Logo.svg'
import Menu from '../assets/Menu.svg'
import SearchBar from './SearchBar'

export default function Nav() {
    const wrapperClass = 'container mx-auto px-4 py-4 items-center justify-between flex';
    const buttonClass = 'text-white px-2.5 transition-all hover:bg-white hover:text-black hover:px-2.5 hover:rounded-md';
    return (
        <div className={wrapperClass}>
            <a  className='cursor-pointer' href=""><img src={Logo} /></a>
            <SearchBar/>
            <div className='flex pl-4 gap-x-4'>
                <button className={buttonClass}>Sign in</button>
                <div className='flex cursor-pointer px-2 py-2 bg-rose-700 mw-9 h-9 rounded-full hover:invert hover:bg-black'>
                    <img src={Menu} alt="" />
                </div>
            </div>
        </div>
    );
}