
interface Phone{
    id: number,
    brand: string,
    name: string,
    memory: string,
    cost: number,
    colors: string[],
    ext: string,
}

export const PhoneCard = (props:Phone)=>{

    return(
        <>
            <div className="w-[250px] h-[450px] bg-[#444444] rounded-md relative">
                <div className="w-[100%] h-[250px] bg-[#333333] absolute top-0 rounded-md z-0">
                </div>
                <img src={props.ext} alt="phone" className="w-[250px] mx-auto relative z-10 drop-shadow-2xl"/>
                <div className="flex justify-between mt-[10px]">
                    <p className="font-bold ml-[15px] text-[17px]">{props.name}</p>
                    <p className="mr-[15px] font-bold text-gray-300">£{props.cost}</p>
                </div>
                <p className="ml-[15px] mt-[10px] text-gray-400 font-semibold">Brand: <span className="text-gray-200 font-bold pl-[5px]"> {props.brand} </span></p>
                <p className="ml-[15px] mt-[10px] text-gray-400 font-semibold">Memory: <span className="text-gray-200 font-bold pl-[5px]"> {props.memory} </span></p>
                <p className="ml-[15px] mt-[10px] text-gray-400 font-semibold">Colors: <span className="text-gray-200 font-bold pl-[5px]"> {props.colors} </span></p>
                <div className="w-[200px] mx-auto mt-[20px]">
                    <button className="w-[100%] h-[30px] text-[#222222] bg-gray-200 font-semibold rounded-md">Add to Basket</button>
                </div>
            </div>
        </>
    )
}