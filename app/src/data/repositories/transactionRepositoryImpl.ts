import { inject } from "inversify";
import { CreateTRNRequest, CreateTRNResponse, ValidateReferenceRequest, ValidateReferenceResponse, transactionsDataSource } from "../sources/transactionsDataSource";
import { transactionRepository } from "./transactionRepository";

export class transactionRepositoryImpl implements transactionRepository{
    private _dataSource : transactionsDataSource;
  
    public constructor(
        dataSource : transactionsDataSource
    ){
        this._dataSource = dataSource
    }
    async generateTRN(request: CreateTRNRequest): Promise<CreateTRNResponse> {
        return await this._dataSource.generateTRN(request)
    }
    async validateReference(request: ValidateReferenceRequest): Promise<ValidateReferenceResponse> {
        return await this._dataSource.validateReference(request)
    }
}