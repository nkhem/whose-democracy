# == Schema Information
#
# Table name: bills
#
#  id        :integer          not null, primary key
#  bill_slug :string           not null
#  congress  :integer          not null
#

class Bill < ApplicationRecord
  validates :bill_slug, presence: true

  has_many :followers,
    through: :users_bills,
    source: :user_id
end
