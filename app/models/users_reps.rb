# == Schema Information
#
# Table name: users_reps
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  senator_id :integer          not null
#

class UsersReps < ApplicationRecord
  validates :user_id, :rep_id, presence: true

  belongs_to :rep
  belongs_to :user
end
