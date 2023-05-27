import { Merchant } from "../../domain/transactionReferenceNumber";
import { ValidateMerchantResponse, merchantDataSource } from "../sources/merchantDataSource";


export interface merchantRepository{
    validateMerchantApiKey(key: string): Promise<ValidateMerchantResponse>
}
export class merchantRepositoryImpl implements merchantRepository{
    private _dataSource : merchantDataSource;
  
    public constructor(
        dataSource : merchantDataSource
    ){
        this._dataSource = dataSource
    }
    async validateMerchantApiKey(key: string): Promise<ValidateMerchantResponse> {
       return await this._dataSource.validateMerchantApiKey(key)
    }
    
}
export class merchantRepositoryMock implements merchantRepository{
    async validateMerchantApiKey(key: string): Promise<ValidateMerchantResponse> {
        const res = {
            success: true,
            merchant: {
                name: `Merchant`,
                recordId: 1,
                uniqueIdentifier: `123`,
                isActive: true,
                merchantCategoryRecordId: 1,
                merchantCategory: {
                    recordId: 1,
                    name: `123`,
                },
                merchantConfig: {
                    hasValidation: true,
                },
            } as Merchant
        }
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
}