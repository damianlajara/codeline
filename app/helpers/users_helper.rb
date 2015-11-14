module UsersHelper
  def action_buttons_for_status_of(friend)
    case current_user.friendship_status(friend)
    when "friends"
      link_to " Cancel Friendship", friendship_path(current_user.friendship_relation(friend), method: :delete)
    when "pending"
      link_to " Cancel Request", friendship_path(current_user.friendship_relation(friend), method: :delete)
    when "requested"
      link_to "Accept", accept_friendship_path(current_user.friendship_relation(friend), method: :put)
      link_to "Deny"
    when "not friends"
      link_to "Add as a Friend", friendships_path(user_id: friend.id), method: :post
    end
  end
end
