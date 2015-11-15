class PostsController < ApplicationController
  before_action :set_post, only: [:edit, :update, :destroy]
  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      # After saving the post, start tracking it's activity
      @post.create_activity key: "post.created", owner: @post.user

      respond_to do |format|
        format.html { redirect_to user_path(@post.user.username), notice: "Post Created" }
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

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:content)
  end
end
