require 'rack/test'

describe 'Thermostat API' do
  include Rack::Test::Methods

  def app
    ThermostatData
  end

  it 'responds succesfully' do
    get '/api/thermostat-data'
    expect(last_response).to be_ok
    expect(last_response.body).to eq('hello')
  end

end
