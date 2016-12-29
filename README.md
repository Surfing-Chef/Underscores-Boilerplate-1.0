# Underscores-Boilerplate-1.0
Underscores with Sass, Grunt and Compass workflow

##*INSTALLATION OUTLINE*
## Wordpress
- Create underscores-dev folder and install fresh copy of Wordpress.
- Change timezone, set tagline etc on dashboard.
- Download the latest test data: [https://wpcom-themes.svn.automattic.com/demo/theme-unit-test-data.xml].
- Activate Wordpress Import `Tools > Import > WordPress > Install Now`.
- Once installed, click `Run Imported > Choose File`.
- Navigate to the downloaded theme-unit-test-data.xml and click `Upload file and import`.
- Under "Import Attachments," check the `Download and import file attachments` box and click `submit`.

## Underscores
- Go to [https://underscores.me/] and click `Advanced Options` under Theme Name box.
- Fill out the form, check the `_sassify!` box and click `GENERATE`.
- Copy the contents of the downloaded folder into the themes directory of your fresh wordpress installation.

## Working with the Command Line
The next steps - Git, Node.js, Ruby - require some use of the command line.  
I was intimidated by this at first, but its not really that complex.
There are wordpress plugins for implementing sass in wordpress themes,
but I like to know how and why things are.
Using the command line gives one much more control over their package installs
and updates as well.

If your directory path is extremely long, the following command shortens it to just a chevron.  Use the **cd** command to see where you are 
```
c:\this\is\a\really\long\path\name\that\clutters\up\the\console\makking\things\hard\to\read>

prompt $g

>

>cd
c:\this\is\a\really\long\path\name\that\clutters\up\the\console\makking\things\hard\to\read>
```

## Git and Github
If you dont use Git and Github, then move along. I feel bad for you, not using some sort of version control system, but be that as it may...

Sign in to your Github account.
Create a new repository, but do not create a **README.md** or **.gitignore** at this point. Adding anything except a name at this point confuses the initialization process. 
You can go back and create a **README.md** later, and we will create a **.gitignore** later.
Ensure you have git installed on your computer.  I use Github Desktop which comes with git and git bash. Download
and install from [https://desktop.github.com/]. Be sure to click the **Use Git from the Windows Command Prompt** option.

The following is taken from the pages of Github: [https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/]:

Open a new command line, and navigate into the directory of your underscores theme.  Mine is as follows:
```console
cd C:\wamp64\www\underscores-dev\wp-content\themes\underscoresboilerplate
```

Initialize the local directory as a Git repository:
```console
git init
``` 

Add the files in your new local repository. This stages them for the first commit. Disregard any **_LF will be replaced by CRLF..._** warnings.
```console
git add .
```  

Commit the files that you've staged in your local repository.
```console
git commit -m "initial commit"
``` 

In the Command prompt, add the URL for the remote repository where your local repository will be pushed.  This can be copied from the link within the repository you set up above.  Look for **Clone or download** copy the URL from there.  You might see instructions similar to these as well.
```console
git remote add origin https://github.com/YOUR-username/YOUR-repository-name.git
``` 

Push the changes in your local repository to GitHub.
```console
git push origin master
``` 

## Node.js and Ruby
Check if Node and ruby are installed.  Versions will show if installed.
```console
>npm -v
3.10.9

>ruby -v
ruby 2.3.3p222 (2016-11-21 revision 56859) [x64-mingw32]

```
Install if necessary: [Node.js](https://nodejs.org/en/) and [Ruby](https://rubyinstaller.org/)
