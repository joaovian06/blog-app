module Api
  module V1
    class PostSerializer < ActiveModel::Serializer
      attributes :title, :description

      belongs_to :category do
        link(:related) { api_v1_post_category_url(object.id) }
      end
    end
  end
end
