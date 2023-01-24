const {Client} = require('pg');
const fs = require('fs');
const {Parser} = require('json2csv');
const client = new Client({
    host: "localhost",
    user:"postgres",
    port:5432,
    password:"santhosh123",
    database:"test"
})

client.connect();
let a
//a= 'SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth HAVING COUNT(*) > 5 ORDER BY country_of_birth'
//a= 'SELECT country_of_birth,COUNT(*) FROM person GROUP BY country_of_birth HAVING COUNT(*) > 40 ORDER BY "country_of_birth" asc'
//a= 'SELECT * FROM person LIMIT 5'
//a='SELECT * FROM person OFFSET 5 LIMIT 5'
//a=`SELECT * FROM person WHERE country_of_birth='Japan'`
//a=`SELECT * FROM person WHERE email like '%@java.com'`
//a=`SELECT * FROM person country_of_birth LIKE 'p%'`
//a=`SELECT * FROM person WHERE country_of_birth='Poland'`
//a=`SELECT * FROM person WHERE country_of_birth='Japan'`
//a=`SELECT * FROM person WHERE country_of_birth='Japan' AND gender='Male'`
//a=`SELECT country_of_birth FROM person GROUP BY country_of_birth`
//a=`SELECT DISTINCT country_of_birth FROM person`
//a=`SELECT DISTINCT gender FROM person`
//a=`SELECT * FROM person WHERE GROUP BY country_of_birth`
//a=`SELECT country_of_birth FROM person GROUP BY country_of_birth`
//a=`SELECT country_of_birth, COUNT(*) as frequency FROM person WHERE gender='Genderqueer' GROUP BY country_of_birth ORDER BY frequency desc`
//a=`SELECT gender,COUNT(*) AS FREQUENCY FROM person GROUP BY gender ORDER BY GENDER`
//a=`SELECT country_of_birth,COUNT(*) FROM person GROUP BY country_of_birth HAVING COUNT(*) > 40 ORDER BY country_of_birth asc`
//a=`SELECT * FROM car`
//calculate min max AND average
//a=`select max(price) from car`
//a=`select MIN(price) from car`
//a=`SELECT ROUND(avg(price)) FROM car`
//a=`select AVG(price) from car`
//a=`SELECT make,model,avg(price) FROM car GROUP BY make,model ORDER BY "avg" desc`
//a=`SELECT make,ROUND(AVG(price)) FROM car GROUP BY make,model`
//a=`select sum(price) from car`
//a=`select round(sum(price)) from car`
//a=`select make,sum(price) from car GROUP BY make` 
//arthimatic operations
//a=`SELECT id,make,model,price,price*0.1 as discountPrice from car`
//a=`SELECT id,make,model,price,ROUND(price*0.1,2) AS tenPercentDiscount,ROUND(price-ROUND(price*0.1,2)) as MRP from car`
//a=`SELECT id,make,model,price,ROUND(price*0.1,2) AS tenPercentDiscount,ROUND(price-ROUND(price*0.1,2),2) as mrp from car`
//a=`SELECT id,make,model,price as original_price,ROUND(price*0.1,2) AS ten_percent,ROUND(price-ROUND(price*0.1,2),2) as after_discount from car`
//COALESCE WILL FILL NULL BOXES WITH GIVEN STRING
//a=`SELECT COALESCE(1)`
//a=`SELECT COALESCE(email, 'email not found') FROM person`
//nullif will eleminate error 
//a=`select 10/NULL`
//a=`select 10/NULLIF(2,9)`  //5
//a=`select 10/nullif(2,2)`    // null
//a=`SELECT COALESCE(10/NULLIF(2,10))`
//a=`select now(  )::date`
//a=`select now(  )`
//a=`SELECT now()::DATE`
//a=`select now()::time`
//a=`SELECT now()-INTERVAL '10 DAYS' AS PAST10YEARS`
//a=`SELECT NOW()+INTERVAL '10 MONTHS AS AFTER10MONTHS'`
//a=`SELECT NOW()::DATE + 'INTERVAL '10 MONTHS'`
//a=`SELECT NOW()::DATE + INTERVAL '10 MONTHS' AS AFTER10MONTHS`
//a=`SELECT EXTRACT(YEAR FROM NOW())`
//a=`SELECT EXTRACT(MONTH FROM NOW())`
//a=`SELECT EXTRACT(DAY FROM NOW())`
//a=`SELECT EXTRACT(DOW FROM NOW())`
//a=`select first_name, last_name, gender, country_of_birth, date_of_birth from person`
//a=`select first_name,last_name,gender,country_of_birth,date_of_birth,AGE(NOW(), date_of_birth) as AGE from person`
//a=`select email,count(*) from person group by email having count(*)>1`
//a=`select * from person`
//a=`SELECT email,count(*) from person group by email having count(*)>1`


//a=`delete from person where gender in ('Non-binary', 'Agender')`

//update person set email='santhosh@gmail.com' where id=1000;

//test=# alter table person add constraint gender_constraint check (gender='Male' OR gender='Female');


client.query(a, (err,res) => {
   try {
    if(!err){
        fs.writeFileSync('/home/pc/Desktop/post/solution.json', JSON.stringify(res.rows, null, 2), (err,resp) => {
           if(!err) return "done"
        });
    }
   client.end;
   } catch (error) {
    return error.message
   }
})



//create a drop down menu where parent should have children and grand children;
//if we check on parent whole children and grand children also get checked what ever checked options 
// will appear on div(box);
// one search bar if we type any parent children or grand children it should be appear;
