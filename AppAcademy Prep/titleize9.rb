

def titleize(string)
    first_word_capped = string.capitalize
    stopword = %w{and over the}
    words = first_word_capped.split(" ")

    result = words.map do |word|
        if stopword.include?(word)
             word
        else
             word.capitalize
        end
    end
return result.join(" ")
end

puts titleize("The Bridge over the River Kwai")
