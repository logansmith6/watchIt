Rails.application.routes.draw do
  resources :posts
  resources :users, only: [:create, :show, :index]
end
