export interface IListResponse<T> {
    data?: T[];
    total?: number;
    page?: number;
    limit?: number;
    error?: unknown;
    status?: number;
}