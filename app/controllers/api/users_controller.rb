class Api::UsersController < ApplicationController
  def create
    begin
      @user = User.new(user_params)
    rescue ActiveRecord::RecordInvalid => invalid
      render json: invalid.record.errors.full_messages, status: 404
    end

    if @user && @user.save
      log_in(@user)
      render "api/users/show"
    end
  end

  def show
    if current_user
      @user = User.find_by(id: current_user.id)
      render :show
    end
  end

  def update
  end

  private

  def user_params
    params.require(:user).permit(
      :f_name,
      :l_name,
      :email,
      :password
    )
  end
end
