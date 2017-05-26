# == Schema Information
#
# Table name: reps
#
#  id                 :integer          not null, primary key
#  official_member_id :string           not null
#

class Rep < ApplicationRecord
  validates :official_member_id, presence: true

  has_many :followers,
    through: :users_rep,
    source: :user_id
end
