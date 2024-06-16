/**
 * Interface for create blog request
 */
export interface IBlog {
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
  createdAt?: string;
}
