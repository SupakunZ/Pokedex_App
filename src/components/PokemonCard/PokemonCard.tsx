import React from 'react'
import {IPokemonDetailResponse, Type} from "@/interface/pokemonDetail";
import { Link } from 'react-router-dom';

interface PokemonCardProps{
    image: string 
    name: string
    id: number
    types: Type[]
}

const PokemonCard = ({image, name, id, types}:PokemonCardProps) => {

    return (
        <div>
            <div className="card max-w-sm rounded-[20px] overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 p-[16px] bg-[#253641] max-w-[275px] w-full m-[auto]">
                <div className="bg-[url('/images/poke-card-bg.png')] bg-center aspect-square w-full bg-cover rounded-[20px]">
                    <Link to={`/pokedex/detail/${name}`} className="bg-[url('/images/poke-card-bg.png')]">
                        <img className="rounded-t-lg sm:h-[218px] p-[40px] w-full " src={image} alt="" />
                    </Link>
                </div>
                <div className="pt-5">
                    <div className='flex justify-between'>
                        <h5 className="capitalize mb-2 text-[22px] font-bold tracking-tight text-white">{name}</h5>
                        <h5 className="mb-2 text-[22px] font-bold tracking-tight text-gray-900 text-white">#{id}</h5>
                    </div>
                    <div className='flex gap-2 justify-end mt-[16px] text-[.75rem]'>
                        {types.map((item) => {
                            return <span className={`badge-type-${item.type.name} px-[14px] text-white py-[2px] rounded-[4px] textcard`}>{item.type.name.toLocaleUpperCase()}</span>
                        })}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default PokemonCard