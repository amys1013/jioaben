export default  () => { 
    return    {
        type: "input",
        name: "packageName",
        message: "set the package name:",
        default: () => {
          return "test";
        },
      }
}