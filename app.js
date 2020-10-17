var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')


button.addEventListener('click',function (){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=ccade07312de62f89350e76b6745b705')
   .then(response=> response.json())
   .then(data=> {
       console.log(data);
       var nameVal = data['name'];
       var tempVal = data['main']['temp'];
       var descVal = data['weather'][0]['description'];

       name.innerHTML=  nameVal;
       desc.innerHTML = descVal;
       temp.innerHTML = tempVal;


   })

   .catch(err=> alert("Please Check the City Name Again..!"))
})