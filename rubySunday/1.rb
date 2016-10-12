def circumference_of_circle(radius)
  2 * Pi * radius
end

Pi = 3.141592

class OtherPlanet
  Pi = 4.5
  def OtherPlanet.circumference_of_circle(radius)
    radius * 2 * Pi
  end
end

puts "OtherPlanet circumference_of_circle"
puts OtherPlanet.circumference_of_circle(10)

puts "circumference_of_circle"
puts circumference_of_circle(10)

puts "OtherPlanet Pi"
puts OtherPlanet::Pi

puts "Global Pi"
puts Pi
