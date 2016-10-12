class Animal
  attr_accessor :name

  def initialize(name)
    @name = name
  end
end

class Cat < Animal
  def talk
    "Meaow!"
  end
end

class Dog < Animal
  def talk
    "Woof!"
  end
end

animals = [Cat.new("B"), Dog.new("Andy"), Cat.new("Bambi")]
animals.each do |animal|
  puts animal.name
  puts animal.talk

end
