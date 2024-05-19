import React from 'react';
import BtnTile from '../../components/BtnTile';
import NavBarMob from '../../components/NavBarMob';

const LogHome = () => {
    const btnItems = [
        { title: 'Payment', desc: 'School, History, Verify', imgUrl: 'Vite', id: 0 },
        { title: 'Courses', desc: 'Register, History, Materials', imgUrl: 'courses.jpg', id: 1 },
        { title: 'Results', desc: 'Checker, calculator', imgUrl: 'results.jpg', id: 2 },
    ];

    return (
        <div>
            <NavBarMob />
            <section className='px-4'>

            {btnItems.map((item) => (
                <BtnTile
                title={item.title}
                desc={item.desc}
                imgUrl={item.imgUrl}
                key={item.id}
                onClick={onClick}
                />
            ))}
            </section>
        </div>
    );
};

export default LogHome;
