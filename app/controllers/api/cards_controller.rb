class Api::CardsController < Api::BaseController
  def index
    @cards = Card.all
    render json: CardSerializer.new(@cards).serialized_json
  end
end
