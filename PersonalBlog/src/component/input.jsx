
import React, {useId}from 'react'

const input = React.forwardRef(
    function input({
        label,
        type="Text",
        className="",
        ...props
    },ref){
        const id=useId();
        return (
            <div className='w-full'>
               {
                label&&<label htmlFor={id}>
                    {label}
                </label>
               }  
               <input type={type} 
               className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-green-50 duration-200 border border-gray-200 w-full `}  ref={ref} {...props} id={id}/> 
            </div>
        )
    }
) 

export default input