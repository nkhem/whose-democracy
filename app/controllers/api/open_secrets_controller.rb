require 'rubygems'
require 'opensecrets'
require 'pp'

class Api::OpenSecretsController < ApplicationController
  def show
    cand = OpenSecrets::Candidate.new(ENV["OPENSECRETS_API_KEY"])
    pp cand.summary({:cid => params[:crpId]})["response"]
    debugger

    # @open_secrets_data = {
    #   top_contributors: response
    # }
  end
end
