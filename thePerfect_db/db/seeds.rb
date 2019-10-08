# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.create!([
    {name: "The Perfect Leather Jacket", picture: "https://res.cloudinary.com/jeslan/image/upload/v1570210461/Project%201/E0488_BK5229_d3_wsqlv6.jpg", price: "$100", color: "black"},
    {name: "The Perfect Leather Jacket", picture: "https://res.cloudinary.com/jeslan/image/upload/v1570210461/Project%201/E0488_BK5229_d3_wsqlv6.jpg", price: "$200", color: "brown"},
    {name: "The Perfect Leather Jacket", picture: "https://res.cloudinary.com/jeslan/image/upload/v1570210461/Project%201/E0488_BK5229_d3_wsqlv6.jpg", price: "$300", color: "black"}
  ])
