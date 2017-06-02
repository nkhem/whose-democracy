Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :show, :destroy]
    resource :user, only: [:create, :show, :update]

    resource :rep
    resource :users_rep

    resource :bill
    resource :users_bill

    resource :smarty_streets, only: [:show]
  end
end
