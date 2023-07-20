
import { postAPI } from "../api/axios_instance";
import { VALIDATE_MERCHANT } from "../api/constants";
import { ValidateMerchantResponse, merchantDataSource } from "./merchantDataSource";

export class merchantDataSourceImpl implements merchantDataSource{
    async validateMerchantApiKey(key: string): Promise<ValidateMerchantResponse> {
        return await postAPI<ValidateMerchantResponse>(VALIDATE_MERCHANT, {key: key})
    }
    
}