import { HttpCode } from "../types/errors.types";

export class AppError extends Error {
    public readonly name:string;
    public readonly httpCode:HttpCode;
    public readonly isOperational:boolean;
}