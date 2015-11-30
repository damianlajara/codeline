class RegistrationsController < Devise::RegistrationsController
  after_action :get_md5_gravatar_hash, only: :create
  private

  def get_md5_gravatar_hash
    @user.update_attributes(gravatar_hash: @user.md5_hashed_email)
  end

  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation, :username)
  end

  def account_update_params
    params.require(:user).permit(:email, :password, :password_confirmation, :username, :current_password, :age, :bio, :gender, :blog, :website)
  end
end
