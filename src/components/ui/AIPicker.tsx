import React from 'react'
import CustomButton from './CustomButton'
// import { CustomButton } from '.'


const AIPicker = ({ prompt, setPrompt, generateImg, handleSubmit }) => {
    return (
        <div className='aipicker-container'>
            <textarea
                placeholder='Ask AI...'
                rows={5}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className='aipicker-textarea'
            >

            </textarea>
            <div className='flex flex-wrap gap-3'>
                {generateImg ? (
                    <CustomButton
                        type='outline'
                        title='Asking AI...'
                        customStyles='text-xs'
                        handleClick={() => { }}
                    />
                ) : (
                    <>
                        <CustomButton
                            type='outline'
                            title='AI Logo'
                            handleClick={() => handleSubmit('logo')}
                            customStyles='text-xs flex-1'
                        />
                        <CustomButton
                            type='filled'
                            title='AI Full'
                            handleClick={() => handleSubmit('full')}
                            customStyles='text-xs flex-1'
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default AIPicker