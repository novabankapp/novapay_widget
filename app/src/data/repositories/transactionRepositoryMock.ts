
import { CreateTRNRequest, CreateTRNResponse, ValidateReferenceRequest, ValidateReferenceResponse } from "../sources/transactionsDataSource";
import { transactionRepository } from "./transactionRepository";

export class transactionRepositoryMock implements transactionRepository{
 
    generateTRN(request: CreateTRNRequest): Promise<CreateTRNResponse> {
        const res = {
            result: true,
            trn: "1234"
        } as  CreateTRNResponse
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
    validateReference(request: ValidateReferenceRequest): Promise<ValidateReferenceResponse> {
        const res = {
            customerName: "Lewis Msasa",
            success: true,
            payload: request.customerReference
        }
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
   
}