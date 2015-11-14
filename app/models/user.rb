class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates_presence_of :username
  validates_uniqueness_of :username

  # user.friendships will only return the friendships the user requested
  has_many :friendships, dependent: :destroy
  # user.inverse_friendships will return the friendships accepted by the other user
  has_many :inverse_friendships, class_name: "Friendship", foreign_key: "friend_id", dependent: :destroy

  def request_friendship(friend)
    self.friendships.create(friend: friend)
  end

  # Pending friend requests we havent accepted
  def pending_friend_requests
    self.inverse_friendships.where(state: "pending")
  end

  # Friendships we requested, but they havent accepted
  def pending_user_requests
    self.friendships.where(state: "pending")
  end

  # Get all of the friends that have already accepted friendships
  def active_friends
    self.friendships.where(state: "active").map(&:friend) + self.inverse_friendships.where(state: "active").map(&:user)
  end
end
