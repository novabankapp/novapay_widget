import { h } from "preact"

export type TextfieldTypes = "text" | "password" 

type TextfieldProps = {
    value : string,
    type: TextfieldTypes,
    placeholder: string,
    name: string,
    label: string,
    onInput: (value: string) => void
}

export const TextField = ({value, onInput: onInput, type, placeholder, name, label}: TextfieldProps) => {
    return (
        <div className="relative mb-6">
                    <input
                    onInput={(e) => onInput(e.currentTarget.value)}
                    type={type}  value={value} name={name} 
                    className="peer block min-h-[auto] w-full 
                    rounded border-0 bg-gray-100 px-3 py-[0.32rem] 
                    leading-[2.15] outline-none transition-all 
                    duration-200 ease-linear 
                    focus:placeholder:opacity-100 
                    motion-reduce:transition-none dark:text-blue-200 
                    dark:placeholder:text-blue-200 
                    "                   
                    placeholder={placeholder} />
                    <label
                    htmlFor={name}
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0]
                     truncate pt-[0.37rem] leading-[2.15] text-opacity-0 text-gray-100 transition-all 
                     duration-200 ease-out peer-focus:-translate-y-[1.15rem] 
                     peer-focus:scale-[0.8] peer-focus:text-primary-600 
                     peer-data-[te-input-state-active]:-translate-y-[1.15rem] 
                     peer-data-[te-input-state-active]:scale-[0.8] 

                     motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-blue"
                    >
                        {label}
                    </label>
            </div>
       
    )
}



export const PrimaryTextField = ({value,label,onInput: onInput,placeholder, name,type,} : TextfieldProps) => {
  
    return (
    <div className={`mb-4 w-full`}>
        {label != null ? <label className="block text-gray-900 text-sm font-bold mb-1" htmlFor="username">
            {label}        
           </label> : ""
        }
      <input value={value} name={name}   onInput={(e) => onInput(e.currentTarget.value)} className={`shadow appearance-none border rounded  w-full py-2 px-6 text-black leading-tight focus:outline-none focus:shadow-outline`}  type={type} placeholder={placeholder} />
    </div>
   )
}