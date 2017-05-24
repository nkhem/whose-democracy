require 'smartystreets_ruby_sdk/static_credentials'
require 'smartystreets_ruby_sdk/client_builder'
require 'smartystreets_ruby_sdk/us_street/lookup'
require 'byebug'

class USStreetSingleAddressExample
  def run
    auth_id = ENV["SMARTY_AUTH_ID"]
    auth_token = ENV["SMARTY_AUTH_TOKEN"]
    credentials = StaticCredentials.new(self.auth_id, self.auth_token)

    client = ClientBuilder.new(credentials).build_us_street_api_client

    lookup = USStreet::Lookup.new
    lookup.street = '4101 Park Blvd'
    lookup.city = 'Palo Alto'
    lookup.state = 'CA'

    begin
      client.send_lookup(lookup)
    rescue SmartyException => err
      puts err
      return
    end

    result = lookup.result

    if result.nil?
      puts 'No candidates. This means the address is not valid.'
      return
    end

    first_candidate = result[0]

    puts "Address is valid. (There is at least one candidate)\n"
    puts "ZIP Code: #{first_candidate.components.zipcode}"
    puts "County: #{first_candidate.metadata.county_name}"
    puts "Latitude: #{first_candidate.metadata.latitude}"
    puts "Longitude: #{first_candidate.metadata.longitude}"
  end
end

example = USStreetSingleAddressExample.new
example.run
