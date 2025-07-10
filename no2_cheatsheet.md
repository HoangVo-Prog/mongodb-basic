# Mogo Query Language (MQL) - 2

## 1.1. $match

```js
db.collection_name.aggregate(
    [
        { $match: { $gte: 2000 }}
    ]
)
```

## 1.2 $project

```js
db.collection_name.aggregate(
    [
        { $match: { $gte: 2000 }}, 
        { $project: 
            {
                "founded_year":1 , 
                "category_code":1, 
                "no_of_employees": "$number_of_employees", 
                "stop_time": {$gt: ISODate("2016-01-05")},
                "start station location":"$start station location.coordinates",
            }
        }
    ]
)
```
