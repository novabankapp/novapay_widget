

export type TransactionReferenceNumber = {
    recordId: number,
    TRN: string,
    merchant: Merchant,
    financialInstitution: FinancialInstitution,
    amount: number,
    used: boolean,
    userId: string,
    serviceUniqueIdentifier: string,
    financialServiceUniqueIdentifier: string,
    metadata?: string,
    createdAt: string
    
}

export type Merchant = {
    name: string,
    recordId: number,
    uniqueIdentifier: string,
    isActive: boolean,
    merchantCategoryRecordId: number,
    merchantCategory: MerchantCategory,
    merchantConfig: MerchantConfig
}

export type MerchantCategory = {
  recordId: number,
  name: string,
}

export type MerchantConfig = {
   
    hasValidation: boolean,
  }

  export type FinancialInstitution = {
    name: string,
    recordId: number,
    uniqueIdentifier: string,
    isActive: boolean,
    financialInstitutionCategory: FinancialInstitutionCategory
}
export type FinancialInstitutionCategory = {
    recordId: number,
    name: string,
  }

