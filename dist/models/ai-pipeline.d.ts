/**
 * AI Pipeline service interfaces and types.
 * These define the contracts for transcription and recipe structuring services.
 */
import type { Ingredient, Instruction, Platform, Difficulty } from './recipe.js';
/**
 * A timestamped segment of transcribed text.
 */
export interface TranscriptSegment {
    /** Start time in seconds */
    start: number;
    /** End time in seconds */
    end: number;
    /** Transcribed text for this segment */
    text: string;
    /** Confidence score (0-1) for this segment */
    confidence: number;
}
/**
 * Result of audio transcription.
 */
export interface TranscriptionResult {
    /** Full transcribed text */
    text: string;
    /** Timestamped segments */
    segments: TranscriptSegment[];
    /** Detected language code (e.g., 'en', 'fr') */
    language: string;
    /** Overall confidence score (0-1) */
    confidence: number;
}
/**
 * Transcription service interface.
 * Implementations can use local (faster-whisper) or cloud (OpenAI) providers.
 */
export interface ITranscriptionService {
    /**
     * Transcribe audio file to text with timestamped segments.
     * @param audioPath - Path to the audio file
     * @returns Transcription result with text, segments, language, and confidence
     */
    transcribe(audioPath: string): Promise<TranscriptionResult>;
}
/**
 * Structured recipe extracted from transcription.
 * This is a subset of the full Recipe type, containing only AI-extracted fields.
 */
export interface StructuredRecipe {
    /** Recipe title extracted from content */
    title: string;
    /** Optional description */
    description?: string;
    /** Original source URL */
    sourceUrl: string;
    /** Source platform */
    sourcePlatform: Platform;
    /** Extracted ingredients list */
    ingredients: Ingredient[];
    /** Extracted cooking instructions */
    instructions: Instruction[];
    /** Estimated prep time in minutes */
    prepTime?: number;
    /** Estimated cook time in minutes */
    cookTime?: number;
    /** Number of servings */
    servings?: number;
    /** Difficulty level */
    difficulty?: Difficulty;
    /** Cuisine type */
    cuisine?: string;
    /** Recipe tags */
    tags: string[];
    /** AI confidence score (0-1) for the overall extraction */
    aiConfidence: number;
    /** Original transcription text */
    rawTranscript: string;
}
/**
 * Recipe structuring service interface.
 * Implementations can use local (Ollama) or cloud (OpenAI, etc.) LLM providers.
 */
export interface IRecipeStructuringService {
    /**
     * Structure a transcription into a recipe format.
     * @param transcription - The transcription result to structure
     * @returns Structured recipe data
     */
    structure(transcription: TranscriptionResult): Promise<StructuredRecipe>;
}
/**
 * Combined AI pipeline service interface.
 * Orchestrates transcription and structuring services.
 */
export interface IAIPipelineService {
    /**
     * Transcribe audio file to text.
     * @param audioPath - Path to the audio file
     * @returns Transcription result
     */
    transcribe(audioPath: string): Promise<TranscriptionResult>;
    /**
     * Structure a transcription into a recipe.
     * @param transcription - The transcription result to structure
     * @returns Structured recipe data
     */
    structureRecipe(transcription: TranscriptionResult): Promise<StructuredRecipe>;
}
//# sourceMappingURL=ai-pipeline.d.ts.map