import React, { useEffect, useState } from 'react'
import { pokemonListServices,pokemonDetailServices } from '../../services'
import SearchForm from '@/components/SearchForm'
import { usePokemonListStore } from '@/store/pokemonList';
import PokemonCard from '@/components/PokemonCard';
import ReactLoading from "react-loading";
import NavBar from '../main/NavBar';
import "./home.css";


export const HomePage = () => {
  const { pokemon, fetchPokemon } = usePokemonListStore()
  const [blacktotop,Setblacktotop] = useState(false)
  
  useEffect(() => {
    window.addEventListener("scroll", () =>{
      if (window.scrollY > 150) {
        Setblacktotop(true)
      } else {
        Setblacktotop(false)
      }
    })
  },[])

  const topScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
    return (
    <div>
      <div className='w-[90%] m-[auto] max-w-[1100px]'>
          <SearchForm/>
          {blacktotop &&(
            <button id='btn-top' className='w-[60px] h-[60px] fixed bg-white right-[2rem] rounded-md tran bottom-[1rem] hover:scale-95 transition duration-200 ease-in-out' onClick={topScroll}><p><i className="arrow up"></i></p></button>
          )}
          <div className='flex justify-center items-center'>
            {fetchPokemon.loading &&(
              <div className='pokemon flex justify-center items-center top-[75vh] sm:top-[63vh] lg:top-[55vh]'></div>)}
            {!fetchPokemon.loading && <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-[20px] mt-[40px] justify-center'>
              {pokemon.data?.map((item)=> {
                return <PokemonCard 
                image ={item.image || ''} 
                name = {item.name}
                id = {item.id}
                types = {item.types}/>
            })}
            </div>}
        </div>
      </div>
    </div>
  )
}
