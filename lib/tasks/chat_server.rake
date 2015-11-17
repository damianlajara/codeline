namespace :chat_server do
  desc "Start the chat server using thin"
  task start: :environment do
    p "Starting server..."
    exec('rackup private_pub.ru -s thin -E production')
  end
end
