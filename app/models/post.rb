class Post < ApplicationRecord
    validates :title, presence: true, uniqueness: { scope: [:user_id] }
    validates :description, presence: true

    belongs_to :category
    belongs_to :user
end
