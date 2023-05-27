import { CreateTRNRequest, CreateTRNResponse, ValidateReferenceRequest, ValidateReferenceResponse } from "../sources/transactionsDataSource"

export interface transactionRepository {
    generateTRN(request: CreateTRNRequest): Promise<CreateTRNResponse>
    validateReference(request: ValidateReferenceRequest) : Promise<ValidateReferenceResponse>
}