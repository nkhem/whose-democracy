# == Schema Information
#
# Table name: house_reps
#
#  id                 :integer          not null, primary key
#  official_member_id :integer          not null
#

class HouseRep < ApplicationRecord
  validates :followers, :official_member_id, presence: true

  has_many :followers,
    through: :users_house_reps,
    source: :user_id
end
