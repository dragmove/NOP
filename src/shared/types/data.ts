// client
export interface FetchDataResult {
  data: any;
  isLoading: boolean;
  error: unknown;
}

// server
export interface ApiResponse<T> {
  statusCode: number;
  message: string | string[];
  result?: T | PluralResult<T>;
  error?: string;
}

export interface PluralResult<T> {
  data: T[];
  total: number;
}
