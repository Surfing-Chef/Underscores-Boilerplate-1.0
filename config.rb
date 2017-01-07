# Development config

require 'susy'
require 'compass/import-once/activate'
# Require any additional compass plugins here.


# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "_/stylesheets"
sass_dir = "_/sass"
#javascripts_dir = "_/javascripts"
#images_dir = "_/images"

output_style = :expanded
line_comments = true

project_type = :stand_alone
preferred_syntax = :scss
relative_assets = true

# Calls config_prod.rb to create a compressed production version
on_stylesheet_saved do
  `compass compile -c config_prod.rb --force`
end
