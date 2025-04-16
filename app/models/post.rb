# frozen_string_literal: true

class Post < ApplicationRecord
  MAX_LENGTH_TITLE = 125
  MAX_LENGTH_DESCRIPTION = 10000
  validates :title, presence: true, length: { maximum: MAX_LENGTH_TITLE }
  validates :description, presence: true, length: { maximum: MAX_LENGTH_DESCRIPTION }
  validates_inclusion_of :is_bloggable, in: [true, false]
end
