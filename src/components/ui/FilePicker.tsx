import React from 'react'
import { CustomButton } from '.'

const FilePicker = ({ file, setFile, readFile }) => {
    return (
        <div className='filepicker-container'>
            <div className='flex-1 flex flex-col'>
                <input
                    id='file-upload'
                    type='file'
                    accept='image/*'
                    onChange={(e) => setFile(e.target.files![0])}
                />
                <label htmlFor="file-upload" className='filepicker-label'>
                    Upload File
                </label>

                <p className='mt-2 text-gray-500 text-xs truncate'>
                    {file === '' ? "No file selected" : file.name}
                </p>
            </div>

            <div className='mt-4 flex flex-wrap w-full gap-3 items-center justify-center'>
                <CustomButton
                    type='outline'
                    title='Logo'
                    handleClick={() => readFile('logo')}
                    customStyles='text-xs min-w flex-1'
                />
                <CustomButton
                    type='filled'
                    title='Full'
                    handleClick={() => readFile('full')}
                    customStyles='text-xs flex-1'
                />
            </div>
        </div>
    )
}

export default FilePicker