# == Schema Information
#
# Table name: reps
#
#  id                 :integer          not null, primary key
#  official_member_id :string           not null
#

class Rep < ApplicationRecord
  validates :official_member_id, presence: true
  has_many :users_reps
  has_many :followers,
    through: :users_reps,
    source: :user
end
