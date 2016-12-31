# Underscores-Boilerplate-1.0
> This is an outline for the installation of an Underscores-based Wordpress theme with a Sass, Grunt and Compass development workflow

### Wordpress
- Create underscores-dev folder and install fresh copy of Wordpress.
- Change timezone, set tagline etc on dashboard.
- Download the latest [test data](https://wpcom-themes.svn.automattic.com/demo/theme-unit-test-data.xml). Or use [WP Test](https://github.com/poststatus/wptest). **At time of preparing this document *WP Test* had a path error in the xml causing media install issues.  There is a fix listed in the issues.**
- Activate Wordpress Import `Tools > Import > WordPress > Install Now`.
- Once installed, click `Run Imported > Choose File`.
- Navigate to the downloaded theme-unit-test-data.xml and click `Upload file and import`.
- Under "Import Attachments," check the `Download and import file attachments` box and click `submit`.

### Underscores
- Go to [https://underscores.me/] and click `Advanced Options` under Theme Name box.
- Fill out the form, check the `_sassify!` box and click `GENERATE`.
- Copy the contents of the downloaded folder (I called mine underscores-boilerplate) into the themes directory of your fresh wordpress installation.
- Add a folder called **_dev_** into the Underscores theme folder to organize files for development.  Within this folder create a **_js_** folder.
- Move the **_sass_** folder from the theme root into the new **_dev_** folder.  Also move the files from the **_js_** folder into the new **_dev/js_** folder.

### Working with the Command Line
The next steps - Git, Node.js, Ruby - require some use of the command line.  
I was intimidated by this at first, but its not really that complex.
There are wordpress plugins for implementing sass in wordpress themes,
but I like to know how and why things are.
Using the command line gives much more control over package installs
and updates.

If a directory path is extremely long, the following command shortens it to just a chevron.  The **cd** command will show your current directory:
```
c:\this\is\a\really\long\path\name\that\clutters\up\the\console\making\things\hard\to\read>

prompt $g
>

> cd
c:\this\is\a\really\long\path\name\that\clutters\up\the\console\makking\things\hard\to\read>
```

### Git and Github
- Sign in to your Github account.
- Create a new repository, but do not create a **README.md** or **.gitignore** at this point. Adding anything except the name at this point confuses the next steps. 
- **README.md** and **.gitignore** can be created later.
- Ensure you have **[Git](https://git-scm.com/downloads)** or **[Github Desktop](https://desktop.github.com/)** installed on your computer. Be sure to click the **Use Git from the Windows Command Prompt** option.

_The following is taken from the pages of Github: [https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/]:_

- Open a new command line, and navigate into the directory of your underscores theme.  Mine is as follows:
```console
> cd C:\wamp64\www\underscores-dev\wp-content\themes\underscoresboilerplate
```

- Initialize the local directory as a Git repository:
```console
> git init
``` 

- Add the files in your new local repository. This stages them for the first commit. Disregard any **_LF will be replaced by CRLF..._** warnings:
```console
> git add .
```  

- Commit the files that you've staged in your local repository:
```console
> git commit -m "initial commit"
``` 

- In the Command prompt, add the URL for the remote repository where your local repository will be pushed.  This can be copied from the link within the repository you set up above.  Look for **Clone or download** copy the URL from there.  You might see instructions similar to these as well:
```console
git remote add origin https://github.com/YOUR-username/YOUR-repository-name.git
``` 

- Push the changes in your local repository to GitHub:
```console
git push origin master
``` 

- Create a .gitignore and save it in the root of the theme directory.  I have a Gist maintained here: [https://gist.github.com/Surfing-Chef/6d08c52b6450a7c071b92e9994ecdcf3].

- Git and Github are now ready to track changes.  Use of Github Desktop or Git Bash and the command line to track changes should be part of any development workflow. The full use potential of Git and Github is not within the scope of this document. At the very least, a version control system to track changes should be utilized. _[read more](https://www.g2crowd.com/categories/version-control-systems)_

### Node.js and Ruby
- Check if **Node**, **NPM** and **Ruby** are installed:
```console
> npm -v            ## Versions will show if installed.
3.10.9                           

> ruby -v
ruby 2.3.3p222 (2016-11-21 revision 56859) [x64-mingw32]
```

- Check for updates:
```console
> npm update -g npm          ## node-package-manager

> gem update --system        ## ruby
```

- Download and install [Node.js](https://nodejs.org/en/) and/or [Ruby](https://rubyinstaller.org/) if necessary.  

- Install compass:
```console
> gem install compass
```

### package.json

_[info link](https://docs.npmjs.com/getting-started/using-a-package.json)_

- Create a *_package.json_* using the command line, in the theme's root directory:
```console
theme\root\directory> npm init
```

- Follow prompts to create a *_package.json_*. Content in parentheses is the default value if not changed. The created file can be edited later so do not worry about ommisions or mistakes - open the file in a code editor and adjust as neccessary after created.

- Install the project dependencies in the same directory as the *_package.json_* file. Installation of *_grunt, grunt-contrib-watch, grunt-contrib-compass, grunt-contrib-uglify_* are shown below:
```console
theme\root\directory> npm install --save-dev grunt
```

- Note errors and warnings while installing each dependency and update appropriately to ensure proper execution at project runtime.  This install process will create a new folder called **node_modules** containing necessary package files for the dependencies. The nice thing about installing the packages this way is that *_npm_* will write code to the *_package.json_* file rather than manually writing the code.  

> Previous steps regarding the *_package.json_* file, as well as the following ones about the *_gruntfile.js_*, are outlined in detail on [gruntjs.com](http://gruntjs.com/getting-started).

### grunt.js
-  Install grunt-cli so grunt becomes available in the terminal:

```console
>npm install -g grunt-cli
```

- create a gruntfile.js starting with an uglify task to minify JavaScript files:
```javascript
// Wrapper function
module.exports = function(grunt) {
  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Project configuration
  grunt.initConfig({
    // Tasks to run, comma separated
    uglify: {
      my_target: {
        files: {
          'js/customizer.js': ['dev/js/customizer.js'],
          'js/navigation.js': ['dev/js/navigation.js'],
          'js/skip-link-focus-fix.js': ['dev/js/skip-link-focus-fix.js']
        } // files
      } // my_target
    } // uglify
  }); // grunt.initConfig
}; // module.exports
```

- Run a grunt command to test the new uglify task which should create compressed versions of the javascript files specified in the gruntfile.js:
```console
> grunt uglify
Running "uglify:my_target" (uglify) task
>> 3 files created.
```




 
 -automatic reload info at [https://www.lynda.com/CSS-tutorials/Reloading-your-browser-save/140777/153468-4.html]
 
