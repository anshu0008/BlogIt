# frozen_string_literal: true

class MakeTitleNotNullabe < ActiveRecord::Migration[7.1]
  def change
    change_column :posts, :title, :text, null: false
  end
end
