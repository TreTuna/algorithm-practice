const bind = (func, context, ...bindArgs) => (...args) => func.call(context, ...bindArgs, ...args);

Function.prototype.bind = function (context, ...bindArgs) {
  return (...args) => this.call(context, ...bindArgs, ...args);
};