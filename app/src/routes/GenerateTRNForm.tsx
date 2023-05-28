import { h } from "preact"
import "./generateTRNform.css"
import { useMemo, useState } from "preact/hooks";
import { PrimaryTextField } from "../components/textfield";
import TextArea from "../components/TextArea";
import { Button } from "../components/Button";
import { useIsMounted } from "../hooks";
import { useTransactionModelController } from "../data/controllers/useTransactionModelController";
import { transactionRepo } from "../main";
import { useAppContext } from "../AppContext";
import { Spinner } from "../components/Spinner";

export const GenerateTRNForm = () => {
    const mounted = useIsMounted();
    const config = useAppContext();
    
    const {generateTRN,validateCustomerRef,validatedCustomerRef,successful,setTRN,trn} = useTransactionModelController(transactionRepo)
    const [refValidated, setRefValidated] = useState(false)
    const [submitting, setSubmitting] = useState(false);
    const [validating, setValidating] = useState(false)
    const [customerRefValue, setCustomerRefValue] = useState('');
    const [amount, setAmount] = useState("")
    const [metadata, setMetadata] = useState("")
    const validateRef = async() => {
        
        setValidating(true)
        if( customerRefValue.length > 0){
            
            await validateCustomerRef({
                customerReference: customerRefValue,
                serviceUniqueIdentifier: config.uniqueIdentifier
            })
         }
        setValidating(false) 
        setRefValidated(true)
        
    }
    console.log(mounted)
    const refError = useMemo(
        () => mounted.current && (!customerRefValue || customerRefValue.length < 1)
            ? 'Customer ref is required' : '',
        [customerRefValue,submitting, mounted]);
    const amountError = useMemo(
            () => mounted.current && (!amount || !(/^(\d+(?:[\.\,]\d{2})?)$/.test(amount)))
                ? 'amount is required and should be a number' : '',
            [amount,submitting, mounted]);
    const formValid = useMemo(
                () => ![amountError, refError].reduce((m, n) => m + n) ,
                [amountError, refError]);
    const reset = () => {
            setTRN(null)
            setAmount("0.00")
            setCustomerRefValue("")
            setMetadata("")
            setRefValidated(false)
            setValidating(false)
    }
    const onSubmit = () => {
        if((amount.length < 1 || customerRefValue.length < 1)){
            setAmount(prev => amount)
            console.log((/^(\d+(?:[\.\,]\d{2})?)$/.test(amount)))
            return
        }
        if(!formValid){
            setSubmitting(false);
            return
           
        }
        console.log("submitted")        
        setSubmitting(false);
        generateTRN({
            customerReference: customerRefValue,
            serviceUniqueIdentifier: config.uniqueIdentifier,
            amount: amount as unknown as number,
            metadata: metadata,
         })
       
         
    }
    return (
        <div className="flex flex-col space-y-6 md:space-y-0 bg-white  shadow rounded-lg justify-between">
                <div className="bg-primary-600 w-full flex flex-col rounded bg-opacity-40">
                    <h1 className="mx-auto font-semibold mb-2">Generate Transaction Reference Pin</h1> 
                    {trn !=null ? <p className="text-red-600 font-bold">{`your TRN is : ${trn}`}</p> : null}
                   
                </div>
                <div className=" p-8 flex flex-col">
                   
                    {validatedCustomerRef !=null ? <p className="text-primary-600 font-bold">{`customer ref details : ${validatedCustomerRef.customerName}`}</p> : null}
                    <form onSubmit={(e) => {
                         e.preventDefault();
                         setSubmitting(true);
                         onSubmit()
                         }}>
                        <div className="flex items-center flex-col  gap-2">
                          
                            <div className='flex flex-col w-full'>
                                <p className="text-red-600">{refError}</p>
                                <div className="w-full flex flex-col  items-center">
                                
                                    <PrimaryTextField  name="customerRef" onInput={(val) => setCustomerRefValue(val)} type="text" value={customerRefValue}    label="Customer Reference" placeholder="Customer Reference" />
                                    <div className="self-start flex">
                                    {!validating ?
                                        <button onClick={validateRef} type="button"
                                        className='text-primary-600 underline h-10 disabled:text-gray-100' 
                                        disabled={customerRefValue == "" || !config.merchantConfig.hasValidation}>
                                        Validate  
                                        </button>
                                    :  <div className=""> <Spinner color="#19A0CB"/></div> }
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex flex-col">
                                <p className="text-red-600">{amountError}</p>
                                <PrimaryTextField  name="amount" type="text" onInput={(val) => setAmount(val)} value={amount} label="Amount" placeholder="Amount" />
                                
                            </div>

                            <div className="w-full flex flex-col">
                            <p className="text-red-600"></p>
                            
                                <TextArea name="metadata" onInput={(value) => setMetadata(value)}   value={metadata} padX={0} label="Description" padY={0} width="full" height="20" placeholder="" />
                                
                    
                            </div>
                            <div className="flex flex-row gap-2  w-full items-center">
                                <div className=" w-1/2">
                                    {submitting ? 
                                    <div className='w-full bg-primary-600 flex flex-col h-10 justify-center items-center rounded-md'>
                                        <Spinner/>
                                    </div> 
                                    : <Button disabled={!formValid || (config.merchantConfig.hasValidation && !refValidated)} 
                                            type="submit" title="Generate" /> }
                                </div>
                                <div className=" w-1/2">
                                    <button  className="w-full px-7 pb-2.5 pt-3 bg-novagray-500  text-white inline-block rounded">Reset</button>
                                </div>
                            </div>
                           
                        
                        </div>
                    </form>
                
                </div>
            
        </div>
    )
}