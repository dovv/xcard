require "test_helper"

class Help::HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get help_home_index_url
    assert_response :success
  end
end
