

<!-- Line Number 41 from the project -->
##Tables

###City-> id,name,created_at,updated_at
###Airport -> id,name,address,city_id,created_at,updated_at
 Relationship-> City has many airports and Airports belongs to a city (one to many)
 ```
 npx sequelize model:generate --name Airport --attributes
 name:String,address:String,cityId:integer
```

