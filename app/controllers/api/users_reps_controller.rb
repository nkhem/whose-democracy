class Api::UsersRepsController < ApplicationController
  def create
    @rep = Rep.find_by(official_member_id: params[:officialMemberId])

    begin
      # create rep if it doesn't already exist
      unless @rep
        @rep = Rep.create!(
          official_member_id: params[:officialMemberId]
        )
      end

      @users_rep = UsersRep.
        where("rep_id=?", @rep.id).
        where("user_id=?", current_user.id)
      # create joins association between user and rep
      unless @users_rep
        users_rep = UsersRep.create!(
          user_id: current_user.id,
          rep_id: @rep.id
        )
      end

    rescue ActiveRecord::RecordInvalid => invalid
      render json: invalid.record.errors.full_messages, status: 404
    end

    render :index if @rep && users_rep
  end

  def destroy
  end
end
