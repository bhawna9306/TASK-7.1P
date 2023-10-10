import '../Header.css';
import Header from '../Header'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function HomePage() {
    const [searchterm, setsearchterm] = useState('')
    function handlechange(e) {
        setsearchterm(e.target.value)
    }
    return (<div>
        <Outlet />
        <div className='header'>
            <Header
                text=' WELCOME' />

            <input
                onChange={handlechange}
                type='text'
                placeholder='Search '
            />
        </div>
    </div>

    );

}
export default HomePage