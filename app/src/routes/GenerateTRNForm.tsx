import { h } from "preact"
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import "./generateTRNform.css"
import { useState } from "preact/hooks";
import { PrimaryTextField } from "../components/textfield";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import TextArea from "../components/TextArea";
import { Button } from "../components/Button";


type FormData = {
    customerRef: string;
    amount: number;
    metadata: string;
};
const schema = yup.object({
    customerRef: yup.string().required(),
    amount: yup.string().required(),
    metadata: yup.string()
  }).required();
export const GenerateTRNForm = () => {
    const [refValidated, setRefValidated] = useState(false)
    const [validating, setValidating] = useState(false)
    const validateRef = async() => {
        setValidating(true)
        setValidating(false)
        
         console.log("within")
        setRefValidated(true)
        
    }
    
      const onSubmit = (data : FormData) => {
        console.log("submitted")
       
         
      }
    return (
        <div className="flex flex-col space-y-6 md:space-y-0 bg-white  shadow rounded-lg justify-between">
                <div className="bg-primary-600 w-full flex rounded bg-opacity-50">
                    <h1 className="mx-auto font-semibold mb-2">Generate Transaction Reference Pin</h1>                        
                </div>
                <div className=" p-8 ">
                   
                    
                    <form onSubmit={() => onSubmit}>
                        <div className="flex items-center flex-col  gap-2">
                          
                            <div className='flex flex-col w-full'>
                                <p className="text-red-600"></p>
                                <div className="w-full flex flex-row gap-2 items-center">
                                
                                    <PrimaryTextField  name="customerRef" type="text" value=""    label="Customer Reference" placeholder="Customer Reference" />
                                    
                                    <button onClick={validateRef}
                                    className='text-primary-600 h-10 disabled:text-gray-100' 
                                    disabled={true}>
                                    {!validating ? `Validate` :  <FontAwesomeIcon className='text-primary-600 spinner'  icon={faSpinner} /> } 
                                    </button>
                                </div>
                            </div>

                            <div className="w-full flex flex-col">
                                <p className="text-red-600"></p>
                                <PrimaryTextField  name="amount" type="text" value="" label="Amount" placeholder="Amount" />
                                
                            </div>

                            <div className="w-full flex flex-col">
                            <p className="text-red-600"></p>
                            
                                <TextArea name="metadata"    value="" padX={0} label="Description" padY={0} width="full" height="20" placeholder="" />
                                
                    
                            </div>

                            <div className="w-full  self-start">
                            {false ? 
                            <div className='w-full bg-primary-600 flex flex-col h-10 justify-center items-center rounded-md'><FontAwesomeIcon className='text-white spinner'  icon={faSpinner} /></div> 
                            : <Button disabled={false} 
                                    type="submit" title="Generate" /> }
                        </div>
                        
                        </div>
                    </form>
                
                </div>
            
        </div>
    )
}