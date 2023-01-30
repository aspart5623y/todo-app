import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom' 
import AppLayout from '../layout/AppLayout';
import AddTask from '../pages/AddTask';
import EditTask, { taskLoader } from '../pages/EditTask';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';


const router = createBrowserRouter (
    createRoutesFromElements (
        <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route 
                    path='/task/add' 
                    element={<AddTask />} 
            />

            <Route 
                    path='/task/edit/:id' 
                    element={<EditTask />} 
                    loader={taskLoader} 
            />
            <Route path='*' element={<NotFound />} />
        </Route>
    )
)

export default router;