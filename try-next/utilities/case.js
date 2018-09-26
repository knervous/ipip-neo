import ccase from 'change-case'

/** These functions wrap https://github.com/blakeembrey/change-case to save an import */

/**
 * Convert text to title case
 * @param {string} text Text to be converted
 */
export const toTitle = (text) => ccase.title(text)
/**
 * Convert text to lowercase
 * @param {string} text Text to be converted
 */
export const toLower = (text) => ccase.lower(text)
/**
 * Convert text to uppercase  
 * @param {string} text Text to be converted
 */
export const toUpper = (text) => ccase.upper(text)
/**
 * Convert text to sentence case  
 * @param {string} text Text to be converted
 */
export const toSentence = (text) => ccase.sentence(text)