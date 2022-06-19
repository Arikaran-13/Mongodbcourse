use ("ari")
db.student.find().count()
db.student.find().pretty()

db.student.find().count();
db.student.find({
   Name:"Preethi"
})
db.student.find({
   $and: [{Name:"Preethi"},{Age:21}]
})
db.student.find({
   $or : [{Name:"Preethi"},{Age:21}]
})
db.student.find({
   Name:{$in:["Preethi","Ari"]}
})
db.student.find({
   Name: {$nin:["Preethi","Ari"]} 
})
db.student.find().sort({Age:1}).pretty()

db.student.find({Name:"Alex"})
db.student.find().count()
db.student.update(
   {Name:"Aaron"},{$set:{Age:20}}
   )
   db.student.find({Name:"Aaron"})
   db.student.deleteOne({Name:"Aaron"})
   db.student.remove({Name:"Aaron"})
   db.student.find().count()