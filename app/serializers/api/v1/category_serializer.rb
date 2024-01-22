module Api
  module V1
    class CategorySerializer < ActiveModel::Serializer
      attributes :id, :title, :description
    end
  end
end
