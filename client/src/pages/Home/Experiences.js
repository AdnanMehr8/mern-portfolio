import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

const Experiences = () => {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector(state => state.root);
    const { experiences } = portfolioData;
    return (
        <div>
            <SectionTitle title="Experience" />
            <div className='flex py-10 gap-20 sm:flex-col '>
                <div className='flex flex-col gap-10 border-l-2 border-solid border-[#5332] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelectedItemIndex(index);
                            }}
                            className='cursor-pointer px-3 py-12'
                            
                        >
                            <h1
                                className={`text-xl px-5
                                 ${selectedItemIndex === index ? "text-tertiary border-tertiary border-solid border-l-4 -ml-[3px] bg-[#0e4f44] py-3" : "text-white"}`}
                            >
                                {experience.period}
                            </h1>
                        </div>
                    ))}
                </div>


                <div className='flex flex-col gap-5'>
                    <h1 className='text-secondary text-xl '>{experiences[selectedItemIndex].title}</h1>
                    <h1 className='text-tertiary text-xl '>{experiences[selectedItemIndex].company}</h1>
                    <p className='text-white'>{experiences[selectedItemIndex].description}</p>
                </div>
            </div>
        </div>
    )
}

export default Experiences 