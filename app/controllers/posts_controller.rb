class PostsController < ApplicationController
  before_action :set_post, only: [:edit, :update, :destroy, :upvote, :downvote, :get_activity_from_post]
  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      # After saving the post, start tracking it's activity
      @post.create_activity key: "post.created", owner: @post.user
      if request.xhr?
        respond_to do |format|
          format.json { render json: @post }
        end
      else
        respond_to do |format|
          format.html { redirect_to user_path(@post.user.username), notice: "Post Created" }
        end
      end
    else
      redirect_to user_path(@post.user.username), error: "Something went wrong. Try again"
    end

  end

  def edit

  end

  def destroy
    if @post.update(post_params)
      respond_to do |format|
        format.html { redirect_to user_path(@post.user.username), notice: "Post Updated" }
      end
    else
      redirect_to user_path(@post.user.username), error: "Something went wrong. Try again"
    end
  end

  def update
    @post.destroy
    respond_to do |format|
      format.html { redirect_to user_path(@post.user.username), notice: "Post Destroyed" }
    end
  end
  # A route to update the record
  def upvote
    @post.upvote_from current_user
    render json: @post.get_upvotes.size
    # redirect_to :back
  end

  def downvote
    @post.downvote_from current_user
    render json: @post.get_downvotes.size
    # redirect_to :back
  end

  def get_activity_from_post
    # Passing in the activity id as the post here
    render json: @post
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:content)
  end
end
