import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
const Projects = () => {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector(state => state.root);
    const { projects } = portfolioData;
    return (
        <div>
            <SectionTitle title="Projects" />
            <div className='flex py-10 gap-20 sm:flex-col '>
                <div className='flex flex-col gap-10 border-l-2 border-solid border-[#5332] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelectedItemIndex(index);
                            }}
                            className='cursor-pointer px-3'
                        >
                            <h1
                                className={`text-xl px-5
                                 ${selectedItemIndex === index ? "text-tertiary border-tertiary border-solid border-l-4 -ml-[3px] bg-[#0e4f44] py-3" : "text-white"}`}
                            >
                                {project.title}
                            </h1>
                        </div>
                    ))}
                </div>


                <div className='flex items-center justify-center gap-10 sm:flex-col '>
                    <div className='flex flex-col gap-5'>
                    <img src={projects[selectedItemIndex].image} alt='' className=' h-60 w-72' />
                        <h1 className='text-secondary text-xl '>{projects[selectedItemIndex].title}</h1>
                        <p className='text-white'>{projects[selectedItemIndex].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects