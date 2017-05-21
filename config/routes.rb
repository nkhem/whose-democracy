Rails.application.routes.draw do
  namespace :api do
    get 'sessions/create'
  end

  namespace :api do
    get 'sessions/show'
  end

  namespace :api do
    get 'sessions/destroy'
  end

  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show, :update]
    resource :session, only: [:create, :show, :destroy]
  end
end
