constraints subdomain: "admin" do
  scope module: :admin do
    root "home#index", as: :admin_root
  end
end