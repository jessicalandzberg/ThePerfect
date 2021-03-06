class UsersController < ApplicationController
  before_action :authorize_request, only: :update

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      token = encode(user_id: @user.id, email: @user.email)
      render json: { user: @user, token: token }, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @current_user.update(user_params)
      render json: @current_user
    else
      render json: @current_user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  # currentuser

  private

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:email, :password, :birthday, :firstname)
    end
end
