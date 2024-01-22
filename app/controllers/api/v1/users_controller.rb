class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show]

  def index
    @users = User.all

    render json: @users
  end

  def show
    render json: @user
  end

    private
      def set_user
        if params[:post_id]
          @user = Post.find_by(id: params[:post_id]).user
          return @user
        end

        @user = User.find_by(id: params[:id])
      end
end
