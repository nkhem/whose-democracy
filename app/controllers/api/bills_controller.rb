class Api::BillsController < ApplicationController
  def index
    render :index
  end

  def create
    render :show
  end

  def show
    render :show
  end

  def destroy
  end
end
