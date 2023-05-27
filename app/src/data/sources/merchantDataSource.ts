import { Merchant } from "../../domain/transactionReferenceNumber";

export type ValidateMerchantResponse = {
    merchant: Merchant | null
    success: boolean
}

export interface merchantDataSource{
    validateMerchantApiKey(key: string): Promise<ValidateMerchantResponse>
}