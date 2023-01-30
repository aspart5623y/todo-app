import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import TaskForm from '../components/TaskForm'
import { todoActions } from '../store/todo-slice';


function AddTask() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
        
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [important, setImportant] = useState(false);

    const submitForm = e => {
        e.preventDefault();
        const data = {
            id: Date.now(),
            title, date, time, important,
            completed: false
        };

        dispatch(todoActions.addTask(data))
        navigate("/")
    }   
    

    return (
        <div>
            <div className="bg-white my-24 dark:bg-dark-light w-1/2 max-md:w-full max-lg:w-3/4 mx-auto p-5 rounded-xl duration-200 transition-all ease-in-out">
                <div className="flex flex-wrap justify-between items-center mb-8">
                    <h4 className="capitalize text-[24px] text-dark dark:text-white font-[500] duration-200 transition-all ease-in-out">Add Task</h4>

                    <button type="button" className="h-9 w-20 text-sm text-dark dark:text-white hover:scale-110 duration-200 transition-all ease-in-out" onClick={() => navigate(-1)}>Cancel</button>
                </div>

                <TaskForm submitForm={submitForm} title={title} setTitle={setTitle} date={date} setDate={setDate} time={time} setTime={setTime} important={important} setImportant={setImportant}  />
            </div>
        </div>
    )
}

export default AddTask