import React from 'react'
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../store/ui-slice';
import { Outlet } from "react-router-dom"


const AppLayout = () => {

    const darkMode = useSelector(state => state.ui.darkMode);
    const dispatch = useDispatch()
    
    const toggleDarkMode = () => {
        dispatch(uiActions.toggleDarkMode())
    }


    return (
        <div>
            <div className={darkMode ? 'dark' : ''}>
                <div className='relative dark:bg-dark bg-gray-200 h-screen w-screen duration-200 transition-all ease-in-out overflow-auto'>
                    <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                    <div className="container mx-auto pb-10 px-3.5">
                        <Outlet />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AppLayout