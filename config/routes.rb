Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for "User", at: "auth",
        controllers: {
          sessions: 'api/v1/devise_token_auth/sessions'
        }

      resources :categories
      resources :users, only: [:index, :show]

      resources :posts do
        resource :category, only: [:show]
        resource :user, only: [:show]
      end
    end
  end
end
