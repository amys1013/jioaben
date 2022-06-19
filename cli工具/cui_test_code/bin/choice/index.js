import inquirer from "inquirer";
import packageName from './packageName.js'

const choice = await inquirer.prompt([
    packageName(),
    {
      // 选择
      type: "checkbox",
      name: "middleware",
      choices: [
        {
          name: "express",
        },
        {
          name: "router",
        },
      ],
    },
    {
      type: "input",
      name: "packageName1",
      message: "set the package name:",
      // validate(val) {
      //     if (!val) {
      //         return 'temptName'
      //     }
      // }
    },
    /* Pass your questions in here */
]);
  

export default choice
  