class AuthenticationController < ApplicationController
  before_action :authorize_request, only: :verify

  # POST /auth/login
  def login
    @user = User.find_by_email(params[:email])
    if @user.authenticate(params[:password]) # courtesy of bcrypt
      token = encode(user_id: @user.id, email: @user.email)
      render json: { user: @user, token: token }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  # GET /auth/verify
  def verify
    render json: @current_user, status: :ok
  end

end
