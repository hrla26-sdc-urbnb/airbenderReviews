mongoimport -d airbenderreviews -c airbendermock --type csv --file ~/Desktop/example.csv --headerline

db.airbendermock.dropIndex( "productid_1" )
db.people.getIndexes()

db.airbendermock.find({'productid': 999999}).explain("executionStats")


db.airbendermock.createIndex( { username: "text"} ) // create index for text field
db.airbendermock.find( { $text: { $search: "Kevin" } } ) // 
db.airbendermock.find({"username" : {$regex: /Jo/}}).explain("executionStats")