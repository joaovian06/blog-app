Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  
  namespace :api do
    namespace :v1 do
      resources :categories
      resources :users, only: [:index, :show]

      resources :posts do
        resource :category, only: [:show]
        resource :user, only: [:show]
      end
    end
  end
end
