import Task from "./Task";
import SortSelect from './SortSelect';
import { useDispatch, useSelector } from 'react-redux'
import { todoActions } from "../store/todo-slice";


const Tasks = () => {
    const dispatch = useDispatch();
    const filterStatus = useSelector(state => state.todo.filterStatus);
    const allTasks = useSelector(state => state.todo.tasks);


    const updateFilter = (payload) => {
        dispatch(todoActions.updateFilterStatus(payload))
    }

    const filteredTodoList = allTasks.filter((item) => {
        if (filterStatus === 'all') {
            return true;
        } else if (filterStatus === 'completed') {
            return item.completed === true
        } else if (filterStatus === 'uncompleted') {
            return item.completed === false
        }

        return true
    });


    return ( 
        <div>
            <div className='flex my-9 justify-between items-center'>
                <h1 className='dark:text-white text-gray-800 duration-200 transition-all ease-in-out text-[21px] font-[500]'>
                    <i className="fas fa-clipboard"></i>
                    &nbsp;
                    All Tasks
                </h1>
        
                <div>
                    {/* Sort Select */}
                    <SortSelect updateFilter={updateFilter} />
                </div>
        
            </div>

            <div className='grid grid-cols-4 justify-between max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 lg:gap-7'>
                {filteredTodoList.length < 1 && <div className="col-span-12 py-20 dark:text-white text-gray-800 duration-200 transition-all ease-in-out text-[16px] text-center">You do not have any task here.</div>}
                {filteredTodoList.length > 0 && filteredTodoList.map((item, index) => (
                    <Task task={item} key={index} />
                ))}
            </div>
        </div>
     );
}
 
export default Tasks;