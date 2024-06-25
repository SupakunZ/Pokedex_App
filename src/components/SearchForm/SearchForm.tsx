import React from 'react'
import { generationList, typesList, sortList } from "@/utils/optionList";
import {useSearchForm} from "@/components/SearchForm/SearchForm.hook";
import "./Search.css";

const SearchForm = () => {
    const {fieldKeyword,fieldGeneration,fieldSort,fieldType} = useSearchForm()
  return  (
    <form className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] search mt-5'>
        <div>
            <label htmlFor="generation" className="block mb-2 text-mb font-medium text-gray-900 text-white">Generation</label>
            <select {...fieldGeneration} id="generation" className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5">
                {generationList.map((item, index) => {
                    return <option key={`generation-key-${index}`} className='capitalize' value={item.name}>{item.name}</option>
                })}
            </select>
        </div>
        <div>

            <label htmlFor="type" className="block mb-2 text-mb font-medium text-gray-900 text-white">Type</label>
            <select {...fieldType} id="type" className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5">
                {typesList.map((item, index) => {
                    return <option key={`type-key-${index}`} className='capitalize' value={item}>{item}</option>
                })}
            </select>

        </div>
        <div>
            <label htmlFor="sort" className="block mb-2 text-mb font-medium text-gray-900 text-white">Sort By</label>
            <select {...fieldSort} id="sort" className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5">
                {sortList.map((item, index) => {
                    return <option key={`sort-key-${index}`} className='capitalize' value={item}>{item}</option>
                })}
            </select>
        </div>
        <div>
            <label htmlFor="generation" className="block mb-2 text-mb font-medium text-gray-900 text-white">Search</label>
            <input {...fieldKeyword} id="generation" className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5">
            </input>
        </div>
    </form>
)
}

export default SearchForm