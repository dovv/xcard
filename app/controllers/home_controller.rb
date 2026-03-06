class HomeController < ApplicationController
  def index
    render json: {
      host: request.host,
      subdomain: request.subdomain,
      domain: request.domain
    }
  end
end
