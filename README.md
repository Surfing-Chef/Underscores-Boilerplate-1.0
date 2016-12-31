# Underscores-Boilerplate-1.0
This is an outline for the installation of an Underscores-based Wordpress theme with a Sass, Grunt and Compass development workflow

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
- Copy the contents of the downloaded folder into the themes directory of your fresh wordpress installation.
- Add a folder called _dev_ for development files, files not meant for use on the remote site.  Within this folder create two additional folders, _css_ and _js_.
### Working with the Command Line
The next steps - Git, Node.js, Ruby - require some use of the command line.  
I was intimidated by this at first, but its not really that complex.
There are wordpress plugins for implementing sass in wordpress themes,
but I like to know how and why things are.
Using the command line gives one much more control over their package installs
and updates as well.

If your directory path is extremely long, the following command shortens it to just a chevron.  Use the **cd** command to see where you are 
```
c:\this\is\a\really\long\path\name\that\clutters\up\the\console\making\things\hard\to\read>

prompt $g
>

> cd
c:\this\is\a\really\long\path\name\that\clutters\up\the\console\makking\things\hard\to\read>
```

### Git and Github
If you dont use Git and Github, then move along. I feel bad for you, not using some sort of version control system, but be that as it may...

Sign in to your Github account.
Create a new repository, but do not create a **README.md** or **.gitignore** at this point. Adding anything except a name at this point confuses the initialization process. 
You can go back and create a **README.md** later, and we will create a **.gitignore** later.
Ensure you have git installed on your computer.  I use Github Desktop which comes with git and git bash. Download
and install from [https://desktop.github.com/]. Be sure to click the **Use Git from the Windows Command Prompt** option.

The following is taken from the pages of Github: [https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/]:

Open a new command line, and navigate into the directory of your underscores theme.  Mine is as follows:
```console
> cd C:\wamp64\www\underscores-dev\wp-content\themes\underscoresboilerplate
```

Initialize the local directory as a Git repository:
```console
> git init
``` 

Add the files in your new local repository. This stages them for the first commit. Disregard any **_LF will be replaced by CRLF..._** warnings.
```console
> git add .
```  

Commit the files that you've staged in your local repository.
```console
> git commit -m "initial commit"
``` 

In the Command prompt, add the URL for the remote repository where your local repository will be pushed.  This can be copied from the link within the repository you set up above.  Look for **Clone or download** copy the URL from there.  You might see instructions similar to these as well.
```console
git remote add origin https://github.com/YOUR-username/YOUR-repository-name.git
``` 

Push the changes in your local repository to GitHub.
```console
git push origin master
``` 

Create a .gitignore and save it in the root of the theme directory.  I have a Gist maintained here: [https://gist.github.com/Surfing-Chef/6d08c52b6450a7c071b92e9994ecdcf3].

Git and Github is now ready to track changes.  I use Github Desktop, however using the command line to commit and push changes might be part of a workflow you choose to use. The use and scope of Git is not within the scope of this document. I definitely recommend using Git or some form of version control.  I'll leave it at that.

### Node.js and Ruby
Check if Node and ruby are installed.
```console
> npm -v            ## Versions will show if installed.
3.10.9                           

> ruby -v
ruby 2.3.3p222 (2016-11-21 revision 56859) [x64-mingw32]
```

Update checks:
```console
> npm update -g npm          ## node-package-manager

> gem update --system        ## ruby
```

Install if necessary: [Node.js](https://nodejs.org/en/) and [Ruby](https://rubyinstaller.org/)

Install compass
```console
> gem install compass
```

### package.json

_[info link](https://docs.npmjs.com/getting-started/using-a-package.json)_
My preferred method of creating a *_package.json_* is on the command line, in the theme's root directory:
```console
theme\root\directory> npm init
```
Follow the prompts to create a *_package.json_*. The content in parentheses will be put into the file if no other value is supplied. The created file can be edited later so do not worry about ommisions or mistakes.  Simply open the file in a code editor and adjust as neccessary.

The next step is to install the project dependencies in the same directory as the *_package.json_*. Here I will install *_grunt, grunt-contrib-watch, grunt-contrib-compass, grunt-contrib-uglify_* ... using the command line. Be sure you are in the same directory as the json file.
```console
theme\root\directory> npm install --save-dev grunt
```
I usually note errors and warnings while installing each depenent and will update appropriately to ensure proper execution at project runtime.  This install process will create a new folder called **node_modules** which contains the necessary package file for the dependents. The nice thing about installing the packages this way is that *_npm_* will write code to the *_package.json_* file rather than manually writing the code.  The alternative is adding the dependents manually to the *_package.json_* and installing them all at once. Note that this latter method may increase the chances of coding error.
```console
theme\root\directory> npm install
```
The previous steps regarding the *_package.json_* file, as well as the following ones about the *_gruntfile.js_*, are outlined in detail on [gruntjs.com](http://gruntjs.com/getting-started).

### grunt.js

_[info link](http://gruntjs.com/getting-started)_
 -  Install grunt-cli so grunt becomes available in the terminal

```console
>npm install -g grunt-cli
```

- build grunt.json specific to your project.  The following starts with an uglify task;
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
I moved the javascript files from js directory installed in the Underscores theme directory to the new _dev/js_ directory, so the deployed scripts are smaller after uglifying them.


 
 -automatic reload info at [https://www.lynda.com/CSS-tutorials/Reloading-your-browser-save/140777/153468-4.html]
 
