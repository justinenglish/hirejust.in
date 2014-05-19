require 'sinatra/base'
require 'erb'

class HireJustin < Sinatra::Base
  set :static, true
  set :public_folder, 'public'

  get '/' do
    send_file File.join(settings.public_folder, 'index.html')
  end
end

HireJustin.run!
