require 'faker'

10.times do |i|
	user = User.new
	user.first_name = Faker::Name.first_name
	user.last_name = Faker::Name.last_name
	user.email = Faker::Internet.email
	user.save

	note = Note.new
	note.title = Faker::Company.name
	note.content = Faker::Lorem.paragraph
	note.user_id = i + 1
	note.save
end