module Api
  module V1
    class PostSerializer < ActiveModel::Serializer
      attributes :title, :description
    end
  end
end
