class HelloController < ApplicationController
  def index
    render json: "Hello"
  end
end
