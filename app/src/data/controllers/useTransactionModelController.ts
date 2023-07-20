import { useState } from "preact/hooks"
import { transactionRepository } from "../repositories/transactionRepository"
import { useNavigation } from "../../layouts/Router"
import { BASE_URL } from "../api/constants"

export enum RequestStatus {
  Loading,
  Error,
  Success
}

export type CreateTRNData = {
    customerReference: string,
    serviceUniqueIdentifier: string
    amount: number,
    metadata: any,
 }
 export type ValidateCustomerRefData = {
    customerReference: string,
    serviceUniqueIdentifier: string
    
 }
 type ValidatedCustomerRef = {
    customerName: string,
    payload: any
 }
export const useTransactionModelController = (repository: transactionRepository) => {
    const [fetchStatus, setFetchStatus] = useState<RequestStatus>();
    const [successful, setSuccess] = useState<boolean>(true)
    const [trn, setTRN] = useState<string |null>(null)
    const [qrCode, setQRCode] = useState<string |null>(null)
    const [validatedCustomerRef, setValidatedCustomerRef] = useState<ValidatedCustomerRef|null>(null);
    const {setRoute} = useNavigation();
    
   
    
    const validateCustomerRef = async (data: ValidateCustomerRefData) => {
       
        try{
            setFetchStatus(RequestStatus.Loading)
            const response = await repository.validateReference({
                customerReference: data.customerReference,
                serviceUniqueIdentifier: data.serviceUniqueIdentifier
            })
            if(response.success){
                console.log(response)
                setFetchStatus(RequestStatus.Success)
                setSuccess(prev => true)
                setValidatedCustomerRef(prev => {
                   return { customerName: response.customerName,
                    payload: response.payload}
                })
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
    const generateTRN = async(data : CreateTRNData) => {
        try{
            console.log("this")
            setFetchStatus(RequestStatus.Loading)
            const response = await repository.generateTRN({
                customerReference: data.customerReference,
                serviceUniqueIdentifier : data.serviceUniqueIdentifier,
                amount: data.amount,
                metadata: data.metadata,
             });
             if(response.result){
                setFetchStatus(RequestStatus.Success)
                setSuccess(true)
                setTRN(response.trn)
                setQRCode(`${BASE_URL}/api/${response.qrCode}`)
                //setRoute("/feedback")
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
        setTRN,
        trn,
        qrCode,
        validatedCustomerRef,
        generateTRN,
        validateCustomerRef,
    }
}