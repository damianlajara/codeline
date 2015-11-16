class ConversationsController < ApplicationController
  # Do not let show inherit from application.html.erb
  layout false

  def create
    # Does a conversation exist between two users?
    @conversation =
      if Conversation.between(params[:sender_id],params[:recipient_id]).present?
        # If it does, then find it and return it's id
        Conversation.between(params[:sender_id],params[:recipient_id]).first
      else
        # If not, then simply create a new one
        Conversation.create!(conversation_params)
      end
    p @conversation
      # Return a json response with the id of the conversation
    render json: { conversation_id: @conversation.id }
  end

  def show
    @conversation = Conversation.find(params[:id])
    @reciever = who_am_i(@conversation)
    @messages = @conversation.messages
    @message = Message.new
  end

  private
  def conversation_params
    params.permit(:sender_id, :recipient_id)
  end

  def who_am_i(conversation)
    current_user == conversation.recipient ? conversation.sender : conversation.recipient
  end
end
