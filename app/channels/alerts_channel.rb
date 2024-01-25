class AlertsChannel < ApplicationCable::Channel

  def subscribed
    # stream_from "some_channel"
    stream_from "AlertsChannel#{params[:user_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
  end

  # def received(data)
  #   # remember, the data parameter represents whatever is sent from the
  #   # subscriber, in this case a message object
  #   post = Post.create(data)
  #   ActionCable.server.broadcast("AlertsChannel", post)
  # end
end
