require 'test_helper'

class Api::RepsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_reps_index_url
    assert_response :success
  end

  test "should get create" do
    get api_reps_create_url
    assert_response :success
  end

  test "should get show" do
    get api_reps_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_reps_destroy_url
    assert_response :success
  end

end
