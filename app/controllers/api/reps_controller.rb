class Api::RepsController < ApplicationController
  def index
    @reps = Rep.joins(:user).where('reps.follower = ?', current_user.id)
    render :index
  end

  def create
    @rep = Rep.find_by(official_member_id: params[:officialMemberId])

    begin
      # create rep if it doesn't already exist
      unless @rep
        @rep = Rep.create!(
          official_member_id: params[:officialMemberId]
        )
      end

      # create joins association between user and rep
      users_rep = UsersRep.create!(
        user_id: current_user.id,
        rep_id: @rep.id
      )
    rescue ActiveRecord::RecordInvalid => invalid
      render json: invalid.record.errors.full_messages, status: 404
    end

    render :index if @rep && users_rep
  end

  def show
    render :show
  end

  def destroy
  end
end
