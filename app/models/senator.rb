# == Schema Information
#
# Table name: senators
#
#  id                 :integer          not null, primary key
#  official_member_id :integer          not null
#

class Senator < ApplicationRecord
  validates :follower, :official_member_id, presence: true

  has_one :follower,
    through: :senator_followings,
    source: :user_id
end
