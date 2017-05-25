# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  street_address  :string           not null
#  city            :string           not null
#  state_abbrev    :string           not null
#  zip_code        :integer          not null
#  f_name          :string           not null
#  l_name          :string           not null
#  prefix          :string           not null
#  email           :string           not null
#  phone_number    :string           not null
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  #columns necessary for finding reps
  validates :street_address, :city, :state_abbrev, :zip_code, presence: true

  #columns necessary for filling out contact forms
  validates :f_name, :l_name, :prefix, :email, :phone_number, presence: true
  validates :email, uniqueness: :true, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i }

  #columns necessary for account creation
  validates :phone_number, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    reset_session_token! unless self.session_token
  end

end
