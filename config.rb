# DEVELOPMENT CONFIGURATION
require 'susy'
require 'brekpoint'
# Require any additional compass plugins here.

# COMPASS CONFIGURATION
# Set this to the root of your project when deployed:
project_type = :stand_alone
http_path = "/"
css_dir = "_/css"
sass_dir = "_/sass"
javascripts_dir = "_/js"
fonts_dir = "_/fonts"
images_dir = "_/images"
line_comments = true
preferred_syntax = :scss
output_style = :expanded
relative_assets = true

# Calls config_prod.rb to create a compressed production version
on_stylesheet_saved do
  `compass compile -c config_prod.rb --force`
end
