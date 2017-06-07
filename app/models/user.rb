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

class User < ApplicationRecord
  validates :f_name, :l_name, :email, :session_token, presence: true
  validates :email, uniqueness: :true, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i }
  validates :password, length: { minimum: 8, allow_nil: true }

  has_many :users_reps
  has_many :users_bills

  has_many :bill_followings,
    through: :users_bills,
    source: :bill

  has_many :rep_followings,
    through: :users_reps,
    source: :rep

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
