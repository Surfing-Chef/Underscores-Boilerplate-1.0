# DEVELOPMENT CONFIGURATION
require 'susy'
require 'breakpoint'
# Require any additional compass plugins here.

# COMPASS CONFIGURATION
# Set this to the root of your project when deployed:
project_type = :stand_alone
http_path = "/"
css_dir = "dev/css"
sass_dir = "dev/sass"
javascripts_dir = "dev/js"
fonts_dir = "dev/fonts"
images_dir = "dev/images"
line_comments = true
preferred_syntax = :scss
output_style = :expanded
relative_assets = true

# Calls config_prod.rb to create a compressed production version
on_stylesheet_saved do
  `compass compile -c config_prod.rb --force`
end
