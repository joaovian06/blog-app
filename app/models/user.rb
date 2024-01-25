# frozen_string_literal: true

class User < ActiveRecord::Base
  before_validation :set_provider
  before_validation :set_uid
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  include DeviseTokenAuth::Concerns::User

  has_many :posts

  validates :name, presence: true

  private
    def set_provider
      self[:provider] = "email" if self[:provider].blank?
    end

    def set_uid
      self[:uid] = self[:email] if self[:uid].blank? && self[:email].present?
    end
end
