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

  def friendship_status(friend)
    # Friendships will always return an array with two elements, for both sides of the friendship. Since both of these friendships have the same users in it, we just need to get one
    friendships = Friendship.where(user_id: [self.id, friend.id], friend_id: [self.id, friend.id])
    if friendships.none?
      # There are no friendships found
      "not friends"
    else
      # We found a friendship! Now, let's check it's status
      if friendships.first.state == "active"
        "friends"
      else
        # There can only be two states here
        # We sent a friendship request, but it hasn't been accepted (Pending)
        # Someone sent us a friendship request, but it hasn't been accepted (Requested)
        friendships.first.user == self ? "pending" : "requested"
      end
    end

  end
end
