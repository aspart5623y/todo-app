import { Link } from "react-router-dom";

const Navbar = ({toggleDarkMode}) => {
    
   

    return ( 
        <nav className="block w-screen py-3.5">
            <div className="container h-full w-full flex justify-between items-center mx-auto px-3.5">
                <div>
                    <Link to="/" className="text-[30px] block text-golden font-[500] mb-2">To Do</Link>
                    <span className="dark:text-white text-gray-600 font-[300] duration-200 transition-all ease-in-out text-base">Welcome to my React To Do app</span>
                </div>

                <div>
                    <button type="button" onClick={toggleDarkMode} className="dark:bg-dark-light dark:text-white bg-white text-gray-800 h-10 w-10 hover:scale-125 duration-100 transition-all ease-in-out rounded-sm">
                        <i className="fas fa-lightbulb"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;