module UsersHelper
  def action_buttons_for_status_of(friend)
    case current_user.friendship_status(friend)
    when "friends"
      "Remove Friendship"
    when "pending"
      "Cancel Request"
    when "requested"
      "Accept or Deny"
    when "not friends"
      "Add as a Friend"
    end
  end
end
