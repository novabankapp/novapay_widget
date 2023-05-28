
import { h } from "preact"
import { Button } from "../components/Button"
import { Spinner } from "../components/Spinner"
import { useAppContext } from "../AppContext"
import { RequestStatus, useTransactionModelController } from "../data/controllers/useTransactionModelController"
import { transactionRepo } from "../main"



export const GenerateTRNButton = () => {
    const {generateTRN,fetchStatus,successful,trn} = useTransactionModelController(transactionRepo)
    const config = useAppContext();
    
    const onSubmit = () => {
         
           console.log("clicked")
           if(config.widget.customerRef != null && config.widget.amount != null)
                generateTRN({
                    customerReference: config.widget.customerRef!,
                    serviceUniqueIdentifier: config.uniqueIdentifier,
                    amount: config.widget.amount,
                    metadata: config.widget.metadata,
                })
    }
    return (
        <div className="flex flex-col space-y-6 md:space-y-0 bg-white  shadow rounded-lg justify-between">
             {trn && <div className="mx-auto"><p className="text-primary-600 font-bold">Your TRN is: {trn}</p></div>}
             {fetchStatus == RequestStatus.Loading ? 
               <div className='w-full bg-primary-600 flex flex-col h-10 justify-center items-center rounded-md'>
                 <Spinner/>
                </div> 
                : <Button disabled={false} onClick={onSubmit}  type="button" title={trn != null ? "Regenerate":"Generate TRN"} /> }
        </div>
    )
}