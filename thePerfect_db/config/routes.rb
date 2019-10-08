Rails.application.routes.draw do
  resources :products

  get '/favs', to: 'favs#index'
  post 'products/:product_id/favs', to: 'favs#create'
  delete 'products/:product_id/favs', to: 'favs#destroy'

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
