import React from 'react'
import CustomButton from './CustomButton'
// import { CustomButton } from '.'


const UrlPicker = ({ prompt, setPrompt, handleSubmit }) => {
    return (
        <div className='urlpicker-container'>
            <textarea
                placeholder='Paste in your URl...'
                rows={5}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className='urlpicker-textarea'
            >

            </textarea>
            <div className='flex flex-wrap gap-3'>

                <>
                    <CustomButton
                        type='outline'
                        title='Url Logo'
                        handleClick={() => handleSubmit('logo')}
                        customStyles='text-xs flex-1'
                    />
                    <CustomButton
                        type='filled'
                        title='Url Full'
                        handleClick={() => handleSubmit('full')}
                        customStyles='text-xs flex-1'
                    />
                </>
            </div>
        </div>
    )
}

export default UrlPicker