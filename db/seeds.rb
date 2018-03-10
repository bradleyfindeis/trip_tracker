20.times do 
  trip = Trip.create(
    name: Faker::LordOfTheRings.character
  )
  5.times do 
    Location.create(
    trip_id: trip.id,
    state: Faker::LordOfTheRings.location,
    city: Faker::HarryPotter.location, 

    )
  end 
end 