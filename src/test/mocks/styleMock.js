module.exports = new Proxy(
  {},
  {
    get(target, prop) {
      return prop;
    },
  },
);
