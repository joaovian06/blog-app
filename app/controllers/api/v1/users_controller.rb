module Api
  module V1    
    class UsersController < ApplicationController
      before_action :set_user, only: [:show]

      def index
        if params[:email]
          @user = User.find_by(email: params[:email])

          return render json: @user
        end
        
        @users = User.all unless params[:email]

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
  end
end
