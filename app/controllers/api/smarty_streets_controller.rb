require 'smartystreets_ruby_sdk/static_credentials'
require 'smartystreets_ruby_sdk/client_builder'
require 'smartystreets_ruby_sdk/us_street/lookup'

class Api::SmartyStreetsController < ApplicationController
  def show
    auth_id = ENV["SMARTY_AUTH_ID"]
    auth_token = ENV["SMARTY_AUTH_TOKEN"]
    credentials = StaticCredentials.new(auth_id, auth_token)

    client = ClientBuilder.new(credentials).build_us_street_api_client

    lookup = USStreet::Lookup.new
    lookup.street = params[:streetAddress]
    lookup.city = params[:cityName]
    lookup.state = params[:stateAbbrev]

    begin
      client.send_lookup(lookup)
    rescue SmartyException => err
      puts err
      return
    end

    result = lookup.result

    if result.nil?
      puts 'No candidates. The address is not valid.'
      return
    end

    @smarty_street_data = {
      congressional_district: result[0].metadata.congressional_district
    }
  end

end
