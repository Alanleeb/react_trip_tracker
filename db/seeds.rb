10.times do 
    @city =  City.create(
        name: Faker::BackToTheFuture.character,
         description: Faker::Hipster.sentence(10)
         )


10.times do 
     Location.create(
     name: Faker::Cat.name, 
     description: Faker::ChuckNorris.fact,
     city_id: @city.id 
    )
 end
end

puts 'seeded'