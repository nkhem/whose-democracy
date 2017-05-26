# == Schema Information
#
# Table name: users_reps
#
#  id      :integer          not null, primary key
#  user_id :integer          not null
#  rep_id  :integer          not null
#

class UsersRep < ApplicationRecord
  validates :user_id, :rep_id, presence: true

  belongs_to :rep
  belongs_to :user
end
