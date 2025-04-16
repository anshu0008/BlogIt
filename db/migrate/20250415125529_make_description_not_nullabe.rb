class MakeDescriptionNotNullabe < ActiveRecord::Migration[7.1]
  def change
    change_column :posts, :description, :text, null: false
  end
end
