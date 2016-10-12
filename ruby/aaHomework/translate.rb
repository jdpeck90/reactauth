def translate(word)
    vowels = %w{a e i o u}
    letters = word.split("")
    first_char = letters.slice(0,1)
    result = word + "ay"
    p result
    return result
end


translate("apple")
