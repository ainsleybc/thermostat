require 'rack/test'

describe 'Thermostat API' do
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  it 'responds succesfully' do
    get '/api/thermostat-data'
    expect(last_response).to be_ok
  end

end
