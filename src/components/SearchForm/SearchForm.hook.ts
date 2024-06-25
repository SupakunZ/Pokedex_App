import React, { useEffect } from 'react'
import { pokemonListServices,pokemonDetailServices } from '../../services'
import { useForm } from "react-hook-form";
import { usePokemonListStore } from '@/store/pokemonList';
import { generationList } from '@/utils/optionList';
import { conResponse } from '@/utils/conditionList';
import { IPokemonDetailResponse } from '@/interface/pokemonDetail';



const useSearchForm = () => {
    const { 
        register, 
        handleSubmit, 
        watch  ,
        formState: { errors } 
    } = useForm();
    const {setFetchPokemonList,fetchPokemon,setPokemonList} = usePokemonListStore()
    
    const keyword = watch('keyword');
    const type = watch('type');
    const generation = watch('generation');
    const sort = watch('sort');
    
    const callData = async (filter :{
        name: string
        limit: number
        offset: number
    }) => {
        setFetchPokemonList({data: [], loading: true, error: null})
        const reponseList = await pokemonListServices.getPokemonList(filter.limit, filter.offset)
        const pokeList = []
        

        if (reponseList.status === 200) {
            const reponseResults = reponseList.data?.results || []
            for (const pokemon of reponseResults) {
                const reponse = await pokemonDetailServices.getPokemonDetail(pokemon.name)
                const pokeData = reponse.data
                if (pokeData) 
                    pokeList.push({
                        ...pokeData,
                        image:
                            pokeData.sprites.other['official-artwork'].front_default || 
                            pokeData.sprites.other.dream_world.front_default 
                        })
                    //  console.log(pokeList[1])
            }
            setFetchPokemonList({data: pokeList, loading: false, error: null})
            setPokemonList({data: pokeList, loading: false, error: null})
        }else{
            setFetchPokemonList({data: [], loading: false, error: reponseList.error})
        }
    }

    const filterPokemon = (
        keyword: string,
        type: string,
        sort: 'id' | 'name'
    ) => {
        const keywordFilter = fetchPokemon.data.filter((item) =>
            item.name.toLowerCase().includes(keyword?.toLowerCase())
    )
        const typeFilter =
            type !== 'all types'
                ? keywordFilter.filter((item) =>
                    item.types.find((f) =>
                        f.type.name.toLowerCase().includes(type.toLowerCase())
                    )
                )
                : keywordFilter

        return sortBy(typeFilter,sort)
    }
    

    const sortBy = (data: IPokemonDetailResponse[], type: 'id' | 'name' ) => {
        switch (type) {
            case 'id':
                return data.sort((a,b) => a.id - b.id)
            case 'name':
                return data.sort((a,b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
            default:
                return data.sort((a,b) => a.id - b.id )
        }
    }
    
    
    useEffect (()=>{
        // console.log('generation',generation)
        if (generation !== undefined) {
            conResponse({generation,callData});
        }
    },[generation])

    useEffect(()=>{
        const data = filterPokemon(keyword,type,sort)
        setPokemonList({data: data, loading: false, error: null}) 
    },[keyword, type, sort])

    return {
        fieldKeyword : register('keyword'),
        fieldGeneration : register('generation'),
        fieldType : register('type'),
        fieldSort : register('sort'),
    }
}

export {useSearchForm}