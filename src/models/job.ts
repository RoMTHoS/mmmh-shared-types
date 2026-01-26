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

export type ImportType = 'video' | 'photo' | 'website';

export interface JobError {
  code: ErrorCode;
  message: string;
  details?: Record<string, unknown>;
  retryable: boolean;
}

/**
 * Data passed to a BullMQ job for recipe extraction.
 */
export interface ExtractionJobData {
  jobId: string;
  userId?: string;
  importType: ImportType;
  sourceUrl: string;
  platform: Platform;
  currentStep?: ProcessingStep;
  createdAt: string;
}

/**
 * Result returned by a completed extraction job.
 */
export interface ExtractionJobResult {
  recipe: Recipe;
  processingTimeMs: number;
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
