/**
 * Given a real theme, creates a mock theme object where the values are
 * just strings representing the theme value. These mock objects are
 * intended to be used in unit tests so that changes to the theme values
 * do not break unit tests.
 *
 * Example input:
 * {
 *   borders: {
 *     useRoundedCorners: true,
 *     radius100: '2px',
 *     radius200: '4px',
 *     radius300: '8px',
 *   },
 *   animation: {
 *     timing100: '0.25s',
 *     timing400: '0.4s',
 *   }
 * }
 *
 * Example output:
 * {
 *   borders: {
 *     useRoundedCorners: '$theme.borders.useRoundedCorners',
 *     radius100: '$theme.borders.radius100',
 *     radius200: '$theme.borders.radius200',
 *     radius300: '$theme.borders.radius300',
 *   },
 *   animation: {
 *     timing100: '$theme.animation.timing100',
 *     timing400: '$theme.animation.timing400',
 *   }
 * }
 */
export default function createMockTheme(base: {}, prefix?: string): {};
