import { h } from "preact"

export type ButtonTypes = "button" | "submit" 

type ButtonProps = {
    type: ButtonTypes,
    title:string,
    disabled?: boolean,
    onClick?: () => void

}

export const Button = ({type, title, disabled, onClick}: ButtonProps) => {
    return (
        
         <button type={type} disabled={disabled}
             onClick={onClick}
             className="w-full inline-block rounded bg-primary-600 px-7 pb-2.5 pt-3 
            text-sm font-medium uppercase leading-normal text-white 
            disabled:bg-gray-300 
            shadow-gray-200 shadow-md transition duration-150 ease-in-out hover:bg-primary-600 
            hover:shadow-gray-400 
            focus:bg-primary-600 
            focus:shadow-gray-200
            focus:outline-none 
            focus:ring-0 active:bg-blue-700">
               {title}
             </button>
        
    )
}