Rails.application.routes.draw do
  root "pages#index"

  namespace :api do
    resources :cards, only: [:index]
    resources :columns, only: [:index]
  end
end
