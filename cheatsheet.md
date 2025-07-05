# Creating / Deleting Databases and Collections

```java
show dbs
use <db_name>
show collections
db.createCollection('collection_name')
db.collection_name.drop()
// At the same database
db.dropDatabase() // In need of Atlas Admin role
```

# Inserting Documents

```java
// In a database
db.collection_name.insert(
    <document or array of documents>,
   {
      writeConcern: <document>,
      ordered: <boolean>
   }
)
// Note that, the "_id" key in the key-value type NoSQL, must be unique and have an undersccore before it. If not include "_id", the db will create itself.

// for example
db.student.insert(
    "_id": 1, 
    "name": "Hoang"
)
```
But, the insert() method has been deprecated in mongosh. So we need an alternative methods as:
```java
db.collection_name.insertOne(
    <document>,
    {
        writeConcern: <document>
    }
)

db.collection_name.insertMany(
    [ <document 1> , <document 2>, ... ],
    {
        writeConcern: <document>,
        ordered: <boolean>
    }
)
```

Reference document is in here https://www.mongodb.com/docs/manual/reference/method/

# mongoimport and mongoexport

```java
mongoimport
--url="mongodb+srv://HoangVo:hoangvo@cluster0.4zaldu1.mongodb.net/sample"
--collection=companies
--file=companies.json
```
