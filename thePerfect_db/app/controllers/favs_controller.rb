class FavsController < ApplicationController
  before_action :authorize_request
  before_action :set_product, only: [:create, :destroy]

  # GET /favs
  def index
    @favs = @current_user.products
    render json: @favs
  end


  # POST /products/:product_id/favs
  def create
    @current_user.products.push(@product) unless @current_user.products.include?(@product)
    render json: @product
  end


  # DELETE /products/:product_id/favs
  def destroy
    @current_user.products.delete(@product)
    render json: @product
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:product_id])
    end

end
