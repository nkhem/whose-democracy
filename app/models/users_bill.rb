# == Schema Information
#
# Table name: users_bills
#
#  id      :integer          not null, primary key
#  user_id :integer          not null
#  bill_id :integer          not null
#

class UsersBill < ApplicationRecord
  validates :user_id, :bill_id, presence: true

  belongs_to :bill
  belongs_to :user
end
