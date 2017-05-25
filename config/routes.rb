Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show, :update]
    resource :session, only: [:create, :show, :destroy]
    resource :bill, only: [:create, :index, :show, :destroy]
    resource :rep, only: [:create, :index, :show, :destroy]
  end
end
