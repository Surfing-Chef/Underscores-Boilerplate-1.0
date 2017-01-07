## Development config

require 'susy'
require 'compass/import-once/activate'
# Require any additional compass plugins here.


# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "_/stylesheets"
sass_dir = "_/sass"
#images_dir = "_/images"
##javascripts_dir = "_/javascripts"

# You can select your preferred output style here (can be overridden via the command line):
output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = true

# Calls config_prod.rb to create a compressed production version
on_stylesheet_saved do
  `compass compile -c config_prod.rb --force`
end
