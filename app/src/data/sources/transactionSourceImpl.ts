import { postAPI } from "../api/axios_instance"
import { GENERATE_TRN, VALIDATE_REF } from "../api/constants"
import { transactionsDataSource, CreateTRNRequest, CreateTRNResponse, ValidateReferenceRequest, ValidateReferenceResponse } from "./transactionsDataSource"

export class transactionsDataSourceImpl implements transactionsDataSource{
    async generateTRN(request: CreateTRNRequest): Promise<CreateTRNResponse> {
        return await postAPI<CreateTRNResponse>(GENERATE_TRN, request) 
    }
    async validateReference(request: ValidateReferenceRequest): Promise<ValidateReferenceResponse> {
        return await postAPI<ValidateReferenceResponse>(VALIDATE_REF, request) 
    }
}