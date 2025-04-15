class MakeIsBloggableNotNullabe < ActiveRecord::Migration[7.1]
  def change
    change_column :posts, :is_bloggable, :boolean, null: false, default: false
  end
end
