class Api::CardsController < Api::BaseController
  def index
    @cards = Card.all
    render json: CardSerializer.new(@cards).serialized_json
  end

  def update
    @card = Card.find(params[:id])
    @card.move(
      new_position: params[:destPosition],
      new_column: Column.find(params[:destColumnId]),
    )
    ActionCable.server.broadcast("dashboard", {
      type: "RECEIVE_MOVE_CARD",
      id: @card.id,
      sessionId: params[:sessionId],
      srcPosition: params[:srcPosition],
      srcColumnId: params[:srcColumnId],
      destPosition: params[:destPosition],
      destColumnId: params[:destColumnId],
    })
    head :ok
  end
end
