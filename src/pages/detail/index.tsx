import PokemonCard from '@/components/PokemonCard'
import { IPokemonDetailResponse } from '@/interface/pokemonDetail'
import { pokemonDetailServices, pokemonListServices } from '@/services'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

type pokemonType = {
  data: IPokemonDetailResponse | undefined
  loading: Boolean,
  error: null | any
}

export const DetailPage = () => {
  const { name } = useParams()

  const [pokemon, setPokemon] = useState<pokemonType>({
    data: undefined,
    loading: true,
    error: null
  })

  const callData = async (name: string) => {
    const response = await pokemonDetailServices.getPokemonDetail(name)
    if (response.status === 200) {
      // console.log('response', response)  // Data
      if (response.data)
        setPokemon({
          data: {
            ...response.data,
            image:
              response.data.sprites.other['official-artwork'].front_default ||
              response.data.sprites.other.dream_world.front_default
          },
          loading: false,
          error: null
        })
    } else {
      setPokemon({ data: undefined, loading: false, error: response.error })
    }
  }

  useEffect(() => {
    if (name) callData(name)
  }, [name])

  return (
    <div className='card-detail w-[90%] m-[auto] max-w-[100rem] h-[100vh]'>
      <div className='flex justify-center'>
        <img
          src='/images/logo-V2.png'
          className='max-h-[80px] mt-[20px]'
          alt=''
        />
      </div>
      <Link className='mx-4 px-[16px] py-[4px] button' to={"/pokedex"}><span>Back</span></Link>
      <div className='w-[100%] 2xl:mt-[40px] '>
        {pokemon.data && (
          <div className="lg:flex gap-[1rem] rounded-[20px] overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 p-[16px] m-[auto]] items-center">
            <div className={`bg-center aspect-square w-full bg-cover rounded-[20px] relative h-[400px] 2xl:h-[500px] badge-type-${pokemon.data.types[0].type.name}`}>
              {/* <img className="max-h-[400px] absolute h-[auto] aspect-square translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] " src='/images/pokemon_bg.png' alt="" /> */}
              <img className="rounded-t-lg h-[60%] h-[405px] sm:h-[420px] p-[40px]  absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]" src={pokemon.data.image} alt="" />
            </div>
            <div className="pt-5 bg-[#253641] rounded-[20px] p-[16px] my-[20px] sm:h-[400px] w-[100%] 2xl:h-[500px]">
              <div className='flex justify-between'>
                <h5 className="text-white capitalize mb-2 text-xl tracking-tight font-bold text-[32px] ">{pokemon.data.name}</h5>
                <h5 className="mb-2 text-xl tracking-tight text-[32px] font-bold text-white">#{pokemon.data.id}</h5>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] gap-y-[30px]'>
                <div >
                  <div className='flex gap-x-[10px] text-white'>
                    <div>Height :</div>
                    <div>{(pokemon.data.height / 10).toFixed(2)} m.</div>
                  </div>
                  <div className='flex gap-x-[10px] text-white'>
                    <div>Weight :</div>
                    <div>{(pokemon.data.weight / 10).toFixed(2)} kg.</div>
                  </div>
                </div>
                <div className='flex gap-2 justify-end mt-[23px] text-[1rem] text-[.95rem]'>
                  {pokemon.data.types.map((item) => {
                    return <span className={`badge-type-${item.type.name} px-[14px] text-white py-[0px] rounded-[4px] textcard`}>{item.type.name.toLocaleUpperCase()}</span>
                  })}
                </div>
                <div>
                  <h5 className='text-white text-[23px] font-bold'>Abilities</h5>
                  <div className='grid grid-cols-1 sm:grid-cols-1 gap-[10px] mt-[16px]'>
                    {pokemon.data.abilities.map((item) => {
                      return <div className={`bg-[#4CAFEB] px-[14px] capitalize py-1 rounded-[8px]`}>{item.ability.name}</div>
                    })}
                  </div>
                </div>
                <div>
                  <h5 className='text-white text-[23px] font-bold'>State</h5>
                  <div className='grid grid-cols-1 gap-[10px] mt-[16px]'>
                    {pokemon.data.stats.map((item) => {
                      return <div className='flex gap-x-[10px] text-white justify-between'>
                        <div className=' capitalize'>{item.stat.name}</div>
                        <div className='text-white'>{item.base_stat}</div>
                      </div>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
