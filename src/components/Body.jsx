import ChevronRight from "../assets/Chevron-right.svg"
import Card from "./Card.jsx"

function Body() {
    const wrapperClass = "mx-auto min-w-full flex flex-col px-4 py-4 w-full"
    return ( 
        <div className={wrapperClass}>
            <div className="container mx-auto">
                <div className='flex mx-auto max-w-full min-w-full justify-between px-4 py-4'>
                    <h2 className='text-2xl md:text-4xl font-bold'>Featured Movie</h2>
                    <div className='flex pl-2.5 py-2.5'>
                        <button className='text-rose-700'>See more</button>
                        <img src={ChevronRight} alt="" />
                    </div>
                </div>
                <div className='mx-auto gap-x-8 gap-y-12 justify-items-stretch px-4 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto'>
                    <Card  />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
     );
}

export default Body;