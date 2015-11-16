class MessagesController < ApplicationController

  # Will render a javascript template(create.js.erb) due to the remote: true on the form
  def create
    @conversation = Conversation.find(params[:conversation_id])
    @message = @conversation.messages.build(message_params)
    @message.user_id = current_user.id
    @message.save!
    # Used to publish push notifications to our view
    @path = conversation_path(@conversation)
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
