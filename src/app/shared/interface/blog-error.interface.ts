export interface IBlogError {
  error?: {
    title?: string[];
    description?: string[];
    imageUrl?: string[];
    firstName?: string[];
    lastName?: string[];
  };
  success: boolean;
}
