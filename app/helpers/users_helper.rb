module UsersHelper
  def action_buttons_for_status_of(friend)
    case current_user.friendship_status(friend)
    when "friends"
      link_to " Cancel Friendship", friendship_path(current_user.friendship_relation(friend)), method: :delete, class: "btn btn-default btn-md btn-block"
    when "pending"
      link_to " Cancel Request", friendship_path(current_user.friendship_relation(friend)), method: :delete, class: "btn btn-default btn-md btn-block"
    when "requested"
      link_to "Accept", accept_friendship_path(current_user.friendship_relation(friend)), method: :put, class: "btn btn-default btn-md btn-block"
      # link_to "Deny"
    when "not friends"
      link_to "Add as a Friend", friendships_path(user_id: friend.id), method: :post, class: "btn btn-default btn-md btn-block"
    end
  end
end
