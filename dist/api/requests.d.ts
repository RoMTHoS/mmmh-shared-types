/**
 * API request models.
 */
export interface ExtractRecipeRequest {
    url: string;
}
export interface PaginationParams {
    page?: number;
    pageSize?: number;
}
export interface RecipeSearchParams extends PaginationParams {
    query?: string;
    platform?: string;
    tags?: string[];
    isFavorite?: boolean;
}
//# sourceMappingURL=requests.d.ts.map