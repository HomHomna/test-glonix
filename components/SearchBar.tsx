"use client";
import React, { useState } from 'react';
import { SearchIcon } from './icons';

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = (props) => {
  const { onSearch } = props;
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className='w-[80%]'>
      <div className="relative flex ">
        <div className="absolute left-[24px] top-1/2 transform -translate-y-1/2">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="flex-grow h-[60px] pl-[56px] pr-4 py-2 border border-gray-300 rounded-tl-[12px] rounded-bl-[12px] "
          placeholder="ค้นหาหลักสูตร"
          value={query}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-[#A8AD00] hover:bg-[#a8ad0080] text-white font-bold py-2 px-4 rounded-tr-[12px] rounded-br-[12px] flex-grow"
        >
          ค้นหา
        </button>
      </div>
    </form>
  );
};

export default React.memo<Props>(SearchBar);
