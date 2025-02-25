import { ArrowLeftIcon, Moon, Settings, Sun } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({title="", subtitle=""}) => {
 
 
  return (
    <>
     <header className='bg-secondary'>
                    <div className='flex justify-between items-center p-4'>
                        <div className='[&>*]:mb-0 '>
                            <h4>{title}</h4>
                            <p>{subtitle}</p>
                        </div>
                        <div className='flex items-center gap-6'>
                          
                           
                            <button className='size-[30px] rounded-full bg-dark grid place-content-center text-white'>
                            <ArrowLeftIcon/>
                            </button>
                        </div>
                    </div>
                </header>
    </>
  )
}

export default Header
