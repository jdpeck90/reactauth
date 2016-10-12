# analyzer.rb -- Text Analyzer
stopwords = %w{the a by on for of are with just but and to the my I has some in}
lines = File.readlines(ARGV[0])
line_count = lines.size
text = lines.join


#Count the characters
total_characters = text.length
total_characters_no_spaces = text.gsub(/\s+/,"").length


# Count the words, sentences, and paragraphs
word_count = text.split.length
sentence_count = text.split(/\.|\?|!/).length
paragraph_count = text.split(/\n\n/).length


# Make a list of words in the text that aren't stop words,
# count them, and work out the percentage of non-stop words
# against all words
all_words = text.scan(/\w+/)
good_words = all_words.select{ |word| !stopwords.include?(word) }
good_percentage = ((good_words.length.to_f / all_words.length.to_f) * 100).to_i


#Summarize the text by cherry picking some choice sentences
sentences = text.gsub(/\s+/, ' ').strip.split(/\.|\?|!/)
sentences_sorted = sentences.sort_by { |sentence| sentence.length }
one_third = sentences_sorted.length / 3
ideal_sent = sentences_sorted.slice(one_third,one_third + 1)
ideal_sent = ideal_sent.select { |sentence| sentence =~ /is|are/ }
join_ideal_sent = ideal_sent.join(". ")

#Summary count the words, sentences, and paragraphs
summary_word_count = join_ideal_sent.split.length
summary_sentence_count = join_ideal_sent.split(/\.|\?|!/).length
summary_paragraph_count = join_ideal_sent.split(/\n\n/).length

#Average word/sentence calculations
average_words_per_sentence = word_count.to_f/sentence_count.to_f
average_sentences_per_paragraph = sentence_count.to_f/paragraph_count.to_f


#Reading time calculations
full_minutes = (word_count / 180.to_f) % 60
full_seconds = (full_minutes - full_minutes.to_i) * 60
full_hours = word_count / 10800 % 24
no_format_full_minutes = (word_count / 180.to_f)

min_minutes =(summary_word_count / 180.to_f) % 60
min_seconds =(min_minutes - min_minutes.to_i) * 60
min_hours = summary_word_count / 10800 % 24
no_format_min_minutes = (summary_word_count / 180.to_f)

time_saved = no_format_full_minutes - no_format_min_minutes
#Time saved

if time_saved < 60
  saved_sentence = "Damn son, I just saved you #{time_saved.to_i} minutes & #{((time_saved - time_saved.to_i)*60).to_i} seconds! You can thank me later."
elsif time_saved > 60
  saved_sentence = "Damn son, I just save you #{time_saved/60} hours, #{time_saved} minutes, & #{((time_saved - time_saved.to_i)*60).to_i} seconds! You can thank me later."
end
#Give the analysis back to the user
puts "----------------- Text Analysis ---------------"
puts "#{line_count} lines"
puts "#{total_characters} characters"
puts "#{total_characters_no_spaces} characters w/o spaces"
puts "#{word_count} words"
puts "#{sentence_count} sentences"
puts "#{paragraph_count} paragraphs"
puts "#{average_words_per_sentence.round(2)} words/sentences"
puts "#{average_sentences_per_paragraph} sentences/paragraph"
puts "#{good_percentage}% of words are non-fluff words"
puts "\n"
puts "----------------- How long will it take me to read this? ---------------"
puts "---At a speed of 180 words per minute it would take you #{full_hours} hours,
#{full_minutes.to_i} minutes, & #{full_seconds.to_i} seconds to read the full text."
puts "\n"
puts "---It will only take you #{min_hours} hours,
#{min_minutes.to_i} minutes, & #{min_seconds.to_i} seconds to read the summary"
puts "\n"
puts saved_sentence
puts "Summary:\n" + ideal_sent.join(". ")
puts "--End of analysis"
