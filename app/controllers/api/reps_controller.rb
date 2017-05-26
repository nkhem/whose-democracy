class Api::RepsController < ApplicationController
  def index
    @reps = Rep.joins(:user).where('reps.follower = ?', current_user.id)
    render :index
  end

  def show
    render :show
  end

  def destroy
  end
end
