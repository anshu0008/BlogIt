class MakeUpVotesNotNullabe < ActiveRecord::Migration[7.1]
  def change
    change_column :posts, :upvotes, :integer, null: false, default: 0
  end
end
