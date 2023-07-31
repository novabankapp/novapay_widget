
import { h } from "preact"
import { Button } from "../components/Button"
import { Spinner } from "../components/Spinner"
import { useAppContext } from "../AppContext"
import { RequestStatus, useTransactionModelController } from "../data/controllers/useTransactionModelController"
import { transactionRepo } from "../main"
import { useEffect } from "preact/hooks"



export const GenerateTRNButton = () => {
    const {generateTRN,fetchStatus,successful, error,trn,qrCode} = useTransactionModelController(transactionRepo)
    const config = useAppContext();
    useEffect(() => {
        if(config.widget.customerRef != null && config.widget.name =="auto" && config.widget.amount != null)
                generateTRN({
                    customerReference: config.widget.customerRef!,
                    serviceUniqueIdentifier: config.uniqueIdentifier,
                    amount: config.widget.amount,
                    metadata: config.widget.metadata,
                })
    },[])
    const onSubmit = () => {
         
           
           if(config.widget.customerRef != null && config.widget.amount != null)
                generateTRN({
                    customerReference: config.widget.customerRef!,
                    serviceUniqueIdentifier: config.uniqueIdentifier,
                    amount: config.widget.amount,
                    metadata: config.widget.metadata,
                })
    }
    if(config.widget.name !="auto"){
    return (
        <div className="flex flex-col space-y-6 md:space-y-0 bg-white  shadow rounded-lg justify-between">
             { trn && 
                <div>
                    {qrCode && 
                        <div>
                            <img src={qrCode} />
                        </div>
                   }
                   <div className="mx-auto"><p className="text-primary-600 font-bold">Your TRN is: {trn}</p></div>
                </div> 
             }
             {(RequestStatus.Error && error != null)  &&
              <div className="mx-auto"><p className="text-red-600 font-bold">Something went wrong</p></div> 
             }
             
             {fetchStatus == RequestStatus.Loading  ? 
               <div className='w-full bg-primary-600 flex flex-col h-10 justify-center items-center rounded-md'>
                 <Spinner/>
                </div> 
                : 
                 <Button disabled={false} onClick={onSubmit}  type="button" title={trn != null ? "Regenerate":"Generate TRN"} /> 
             }
        </div>
    )
    }
    else{
        return (
            <div className="flex flex-col space-y-6 md:space-y-0 bg-white  shadow rounded-lg justify-between">
                    { trn && 
                    <div>
                        {qrCode && 
                            <div>
                                <img src={qrCode} />
                            </div>
                        }
                        <div className="mx-auto"><p className="text-primary-600 font-bold">Your TRN is: {trn}</p></div>
                    </div> 
                    }
                    {(RequestStatus.Error && error != null)  &&
                    <div className="mx-auto"><p className="text-red-600 font-bold">Something went wrong</p></div> 
                    }
                    
            </div>
        )
    }
}