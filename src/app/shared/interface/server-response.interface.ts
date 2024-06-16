/**
 * Interface for server response
 */
export interface IServerResponse<T> {
    data?: T[];
    error?: unknown;
    message: string;
    status: number;
}