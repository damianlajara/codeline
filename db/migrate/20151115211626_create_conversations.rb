class CreateConversations < ActiveRecord::Migration
  def change
    create_table :conversations do |t|
      # Both of type User
      t.integer :sender_id
      t.integer :recipient_id

      t.timestamps null: false
    end
    add_index :conversations, [:sender_id, :recipient_id]
  end
end
