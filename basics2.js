use ("purchase")
db.orders.insertMany([

{customer: "Mike",product:"toothbrush",price:24.23},
{customer :"Johnson",product:"Milk",price:17},
{customer:"karen",product:"pizza",price:19.23},
{customer :"alexa",product:"toothbrush",price:27.9},
{customer: "Mike",product:"Milk",price:14.23},
{customer:"karen",product:"soap",price:9.23}



])
db.orders.find().count()
// count the total customer who bought toothbrush
db.orders.count({product:"toothbrush"})
// count the total price of toothbrush sold
db.orders.aggregate(
  [
  {$match: {product:"toothbrush"} },
  {$group: {_id :"$product",total: {$sum: "$price"}}}

  ]
  )
  //count the total price of spend by each customer
  db.orders.aggregate([
    {$match: {} },
    {$group:{_id:"$customer",total :{$sum:"$price"}}}
    
  ])
  // //count the total price of spend by each customer and sort in increasing order
  db.order.aggregate([
    {$match:{} },
    {$group:{_id:"$customer",total:{$sum : "$price"}}},
    
  ]).sort({price:1})