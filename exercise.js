// Find students who are 20 years old and have a mark greater than 8.0
db.students.find({
    $and: [
        {age: 20}, 
        {grade: {$gt: 8.0}}
    ]
})

