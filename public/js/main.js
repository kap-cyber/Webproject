const submitBtn =document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
// const temp=document.getElementById('temp');
const temp_real_val=document.getElementById('temp_real_val');
const datahide=document.querySelector('.middle_layer');
const min=document.getElementById('min');
const max=document.getElementById('max');
const last_hide=document.querySelector('.last_layer');


const getInfo=async(event)=>{
    event.preventDefault();
    // alert('clicked');
     let cityValue=cityName.value;
    if(cityValue === ""){
       city_name.innerText = ' write name before you search';
       datahide.classList.add('data_hide');
       last_hide.classList.add('data_hide');
       temp_status.src="";
       temp_status.style="";

    }
   
    else{
        try{
        let API=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=fa262247dc685cbd44b206f3d55cdea3`;
      const response = await fetch(API);
      const data= await response.json();
      const arrData=[data];
      city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
        // temp.innerText=arrData[0].main.temp;
        temp_real_val.innerText=arrData[0].main.temp;
        min.innerText=arrData[0].main.temp_min;
        max.innerText=arrData[0].main.temp_max;
        // temp_status.innerText=arrData[0].weather[0].main;
        const tempMood=arrData[0].weather[0].main;
        if(tempMood === "sun"){
            temp_status.src="images/sun.gif";
            temp_status.style="width: 48%;margin-left: 50px;margin-bottom: 20px;border-radius:25px"
        }
       else if(tempMood === "Clear"){
            temp_status.src="images/sun.gif";
            temp_status.style="width: 48%;margin-left: 50px;margin-bottom: 20px;border-radius:25px";
        }
      else if(tempMood === "Clouds"){
        temp_status.src="images/clouds.gif";
        temp_status.style="width: 48%;margin-left: 50px;margin-bottom: 20px; border-radius:25px"
        }
      else if(tempMood === "Rain"){
        temp_status.src="images/rain.gif";
        temp_status.style="width: 48%;margin-left: 50px;margin-bottom: 20px; border-radius:25px"
        }
        else if(tempMood === "Haze"){
            temp_status.src="images/wind.gif";
        temp_status.style="width: 48%;margin-left: 50px;margin-bottom: 20px; border-radius:25px"
        }
        else{
            temp_status.src="images/foggy.gif";
            temp_status.style="width: 48%;margin-left: 50px;margin-bottom: 20px;border-radius:25px;"
        }
        last_hide.classList.remove('data_hide');
        datahide.classList.remove('data_hide');
      }
      catch{
        city_name.innerText = 'Enter city name properly';
        datahide.classList.add('data_hide');
        last_hide.classList.add('data_hide');
        temp_status.src="";
        temp_status.style="";
      }
    }
}
submitBtn.addEventListener('click',getInfo);