function hasProperty(arr, pro) {
  return arr.includes(pro);
}

const inputConfig = (choice) => {
  return {
    packageName: choice.packageName,
    middleware: {
      express: hasProperty(choice.middleware, "express"),
      router: hasProperty(choice.middleware, "router"),
    },
  };
};

export default inputConfig;
