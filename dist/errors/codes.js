"use strict";
/**
 * Error codes used throughout the application.
 * All errors should use these codes for consistent error handling.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    // Generic errors
    ErrorCode["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
    ErrorCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    ErrorCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
    // Authentication/Authorization
    ErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    ErrorCode["FORBIDDEN"] = "FORBIDDEN";
    // Resource errors
    ErrorCode["NOT_FOUND"] = "NOT_FOUND";
    ErrorCode["ALREADY_EXISTS"] = "ALREADY_EXISTS";
    // Platform errors
    ErrorCode["UNSUPPORTED_PLATFORM"] = "UNSUPPORTED_PLATFORM";
    ErrorCode["INVALID_URL"] = "INVALID_URL";
    // Photo/Image errors
    ErrorCode["INVALID_FILE_TYPE"] = "INVALID_FILE_TYPE";
    ErrorCode["FILE_TOO_LARGE"] = "FILE_TOO_LARGE";
    ErrorCode["IMAGE_TOO_SMALL"] = "IMAGE_TOO_SMALL";
    ErrorCode["INVALID_IMAGE"] = "INVALID_IMAGE";
    // Download errors
    ErrorCode["DOWNLOAD_FAILED"] = "DOWNLOAD_FAILED";
    ErrorCode["DOWNLOAD_TIMEOUT"] = "DOWNLOAD_TIMEOUT";
    ErrorCode["CONTENT_UNAVAILABLE"] = "CONTENT_UNAVAILABLE";
    // Transcription errors
    ErrorCode["TRANSCRIPTION_FAILED"] = "TRANSCRIPTION_FAILED";
    ErrorCode["AUDIO_TOO_LONG"] = "AUDIO_TOO_LONG";
    ErrorCode["AUDIO_TOO_SHORT"] = "AUDIO_TOO_SHORT";
    ErrorCode["EMPTY_TRANSCRIPT"] = "EMPTY_TRANSCRIPT";
    // Structuring errors
    ErrorCode["STRUCTURING_FAILED"] = "STRUCTURING_FAILED";
    ErrorCode["NO_RECIPE_DETECTED"] = "NO_RECIPE_DETECTED";
    ErrorCode["LOW_CONFIDENCE"] = "LOW_CONFIDENCE";
    // Rate limiting
    ErrorCode["RATE_LIMITED"] = "RATE_LIMITED";
    ErrorCode["QUOTA_EXCEEDED"] = "QUOTA_EXCEEDED";
    // Job errors
    ErrorCode["JOB_NOT_FOUND"] = "JOB_NOT_FOUND";
    ErrorCode["JOB_ALREADY_COMPLETED"] = "JOB_ALREADY_COMPLETED";
    ErrorCode["JOB_CANCELLED"] = "JOB_CANCELLED";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
//# sourceMappingURL=codes.js.map