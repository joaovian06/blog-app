Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :categories

      resources :posts do
        resource :category, only: [:show]
      end
    end
  end
end
