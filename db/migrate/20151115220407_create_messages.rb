class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :body
      # Help keep track of which conversation a message belongs to
      t.references :conversation, index: true, foreign_key: true
      # Keep track of the user who sent the message in the chat
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
