# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bill.destroy_all
Rep.destroy_all
UsersBill.destroy_all
UsersRep.destroy_all
UsersRep.destroy_all

User.create!(
  f_name: 'Guest',
  l_name: 'User',
  email: "guest_user@email.com",
  password: "guest_user_password"
)
