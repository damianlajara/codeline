class Conversation < ActiveRecord::Base
  # Belongs to both a sender and a recipient, both which are a User
  belongs_to :sender, foreign_key: :sender_id, class_name: "User"
  belongs_to :recipient, foreign_key: :recipient_id, class_name: "User"

  # If a conversation is deleted, delete all of it's messages
  has_many :messages, dependent: :destroy

  validates_uniqueness_of :sender_id, scope: :recipient_id

  # Help retrieve all conversations of the currently logged in user
  scope :involving, -> (user) do
    where("conversations.sender_id = ? OR conversations.recipient_id = ?", user.id, user.id)
  end

  # Help check if a conversation exists between any given two users before the conversation is created
  scope :between, -> (sender_id, recipient_id) do
    where("(conversations.sender_id = ? AND conversations.recipient_id = ?) OR (conversations.sender_id = ? AND conversations.recipient_id = ?)", sender_id, recipient_id, recipient_id, sender_id)
  end

end
