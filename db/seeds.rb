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
    password_confirmation: "password123"
  },
  {
    username: "henrypl95",
    email: "henrypl360@gmail.com",
    password: "password123",
    password_confirmation: "password123"
  },
  {
    username: "catherine",
    email: "lov3rcathy@gmail.com",
    password: "password123",
    password_confirmation: "password123"
  },
  {
    username: "Marvin",
    email: "marv@hotmail.com",
    password: "password123",
    password_confirmation: "password123"
  },
  {
    username: "Nusta",
    email: "nbelluzzi@hotmail.com",
    password: "password123",
    password_confirmation: "password123"
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
