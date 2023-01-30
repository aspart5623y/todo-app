import { Link } from 'react-router-dom'
import NotFoundImage from '../assets/images/404.svg'

const NotFound = () => {
    return (  
        <>
            <div className='text-center py-5'>
                <img src={NotFoundImage} className="w-[300px] block mx-auto my-10" alt="" />
                <h3 className='text-[72px] font-[600]'>404</h3>
                <p className='text-gray-500'>Page not found. Click <Link className='text-golden-dark underline' to="/">Here</Link> to return to safety</p>
            </div>
        </>
    );
}
 
export default NotFound;