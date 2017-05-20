# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  street_address  :string           not null
#  city            :string           not null
#  state           :string           not null
#  zip_code        :integer          not null
#  f_name          :string           not null
#  l_name          :string           not null
#  prefix          :string           not null
#  email           :string           not null
#  phone_number    :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
