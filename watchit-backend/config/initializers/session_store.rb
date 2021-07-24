#config/initializers/session_store.rb
if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_watchit-backend', domain: 'watchit-client'
  else
    Rails.application.config.session_store :cookie_store, key: '_watchit-backend'
  end