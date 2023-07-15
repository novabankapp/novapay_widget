export interface CreateTRNRequest{
    customerReference: string,
    amount: number,
    metadata: any,
 }
 export interface CreateTRNResponse{
     result: boolean
     trn: string,
     qrCode: string
 }
 
 export interface ValidateReferenceRequest {
     customerReference: string,
     serviceUniqueIdentifier: string
 }
 export interface ValidateReferenceResponse {
     customerName: string,
     success: boolean
     payload: any
 }
export interface transactionsDataSource{
    generateTRN(request: CreateTRNRequest): Promise<CreateTRNResponse>
    validateReference(request: ValidateReferenceRequest) : Promise<ValidateReferenceResponse>
 }