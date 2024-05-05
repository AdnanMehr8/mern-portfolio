import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

const Contact = () => {
    const { portfolioData } = useSelector(state => state.root);
    const { contact } = portfolioData;
    return (
        <div>
            <SectionTitle title="Say Hello" />

            <div className='flex sm:flex-col items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='text-tertiary'>{'{'}</p>
                    {Object.keys(contact).map((key) => (
                        key !== '_id' && <p className='ml-5' key={key}>
                            <span className='text-tertiary'>{key} :</span>
                            <span className='text-tertiary'>{contact[key]}</span>
                        </p>
                    ))}
                    <p className='text-tertiary'>{'}'}</p>

                </div>

                <div className='h-[500px] '>
                    <dotlottie-player src="https://lottie.host/2eebea7a-1eba-4a0c-ba7f-58b40c232a97/LfYzWPbBOM.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                </div>

            </div>
        </div>
    )
}

export default Contact