
const TaskForm = ({ submitForm, title, setTitle, date, setDate, time, setTime, important, setImportant }) => {
    

    return (  
        <div>
            <form onSubmit={submitForm}>

                {/* Title */}
                <div className="mb-8">
                    <label className="block text-[14px] text-gray-500 dark:text-white">Title</label>
                    <input type="text" defaultValue={title} autoFocus onChange={e => setTitle(e.target.value)} className="block w-full border-0 text-[11px] py-1 focus:ring-0 focus:border-gray-500 dark:focus:border-white bg-transparent text-gray-400 dark:text-white border-b-[1px] border-gray-500 dark:border-white" required/>
                </div>


                <div className="sm:mb-8 grid sm:grid-cols-2 sm:gap-6">
                    {/* date */}
                    <div className="max-sm:mb-8">
                        <label className="block text-[14px] text-gray-500 dark:text-white">Date</label>
                        <input type="date" defaultValue={date} onChange={e => setDate(e.target.value)} className="block w-full border-0 text-[11px] py-1 focus:ring-0 focus:border-gray-500 dark:focus:border-white bg-transparent text-gray-400 dark:text-white border-b-[1px] border-gray-500 dark:border-white" required/>
                    </div>
                    
                    {/* time */}
                    <div className="max-sm:mb-8">
                        <label className="block text-[14px] text-gray-500 dark:text-white">Time</label>
                        <input type="time" defaultValue={time} onChange={e => setTime(e.target.value)} className="block w-full border-0 text-[11px] py-1 focus:ring-0 focus:border-gray-500 dark:focus:border-white bg-transparent text-gray-400 dark:text-white border-b-[1px] border-gray-500 dark:border-white" required/>
                    </div>
                </div>

                {/* Important checkbox */}
                <div className="mb-8">
                    <label className="block text-[14px] text-gray-500 dark:text-white">
                        <input type="checkbox" defaultChecked={important} onChange={() => setImportant(!important)} className="h-5 w-5 rounded-sm mr-3 dark:checked:bg-golden checked:bg-golden border-gray-300 focus:ring-0 focus:outline-0" />
                        Important
                    </label>
                </div>

                <div className="text-right">
                    <button type="submit" className="h-9 w-32 text-sm text-white rounded-lg bg-golden hover:scale-105 duration-200 transition-all ease-in-out">Submit</button>
                </div>

            </form>
        </div>
    );
}
 
export default TaskForm;