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

### Node.js, NPM, Ruby, Compass and Grunt
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

-  Install grunt-cli so grunt becomes available in the terminal:

```console
>npm install -g grunt-cli
```

### package.json

_[info link](https://docs.npmjs.com/getting-started/using-a-package.json)_

- Create a *_package.json_* using the command line, in the theme's root directory:
```console
theme\root\directory> npm init
```

- Follow prompts to create a *_package.json_*. Content in parentheses is the default value if not changed. The created file can be edited later so do not worry about ommisions or mistakes - open the file in a code editor and adjust as neccessary after created.

- Install plugins into the same directory as the *_package.json_* file. Installation of *_grunt, grunt-contrib-watch, grunt-contrib-compass, grunt-contrib-uglify_* are shown below:
```console
theme\root\directory> npm install --save-dev grunt
```

- Note errors and warnings while installing each plugin and its dependencies, and update appropriately to ensure proper execution at project runtime.  This install process will create a new folder called **node_modules** containing necessary package files for the all plugins' dependencies. The nice thing about installing the plugins this way is that *_npm_* will write code to the *_package.json_* file rather than having to manually input code.  

> Previous steps regarding the *_package.json_* file, as well as the following ones about the *_gruntfile.js_*, are outlined in detail on [gruntjs.com](http://gruntjs.com/getting-started).

### grunt.js

- create a gruntfile.js starting with an uglify task to minify JavaScript files:
```javascript
// Wrapper function
module.exports = function(grunt) {
  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Project configuration
  grunt.initConfig({
    // Create comma, separated, tasks
    uglify: {  // task
      my_target: { // target
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

### Automation
#### [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)

- load the watch plugin, and create a watch task:
```javascript
module.exports = function(grunt) {
  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');  // load watch package
  ...
    }, // uglify                
    watch: {                    // comma seperated, new watch task object,
      files: ['dev/js/*.js'],
      tasks: ['uglify']
    } // watch
  }); // grunt.initConfig
}; // module.exports

```

- Run grunt watch in terminal. It waits to detect changes:
```console
>grunt watch
Running "watch" task
Waiting...
```

- Upon detecting changes in the specified file(s), the *_watch_* task will execute the attached task, *_uglify_*
```console
>> File "dev\js\script.js" changed.
Running "uglify:my_target" (uglify) task
>> 3 files created.

Done.
Completed in 1.462s at Sat Dec 31 2016 15:15:54 GMT-0800 (Pacific Standard Time) - Waiting...
```

- *_`<Ctrl>-C`_* pressed twice  will cancel the task:
```console
^CTerminate batch job (Y/N)?
^C
>
```

#### default task(s)
```javascript
...
    } // watch      
  }); // grunt.initConfig

  // Register default task(s)
  grunt.registerTask('default', 'watch');

}; // module.exports
```

- A registered default task or list of tasks run when the grunt command is entered in the terminal:
```console
>grunt
Running "watch" task
Waiting...
```

#### reloading a browser on save
- Create an *_options_* object and a *_scripts_* object in the *_watch_* task.  Move the *_files_* and *_tasks_* objects into the new *_scripts_* object.
```javascript
...
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['dev/js/*.js'],
        tasks: ['uglify']
      }
    } // watch
```

- Open footer.php from the theme's root directory, and add the following code just before the closing body tag:
```html
...
  <script src="http://localhost:35729/livereload.js"></script>
 </body>
</html>   
```

- After restarting the terminal and running *_grunt_* command, load the Underscores Wordpress site into a browser, or refresh it if loaded. Add the following to the end of *_header.php_*, after the `div.site-content` and save your changes:
```html
...
	<div id="content" class="site-content">
	<h1>TEST TEXT to delete after testing</h1><!-- added new , delete after testing -->
```

- The browser should have automatically updated itself

### Compass Configuration File(s)
#### [Compass Core Framework](http://compass-style.org/)

- Create a new file in the theme root directory called *_config.rb_*
- Add the following lines of code and save it:
```ruby
# Compass Configuration Properties
css_dir = 'dev/css'
sass_dir = 'dev/sass'
javascript_dir = 'dev/js'
output_style = :nested
```

- Back in the *_grunt.js_* file, make the following additions:
- load the *_grunt-contrib-compass_* plugin
```javascript
...
  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

```

- add a *_compass_* task to the following lines of code in *_grunt.js_*: 
```javascript
...
    }, // uglify

    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } //options
      } //dev
    }, // compass
...
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['dev/js/*.js'],
        tasks: ['uglify']
      }, // scripts
      sass: {
        files: ['dev/sass/*.scss'],
        tasks: ['compass:dev']
      }, // sass
```

- add instructions into the *_watch_* task to execute the *_compass_* task
```javascript
...
    watch: {
...
      }, // scripts
      sass: {
        files: ['dev/sass/*.scss'],
        tasks: ['compass:dev']
      }, // sass
 ...
 ```
 
 - Now when any changes are made in the development SCSS files, a new development CSS file is made, including comments indicating the SCSS sources.  This development CSS can then be minified with other plugins and saved to the root directory resulting in smaller file size and faster loading.
 
-  Alternatively, changing the *_css_dir_* and *_output_style_* properties in the *_config.rb_* will eliminate the extra steps above and extraneous processing. :
```ruby
css_dir = '.'
sass_dir = 'dev/sass'
javascript_dir = 'dev/js'
output_style = :nested
```
 
### Setup Susy
- Install Susy for responsive web design from the terminal
```console
> gem install susy
```

- And modify the *_config.rb_* file to load susy into the project for use.  Add one line at the very top of the file:
```ruby
require 'susy'
```

- To make Susy available when developing scss, add an *_imports.scss* file to the dev/sass folder root with the following lines:
```css
...
// Imported modules
// Compass
@import 'compass';
@import 'susy';
```

- And then modifiy the style.scss to import *_imports.scss*, adding new a new section to the table of contents as well:
```css
/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Utilities
# Normalize
# Typography
# Elements
# Forms
# Navigation
	## Links
	## Menus
# Accessibility
# Alignments
# Clearings
# Widgets
# Content
	## Posts and pages
	## Comments
# Infinite scroll
# Media
	## Captions
	## Galleries

/*--------------------------------------------------------------
# Utilities
--------------------------------------------------------------*/
@import "_imports";
@import "variables-site/variables-site";
@import "mixins/mixins-master";
```

This allows the the core modules of compass - CSS3, Typography and Functions - to be imported and used in a project.  The option to  import specific parts of the modules is also available. Find more details about the Compass Core Framework [here](http://compass-style.org/reference/compass/). 
