class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :title
      t.integer :index
      t.references :column, foreign_key: true

      t.timestamps
    end
  end
end
