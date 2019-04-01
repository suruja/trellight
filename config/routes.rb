Rails.application.routes.draw do
  root "pages#index"

  namespace :api do
    resources :cards, only: [:index, :update]
    resources :columns, only: [:index]
  end
end
