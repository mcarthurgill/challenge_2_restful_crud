get '/notes' do 
  @notes = Note.all
  erb :'/notes/_index', layout: false
end

get '/notes/:id' do |id|
  @note = Note.find_by_id(id)
  erb :'/notes/_show', layout: false
end

post '/notes' do
  note = Note.new(params[:notes])
  erb :'/notes', layout: false
end

put '/notes/:id' do |id|
  p params
  @note = Note.find_by_id(id)
  erb :'/notes/show', layout: false
end

delete '/notes/:id' do |id|
  Note.find_by_id(id).destroy
  id
end