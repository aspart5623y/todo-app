import { Link } from "react-router-dom";
import { todoActions } from "../store/todo-slice";
import { useDispatch } from "react-redux"


const Task = ({task}) => {
    const dispatch = useDispatch()
    const checkTaskDone = (taskId) => {
        dispatch(todoActions.completeTask(taskId))
    }

    const deleteTask = (taskId) => {
        dispatch(todoActions.deleteTask(taskId))
    }  




    return (
        <div className="dark:bg-dark-light bg-white p-5 rounded-xl dark:hover:bg-white/[.2] hover:scale-105 transition-all duration-200 ease-in-out">

            <div className="mb-5 flex justify-between items-center">
                <div>
                    { task.important && <span className="text-[10px] dark:text-white text-gray-800 px-3 py-1.5 dark:border-white border-gray-800 border-[0.1px] rounded-xl bg-gray-800/[.1] dark:bg-white/[.3]">
                        <i className="fas fa-exclamation-circle"></i>
                        &nbsp;
                        Important
                    </span> }
                </div>
                <div className="text-right flex flex-row items-center">
                    <Link to={`/task/edit/${task.id}`} className="h-7 inline-flex justify-center items-center mx-1 w-7 text-white bg-golden rounded-sm hover:scale-110 duration-100 transition-all ease-in-out">
                        <i className="fas fa-pen"></i>
                    </Link>
                    <button type="button" onClick={() => deleteTask(task.id)} className="h-7 mx-1 w-7 text-white bg-golden rounded-sm hover:scale-110 duration-100 transition-all ease-in-out">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
            <div className="flex items-start mb-4"> 
                <div 
                    className={`flex justify-center items-center shrink-0 h-7 w-7 rounded-lg ${task.completed ? 'bg-golden' : 'bg-white border-[1px] border-gray-200'} text-white`}
                    id={task.id} 
                    onClick={() => checkTaskDone(task.id)} 
                >
                    <i className="fas fa-check"></i>
                </div>
                <div className="ml-3">
                    <small className="text-[10px] text-gray-400">{ task.date } &nbsp; { task.time }</small>
                    <h5 className={`text-[18px] font-[500] text-gray-800 dark:text-white ${ task.completed && "line-through" }`}>{ task.title }</h5>
                </div>
            </div>
        </div>
      );
}
 
export default Task;