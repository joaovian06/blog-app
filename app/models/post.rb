class Post < ApplicationRecord
    validates :title, presence: true, uniqueness: { scope: [:user_id] }
    validates :description, presence: true

    belongs_to :category
    belongs_to :user

    after_create :stream_post


    private


        def stream_post
            message_data = {
                user: self.user,
                post_title: self.title,
            }


            ActionCable.server.broadcast "AlertsChannel#{self.user_id}", message_data
        end
end
