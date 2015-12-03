# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create([
  {
    username: "damiansito",
    email: "damiansito93@gmail.com",
    password: "password123",
    password_confirmation: "password123",
    gravatar_hash: Digest::MD5.hexdigest("damiansito93@gmail.com")
  },
  {
    username: "henrypl95",
    email: "henrypl360@gmail.com",
    password: "password123",
    password_confirmation: "password123",
    gravatar_hash: Digest::MD5.hexdigest("henrypl360@gmail.com")
  },
  {
    username: "catherine",
    email: "lov3rcathy@gmail.com",
    password: "password123",
    password_confirmation: "password123",
    gravatar_hash: Digest::MD5.hexdigest("lov3rcathy@gmail.com")
  },
  {
    username: "Marvin",
    email: "marv@hotmail.com",
    password: "password123",
    password_confirmation: "password123",
    gravatar_hash: Digest::MD5.hexdigest("marv@hotmail.com")
  },
  {
    username: "Nusta",
    email: "nbelluzzi@hotmail.com",
    password: "password123",
    password_confirmation: "password123",
    gravatar_hash: Digest::MD5.hexdigest("nbelluzzi@hotmail.com")
  }
])
p "Test users created"

Friendship.create([
  {
    user_id: 1,
    friend_id: 2
  },
  {
    user_id: 2,
    friend_id: 1
  },
])
p "Friendships created"
