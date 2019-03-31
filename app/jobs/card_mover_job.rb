class CardMoverJob < ApplicationJob
  def perform(card_id:, session_id:, src_column_id:, src_position:, dest_column_id:, dest_position:)
    @card = Card.find(card_id)
    @card.move(
      new_position: dest_position,
      new_column: Column.find(dest_column_id),
    )
    ActionCable.server.broadcast("dashboard", {
      type: "RECEIVE_MOVE_CARD",
      id: @card.id,
      sessionId: session_id,
      srcPosition: src_position,
      srcColumnId: src_column_id,
      destPosition: dest_position,
      destColumnId: dest_column_id,
    })
  end
end
