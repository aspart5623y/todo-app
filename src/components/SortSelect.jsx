const SortSelect = ({ updateFilter }) => {
    return (  
        <select name="" onChange={e => updateFilter(e.target.value)} className='dark:bg-dark-light bg-white rounded-xl dark:text-white text-gray-800 duration-200 transition-all ease-in-out focus:ring-0 border-0 focus:outline-0 h-10 inline-block w-42 px-5' id="">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
    );
}
 
export default SortSelect;