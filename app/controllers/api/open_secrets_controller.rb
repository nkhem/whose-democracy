require 'rubygems'
require 'opensecrets'
require 'pp'

class Api::OpenSecretsController < ApplicationController
  def show
    cand = OpenSecrets::Candidate.new(ENV["OPENSECRETS_API_KEY"])
    result = cand.contributors({:cid => params[:crpId]})["response"]["contributors"]["contributor"]

    @open_secrets_data = {
      top_contributors: result
    }
  end
end
