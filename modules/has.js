import _has from './_has.js';
import toPath from './_toPath.js';

// Shortcut function for checking if an object has a given property directly on
// itself (in other words, not on a prototype). Unlike the internal `has`
// function, this public version can also traverse nested properties.

/**
 * 判断对象是否有某个属性
 * let user = {info:{name:'ylk'}}
 * _.has(use, 'info')
 * => true
 * _.has(user, ['info','name'])
 * =>true
 * 
 * @param {*} obj 
 * @param {*} path 
 * @returns 
 */
export default function has(obj, path) {
  path = toPath(path);
  var length = path.length;
  for (var i = 0; i < length; i++) {
    var key = path[i];
    if (!_has(obj, key)) return false;
    obj = obj[key];
  }
  return !!length;
}
