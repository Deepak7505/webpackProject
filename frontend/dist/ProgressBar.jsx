import React, { useState } from 'react'

export const ProgressBar = () => {
    const [value,setValue] = useState(40);
    return (
        <div className="premium-chooser__progress-bar flex justify-center pt-[2%] pb-[2%]">
          <div className="">
            <div className="">
              <progress
                max="100"
                value={value}
                className="rounded-full w-[25vw]"
                aria-valuetext={`Current value: ${value}, Start: , End: 100%`}
                aria-valuemin="0"
                aria-valuenow={value}
                aria-valuemax="100"
                style={{ '--offset-value': `${value}%`}}
              >
                {`Current value: ${value}, Start: , End: 100%`}
              </progress>
            </div>
            <div className="artdeco-completeness-meter-linear__start-label" aria-hidden="true"></div>
            <div className="artdeco-completeness-meter-linear__end-label flex justify-center" aria-hidden="true">
              {`${value}%`}
            </div>
          </div>
        </div>
      );      
}


export default ProgressBar