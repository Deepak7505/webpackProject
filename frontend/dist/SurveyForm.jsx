import React from 'react';
import { primiumUserImages } from '../src/constants/constant';

const SurveyForm = () => {
  return (
    <>
    <div className='w-[100%] h-[55vh] flex justify-center pt-[2%] bg-zinc-300 text-black'>
    <div className='p-[1%] flex justify-center h-max w-[35%] bg-slate-200 relative rounded-lg'>
        <div className="formImgParentDiv">
            <div className="p-[8%]">
                <img src={primiumUserImages.secndUser} className='rounded-full'  height='20%' width='85%' alt="user image" />
            </div>
        </div> 
        <div className="surveyFormParentDiv relative">
            <div className="surveyForm border-b border-black">
                <h2 className='text-xl font-bold'>Deepak, are you interested in Premium for work or personal use?</h2>
                <h6>Well recommend the right plan for you.</h6>
                <div>
                    <fieldset className='mt-[6%]'>
                        <div className="serveyQstionDiv m-[2%] w-max flex justify-evenly">
                        <input type='checkbox' className='h-6 w-6 mr-2 rounded' />
                        <label htmlFor="">I’d use Premium for my personal goals</label>
                        </div>
                        <div className="serveyQstionDiv m-[2%] w-max flex justify-evenly">
                        <input type='checkbox' className='h-6 w-6 mr-2 rounded'/>
                        <label htmlFor="">I’d use Premium as part of my job</label>
                        </div>
                        <div className="serveyQstionDiv m-[2%] w-max flex justify-evenly">
                        <input type='checkbox' className='h-6 w-6 mr-2 rounded'/>
                        <label htmlFor="">other</label>
                        </div>
                        <span className='text-red-800 invisible'>Please select at least one option.</span>
                    </fieldset>
                </div>
            </div>
            
    <div className='text-white flex justify-end'>
        <button className='h-8 w-16 mt-1 rounded-full bg-blue-700'>Next</button>
    </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default SurveyForm