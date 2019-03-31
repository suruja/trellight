class Api::CardsController < Api::BaseController
  def index
    @cards = Card.all
    render json: CardSerializer.new(@cards).serialized_json
  end

  def update
    @card = Card.find(params[:id])
    CardMoverJob.perform_later(
      card_id: @card.id,
      session_id: params[:sessionId],
      src_column_id: params[:srcColumnId],
      src_position: params[:srcPosition],
      dest_column_id: params[:destColumnId],
      dest_position: params[:destPosition],
    )
    head :ok
  end
end
