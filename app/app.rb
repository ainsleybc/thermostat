# require 'data_mapper'
require 'sinatra'
require 'sinatra/base'

class ThermostatData < Sinatra::Base
  get '/api/thermostat-data' do
    'hello'
  end
end
