require "test_helper"

class Me::HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get me_home_index_url
    assert_response :success
  end
end
