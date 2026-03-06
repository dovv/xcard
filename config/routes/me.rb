constraints subdomain: "me" do
  namespace :me do
    root "home#index", as: :api_root
  end
end
