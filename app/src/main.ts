import { merchantRepository, merchantRepositoryImpl, merchantRepositoryMock } from "./data/repositories/merchantRepository";
import { transactionRepository } from "./data/repositories/transactionRepository";
import { transactionRepositoryImpl } from "./data/repositories/transactionRepositoryImpl";
import { transactionRepositoryMock } from "./data/repositories/transactionRepositoryMock";
import { merchantDataSource } from "./data/sources/merchantDataSource";
import { merchantDataSourceImpl } from "./data/sources/merchantDataSourceImpl";
import { transactionsDataSourceImpl } from "./data/sources/transactionSourceImpl";
import { transactionsDataSource } from "./data/sources/transactionsDataSource";

export const transactionDataSource : transactionsDataSource = new transactionsDataSourceImpl()
export const transactionRepo : transactionRepository = new transactionRepositoryImpl(transactionDataSource);
export const merchantSource : merchantDataSource = new merchantDataSourceImpl()
export const merchantRepo : merchantRepository = new merchantRepositoryImpl(merchantSource);
