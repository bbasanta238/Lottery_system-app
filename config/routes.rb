Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "pages#index"

  get 'openLottery' , to: "pages#openLottery"
  get "applyLottery", to: "pages#applyLottery"
  get "closeLottery", to: "pages#closeLottery"
  get "participant", to: "pages#participant"
end
