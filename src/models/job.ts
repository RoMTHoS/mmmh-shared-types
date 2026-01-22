/**
 * Job processing models for extraction queue management.
 */

import type { Recipe, Platform } from './recipe.js';
import type { ErrorCode } from '../errors/codes.js';

export type JobStatus = 'pending' | 'processing' | 'completed' | 'failed';

export type ProcessingStep =
  | 'queued'
  | 'downloading'
  | 'extracting_audio'
  | 'transcribing'
  | 'structuring'
  | 'validating'
  | 'complete';

export interface JobError {
  code: ErrorCode;
  message: string;
  details?: Record<string, unknown>;
  retryable: boolean;
}

export interface ExtractionJob {
  id: string;
  status: JobStatus;
  sourceUrl: string;
  platform: Platform;

  currentStep: ProcessingStep;
  progress: number;

  result?: Recipe;
  error?: JobError;

  createdAt: string;
  startedAt?: string;
  completedAt?: string;
}
