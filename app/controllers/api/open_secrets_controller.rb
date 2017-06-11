require 'rubygems'
require 'opensecrets'
require 'pp'

class Api::OpenSecretsController < ApplicationController

# Note, you can also provide your API key in an environment variable for security and convenience.
#   export OPENSECRETS_API_KEY=YOUR_API_KEY
# If you provide your key this way you do not have to provide a key in the OpenSecrets::*.new constructors.
# A key provided to the constructor overrides any environment variable that is set.

member = OpenSecrets::Member.new(ENV["OPENSECRETS_API_KEY"])
pp member.pfd({:cid => 'N00007360', :year => '2008'})["response"]

cand = OpenSecrets::Candidate.new('YOUR OPEN SECRETS API KEY')
pp cand.summary({:cid => 'N00007360'})["response"]

com = OpenSecrets::Committee.new('YOUR OPEN SECRETS API KEY')
pp com.by_industry({:cmte => 'HARM', :congno => '110', :indus => 'F10'})["response"]
end
