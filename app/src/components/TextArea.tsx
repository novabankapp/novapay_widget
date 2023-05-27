import { h } from "preact"

type TextAreaProps = {
    label: string,
    name: string,
    placeholder: string,
    height : string,
    width: string,
    padX : Number,
    padY: Number,
    value: string,
    onInput: (value: string) => void

}
const TextArea = ({value,label,placeholder,onInput, name,  padY, padX,height,width} : TextAreaProps) => {
    return (
       
        <div className="mb-4 w-full">
        <label className="block text-fidarrgray-900 text-sm font-bold mb-2" htmlFor="username">
            {label}
        </label>
        <textarea name={name} value={value} onInput={(e) => onInput(e.currentTarget.value)} className={`resize rounded-md shadow appearance-none border  leading-tight focus:outline-none focus:shadow-outline  h-${height} w-${width} py-${padY} px-${padX} `}></textarea>
    </div>
    )
}

export default TextArea