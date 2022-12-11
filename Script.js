
//countries with a population of less than 2 lakhs 
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
     var res = result.filter((ele)=>ele.population<200000)
     var res1 = res.map((ele)=>`${ele.population}: ${ele.name.common}`)
     console.log(res1)
    } 

//Get all the countries from the Asia continent /region using the Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
     var res2 = result.filter((ele)=>{if(ele.region == "Asia"){
      return ele.name
     }})
     console.log(res2);
          
    } 

  //Print the following details name, capital, flag using forEach function
  var request = new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v3.1/all",true)
  request.send()
   request.onload=function(){
      var data = request.response
      var result = JSON.parse(data)
       var res3 = result.forEach(ele => { console.log(ele.name, ele.capital,ele.flag)   
       })
      } 
 
//Print the total population of countries using reduce function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res4 = result.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res4)
    }
    
// Print the country which uses US Dollars as currency.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result3 = JSON.parse(data)
    var ress = result3.filter((ele)=> {ele.currencies !== undefined
     var ress1 = ress.filter((data)=>{
      for(var key in data.currencies){
         if(data.currencies[key].name === "United States dollar")
            return data
      }
     })
    })
    console.log(ress1.length, ress[0].currencies)
  
    }


    //US Dollars as currency.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
      var ress = result.filter((ele)=>{
         for (let key  in ele.currencies){
            if(ele.currencies[key].name ==="United States dollar") {
               return ele
            }
         }
         
      })   
      console.log(ress.length, ress[0].currencies)
      
    }



