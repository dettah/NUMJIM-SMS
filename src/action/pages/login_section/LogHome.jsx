import React from 'react';
import { Link } from 'react-router-dom';
import BtnTile from '../../components/BtnTile';
import NavBarMob from '../../components/NavBarMob';

const LogHome = () => {
    

    const btnItems = [
        { title: 'Payment', desc: 'School, History, Verify', id: 0, path: '/payment' },
        { title: 'Courses', desc: 'Register, History, Materials', id: 1, path: '/courses' },
        { title: 'Results', desc: 'Checker, calculator', id: 2, path: '/results' }
    ];



    return (
        <div>
            <NavBarMob />
            <section className='px-4'>

                {btnItems.map((item) => (

                    <Link to={item.path} key={item.id}>
                        <BtnTile
                            title={item.title}
                            desc={item.desc}
                           
                            // onClick={() => handleClick(item.path)}
                        />
                    </Link>
                ))}

            </section>
        </div>
    );
};

export default LogHome;
