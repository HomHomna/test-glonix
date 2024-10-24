"use client"
import React, { useState, useRef, useEffect } from 'react'
import { ArrowDown } from './icons'
import Image from 'next/image'
interface Props {

}

const Dropdown: React.FC<Props> = (props) => {
  const { } = props
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          className="flex justify-center items-center gap-[5px] w-full rounded-[18px] border border-gray-300 shadow-sm px-[24px] py-[16px] bg-[#1C1C29] text-[16px] text-white focus:outline-none focus:ring-0 focus:ring-offset-gray-100 focus:ring-indigo-500 transition-colors duration-200"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <Image alt={`profile Siriwat Rachanon`} width={30} height={30} className='rounded-[50%]' src={`/images/user1.png`} />
          {`Siriwat Rachanon`}
          <ArrowDown />
        </button>
      </div>

      {/* Dropdown menu */}
      <div
        className={`absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
          }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
            Mock menu 1
          </a>
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
            Mock menu 1
          </a>
        </div>
      </div>
    </div>
  )
}

export default React.memo<Props>(Dropdown)
