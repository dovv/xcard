class Admin::BaseController < ApplicationController
  layout :layout_by_resource

  private

    def layout_by_resource
      "admin"
    end
end
