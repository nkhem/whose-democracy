# == Schema Information
#
# Table name: users_house_reps
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  house_rep_id :integer          not null
#

class UsersHouseReps < ApplicationRecord
  validates :user_id, :house_rep_id, presence: true

  belongs_to :house_rep
  belongs_to :user
end
