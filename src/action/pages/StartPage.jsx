import React, { useState, useEffect } from 'react'
// import './style1.css'
import bg1 from '../assets/college_grad.jpg'
import bg2 from '../assets/plane.png'

const images = [
    { url: bg1, text: 'Background 1', id: 0 },
    { url: bg2, text: 'Background 2', id: 1 },
    { url: '/images/bg3.jpg', text: 'Background 3', id: 2 },
];

const StartPage = () => {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [activeButton, setActiveButton] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => {
                const nextImage = images[(prevImage.id + 1) % images.length];
                setActiveButton(nextImage.id);
                return nextImage;
            });
        }, 6000);

        return () => clearInterval(interval)
    }, []);

    const handleClick = (image) => {
        setCurrentImage(image);
        setActiveButton(image.id);
    };

    return (
        <div className="relative h-screen  transition-all duration-500 ease-in-out "
            style={{ backgroundImage: `url(${currentImage.url})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>

            <div className='absolute inset-0 bg-black bg-opacity-70 ' ></div>

            <div className="  z-10 text-black text-3xl mb-8">{currentImage.text}</div>

            <div className=''>
                <div className='absolute z-10 bottom-10'>
                    <div className='flex flex-col items-center justfy-center gap-4 w-[100vw]'>
                        <div className="bottom-6 z-10 flex space-x-4">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    className={`px-1 py-1 rounded-[50%] border-2 border-white ${activeButton === image.id ? 'bg-white' : 'bg-gray-800'
                                        } text-white hover:bg-white focus:outline-none`}

                                    onClick={() => handleClick(image)}
                                ></button>
                            ))}

                        </div>

                        <button className='text-white font-bold text-xl border-2 py-4 px-8 rounded-full  hover:bg-opacity-30 hover:bg-white  transition-all ease-in-out duration-1000 '>START NOW</button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default StartPage