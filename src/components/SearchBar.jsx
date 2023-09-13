import SearchIcon from '../assets/Search.svg'

function SearchBar() {
    return ( 
        <>
            <form className='text-white hidden md:flex relative'>
                <input className='bg-transparent rounded-md px-[10px] py-[6px] lg:w-[525px] border-white border-2' type="search" name="searchbar" id="searchbar" placeholder='What do you want to watch?'/>
                <img src={SearchIcon} className='absolute right-[2%] md:right-[5%] top-[30%]' alt="" />
            </form>
        </>
     );
}

export default SearchBar;