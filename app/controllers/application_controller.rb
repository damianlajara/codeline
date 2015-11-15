class ApplicationController < ActionController::Base
  helper_method :request_count
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :authenticate_user!, except: [:home]

  def request_count
    current_user.pending_friend_requests.map(&:user).count
  end
end
