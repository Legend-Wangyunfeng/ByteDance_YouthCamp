const inquirer = require('inquirer')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs-extra')
const { spawn } = require('child_process')
// import ora from 'ora'

const promptList = [{
  type: 'input',
  message: 'npm install???',
  name: 'command',
  default: 'false'
}]

initNewCity = (options) => {
  console.log(options)
  fs.copy('/home/dx/Ali/02/engineering/bin/tpl/basic-smt-web', './basic-smt-web', )
  .then(data => {
    console.log(chalk.green('success'))
  })
  .then(data => {
    return inquirer.prompt(promptList)
    
  })
  .then(answers => {
    if(answers.command === 'false'){
      return
    }
    else{
      const command = spawn('npm', ['install'],{cwd:'./basic-smt-web'})
      if (options.LOG) {
        command.stdout.on('data', (data) => {
          console.log(`stdout: ${data}`);
        });
        
        command.stderr.on('data', (data) => {
          console.error(`stderr: ${data}`);
        });
      }
    }
  })
  .catch(err => {
    console.log(chalk.red(err))
  })
  
  
}

module.exports = initNewCity