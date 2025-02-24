

import React from 'react';


import { Plus } from 'lucide-react';



import Searchbar from '../partials/Searchbar';
import { setIsAdd } from '../Store/storeAction';
import { StoreContext } from '../Store/storeContext';
import AnimalBiteTable from './AnimalBiteTable';
import ModalAddAnimalbite from './ModalAddAnimalbite';
import Footer from '../Footer';
import Header from '../Header';


const Animalbite = () => {
 
  const { dispatch, store} = React.useContext(StoreContext);
  const handleAdd = () => {dispatch(setIsAdd(true));
  }

  return (
    <>
    <section className='layout-main '>
        <div className=" layout-division ">
       {/* <SideNav menu="Animalbite"/> */}
            <main className=''>
               <Header title='Animalbite' subtitle=''/>
                <div className='p-8'> 
                    <div className='flex justify-between items-center'>
                      <Searchbar/>
                        <button className='btn btn-add' onClick={handleAdd}>
                           <Plus size={16}/> add New
                        </button>
                    </div>  
                      <AnimalBiteTable/>
                </div>

                <Footer/>
            </main>
        </div>
    </section>
  
    {store.validate && <ModalValidation/> }
    {store.error && <ModalError/>}
     {store.success && <ToastSuccess/>}
    {/* {store.isView && <SpinnerWindow/>} */}
    {store.isAdd && <ModalAddAnimalbite/>}
   
    </>
  )
}

export default Animalbite
