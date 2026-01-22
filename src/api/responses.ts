/**
 * API response models for consistent response formatting.
 */

import type { ErrorCode } from '../errors/codes.js';

export interface ApiError {
  code: ErrorCode;
  message: string;
  details?: Record<string, unknown>;
  field?: string;
  timestamp: string;
  requestId?: string;
}

export interface ResponseMeta {
  page?: number;
  pageSize?: number;
  total?: number;
  hasMore?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  meta?: ResponseMeta;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: Required<ResponseMeta>;
}
