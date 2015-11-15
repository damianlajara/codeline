class UsersController < ApplicationController
  before_action :set_user, only: [:show]

  def index
    @users =
      case params[:people]
      when "friends"
        current_user.active_friends
      when "requests"
        current_user.pending_friend_requests.map(&:user)
      when "pending"
        current_user.pending_user_requests.map(&:friend)
      else
        # I should not be allowed to see myself in my friends list
        User.where.not(id: current_user.id)
      end
  end

  def show
    @post = Post.new
    @posts = @user.posts.order('created_at DESC')
    @activities = PublicActivity::Activity.where(owner_id: @user.id).order('created_at DESC')
  end

  private
  def set_user
    @user = User.find_by(username: params[:id])
  end
end
