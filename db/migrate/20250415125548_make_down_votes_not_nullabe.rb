class MakeDownVotesNotNullabe < ActiveRecord::Migration[7.1]
  def change
    change_column :posts, :downvotes, :integer, null: false, default: 0
  end
end
