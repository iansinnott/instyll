module.exports = function instyll(opts) {
  const implicit = (opts && opts.implicit == false) ? false : true;

  return function(style) {
    style.include(__dirname);
    if (implicit) {
      style.import('instyll');
    }
  };
};
