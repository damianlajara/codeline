class ActivitiesController < ApplicationController
  def index
    @users = current_user.active_friends
    @users.push(current_user)
    @activities =
      if params[:content] == "posts"
        PublicActivity::Activity.where(owner_id: @users, trackable_type: "Post").order("created_at DESC")
      else
        PublicActivity::Activity.where(owner_id: @users).order("created_at DESC")
      end

    render component: 'Timeline', props: { activities: @activities, currentUser: current_user, content: params[:content] }
  end
end
