class RenameIndexToPosition < ActiveRecord::Migration[5.2]
  def change
   rename_column :cards, :index, :position
   rename_column :columns, :index, :position
  end
end
