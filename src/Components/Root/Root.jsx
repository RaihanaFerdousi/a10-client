import { ToastContainer } from 'react-toastify';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    console.log('this is root')
    return (
        <div>
            <Navbar/>
            <ToastContainer/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;