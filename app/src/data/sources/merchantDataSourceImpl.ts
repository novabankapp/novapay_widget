
import { postAPI } from "../api/axios_instance";
import { ValidateMerchantResponse, merchantDataSource } from "./merchantDataSource";

export class merchantDataSourceImpl implements merchantDataSource{
    async validateMerchantApiKey(key: string): Promise<ValidateMerchantResponse> {
        return await postAPI<ValidateMerchantResponse>("Merchant/validateApiKey", {key: key})
    }
    
}