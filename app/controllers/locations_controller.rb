class LocationsController < ApplicationController
  before_action :set_location, except: [:index, :create]

  def index
    render json: Location.all
  end

  def create
    location = Location.new(location_params)
    if location.save 
      render json: location 
    else 
      render json: { errors: items.errors }, status: :unprocessable_entity
    end
  end

  def show
  end

  def update
    if @location.update(location_params)
      render jsaon: @location
    else
      render json: { errors: @location.errors.full_messages.join(', ') }, status: :bad_request
    end
  end

  def destroy
    @location.destroy
  end
end

private

def set_location
  location = Location.find(params.find[:id])
end

def location_params
  params.require(:location).permit(:name)
end