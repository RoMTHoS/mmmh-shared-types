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
  | 'scraping'
  | 'parsing'
  | 'structuring'
  | 'validating'
  | 'complete'
  // Photo-specific steps
  | 'processing_image'
  | 'extracting_text';

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
  /**
   * Optional pre-fetched HTML content for website imports.
   * When provided, the job processor uses /scrape/parse instead of /scrape
   * to bypass bot detection on sites that block server-side requests.
   */
  html?: string;
  /**
   * Path to uploaded photo file for photo imports.
   * The file is stored temporarily and should be deleted after processing.
   */
  photoPath?: string;
  /**
   * Paths to multiple uploaded photo files for batch photo imports.
   * Each file is processed sequentially and OCR text is concatenated.
   */
  photoPaths?: string[];
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
