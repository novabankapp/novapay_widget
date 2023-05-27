import { useState } from "preact/hooks";
import { merchantRepository } from "../repositories/merchantRepository";
import { RequestStatus } from "./useTransactionModelController";
import { Merchant } from "../../domain/transactionReferenceNumber";

export const useMerchantController = (repository : merchantRepository) => {
    const [fetchStatus, setFetchStatus] = useState<RequestStatus>();
    const [successful, setSuccess] = useState<boolean>(true)
    const [merchant, setMerchant] = useState<Merchant | null>(null)

    const validateMerchantApiKey = async (key: string) => {
        try{
            setFetchStatus(RequestStatus.Loading)
            const response = await repository.validateMerchantApiKey(key)
            if(response.success){
                console.log(response)
                setFetchStatus(RequestStatus.Success)
                setSuccess(prev => true)
                setMerchant(response.merchant)
               
             }
             else{
                setFetchStatus(RequestStatus.Error)
                setSuccess(false)
             }
        }
        catch(err : any){
         
            console.log(err.message)
             setFetchStatus(RequestStatus.Error)
         }
    }
    return {
        fetchStatus,
        successful,
        validateMerchantApiKey,
        merchant
    }
}