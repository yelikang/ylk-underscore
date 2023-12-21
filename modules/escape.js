import createEscaper from './_createEscaper.js';
import escapeMap from './_escapeMap.js';

// Function for escaping strings to HTML interpolation.
/**
 * 将HTML字符串中的特殊字符进行转译替换
 * & => &amp
 */
export default createEscaper(escapeMap);
