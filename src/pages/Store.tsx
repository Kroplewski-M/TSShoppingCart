import phones from '../data/phones.json';
import { PhoneCard } from '../components/PhoneCard';


export const Store = ()=>{
    return(
        <div className='text-gray-200'>
            <p className='font-bold text-center text-[30px] mt-10'>Browse</p>
            <div className='w-[70vw] mx-auto flex flex-wrap mt-16 justify-center'>
                {
                    phones.map(item =>(
                        <div key={item.id} className='mr-5 mb-10'>
                            <PhoneCard {...item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}