# == Schema Information
#
# Table name: users_senators
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  senator_id :integer          not null
#

class UsersSenators < ApplicationRecord
  validates :user_id, :senator_id, presence: true

  belongs_to :senator
  belongs_to :user
end
