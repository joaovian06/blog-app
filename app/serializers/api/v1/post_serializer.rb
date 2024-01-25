module Api
  module V1
    class PostSerializer < ActiveModel::Serializer
      attributes :title, :description, :posted_at

      belongs_to :category do
        link(:related) { api_v1_post_category_url(object.id) }
      end

      belongs_to :user do
        link(:related) { api_v1_post_user_url(object.id) }
      end

      def posted_at
        I18n.l(object.created_at.to_date)
      end
    end
  end
end
