# == Schema Information
#
# Table name: reps
#
#  id                 :integer          not null, primary key
#  official_member_id :integer          not null
#

class Rep < ApplicationRecord
  validates :official_member_id, presence: true

  has_many :followers,
    through: :users_reps,
    source: :user_id
end
