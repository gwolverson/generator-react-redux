const Generator = require('yeoman-generator')
const path = require('path')
const to = require('to-case')
const yosay = require('yosay')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  prompting() {
      this.log(
        yosay(
          "'This generator adds redux, " +
            'react-router and enzyme ' +
            'to the most common ' +
            'React starter Create React App'
        )
      )
      return this.prompt([
        {
          name: 'projectName',
          type: 'input',
          message: 'Project name:',
          default: path.basename(this.destinationPath()),
        },
        {
          name: 'projectDescription',
          type: 'input',
          message: 'Project description:',
        },
        {
          name: 'projectVersion',
          type: 'input',
          message: 'Project version:',
          default: '0.1.0',
        },
        {
          name: 'authorName',
          type: 'input',
          message: 'Author name:',
          store: true,
        },
      ]).then(answers => {
        this.projectName = answers.projectName
        this.projectDescription = answers.projectDescription
        this.projectVersion = answers.projectVersion
        this.authorName = answers.authorName
      })
  }
  
  writing() {
      this.fs.copyTpl(this.templatePath('public/index.html'), this.destinationPath('public/index.html'), {
        projectName: to.title(this.projectName),
      })
      this.fs.copyTpl(this.templatePath('public/manifest.json'), this.destinationPath('public/manifest.json'), {
        projectName: to.title(this.projectName),
      })
      this.fs.copy(this.templatePath('public/favicon.ico'), this.destinationPath('public/favicon.ico'))

      this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), {
        projectName: to.title(this.projectName),
      })

      this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'))

      this.fs.copy(this.templatePath('src'), this.destinationPath('src'))

      this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), {
        projectName: this.projectName,
        projectDescription: this.projectDescription,
        projectVersion: this.projectVersion,
        authorName: this.authorName,
      })
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: true,
    })
  }
}
