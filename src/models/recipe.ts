/**
 * Core recipe domain models.
 * These types define the recipe data structure used throughout the application.
 */

export type Platform = 'instagram' | 'tiktok' | 'youtube';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Temperature {
  value: number;
  unit: 'F' | 'C';
}

export interface Ingredient {
  id: string;
  name: string;
  quantity?: number;
  unit?: string;
  notes?: string;
  isOptional: boolean;
}

export interface Instruction {
  id: string;
  stepNumber: number;
  text: string;
  duration?: number;
  temperature?: Temperature;
}

export interface Recipe {
  id: string;
  title: string;
  description?: string;
  sourceUrl: string;
  sourcePlatform: Platform;
  thumbnailUrl?: string;

  ingredients: Ingredient[];
  instructions: Instruction[];

  prepTime?: number;
  cookTime?: number;
  servings?: number;
  difficulty?: Difficulty;
  cuisine?: string;
  tags: string[];

  calories?: number;
  estimatedCost?: string;

  aiConfidence: number;
  rawTranscript?: string;

  isFavorite: boolean;
  notes?: string;
  rating?: number;

  createdAt: string;
  updatedAt: string;
  cookedAt?: string;
}
