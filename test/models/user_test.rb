# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  f_name          :string           not null
#  l_name          :string           not null
#  email           :string           not null
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
