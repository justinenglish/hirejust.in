require 'sinatra/base'
require 'erb'

class HireJustin < Sinatra::Base
  set :static, true
  set :public_folder, 'public'

  get '/' do
    send_file File.join(settings.public_folder, 'index.html')
  end

  get '/projects/anhsongaming/' do
    send_file File.join(settings.public_folder, 'projects/anhsongaming/index.html')
  end

  get '/projects/slick/' do
    send_file File.join(settings.public_folder, 'projects/slick/index.html')
  end

end

HireJustin.run!
