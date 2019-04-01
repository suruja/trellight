class Card < ApplicationRecord
  belongs_to :column

  default_scope { order(position: :asc) }

  def move(new_column:, new_position:)
    new_column_id = new_column.id
    other_cards = self.class.where("id <> :id AND column_id IN (:column_ids)",
      id: id,
      column_ids: Set.new([column_id, new_column_id]).to_a,
    ).group_by(&:column_id)

    other_cards.each do |col_id, cards|
      cards.each_with_index do |card, i|
        card.position = i
        card.position += 1 if col_id == new_column_id and i >= new_position
      end
    end

    self.column = new_column
    self.position = new_position

    transaction do
      other_cards.values.flatten.each(&:save)
      save
    end
  end
end
