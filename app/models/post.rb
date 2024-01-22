class Post < ApplicationRecord
    validates :title, presence: true, uniqueness: { scope: [:category_id] }
    validates :description, presence: true

    belongs_to :category
    belongs_to :user
end
