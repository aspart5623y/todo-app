import React from 'react'
import Tasks from '../components/Tasks';
import { Link } from "react-router-dom"

const Home = () => {
  
    return (
        <div>
            <Tasks />

            <Link to="/task/add" className="fixed right-5 bottom-10 shadow-xl h-12 w-12 flex justify-center items-center rounded-xl text-white bg-golden hover:scale-110 duration-200 transition-all ease-in-out">
                <i className="fas fa-plus"></i>
            </Link>
        </div>
    )
}

export default Home