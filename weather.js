let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

let b = document.querySelector('#print');
b.addEventListener('click', greeting);

function greeting() {
	let i = document.querySelector('input[name="toshi"]');
	let toshiid = i.value;
	console.log(toshiid);
}

console.log(data.name);
console.log(data.weather[0].description);
console.log(data.main.temp_max);
console.log(data.main.temp_min);


let div = document.querySelector('div#result');

let h1 = document.createElement('h1'); 
h1.textContent = data.name; 
div.insertAdjacentElement('afterbegin',h1); 

let spanmax = document.querySelector('span#max');
max.textContent = data.main.temp_max; 

let spanmin = document.querySelector('span#min');
min.textContent = data.main.temp_min;

let p1 = document.createElement('p'); 
p1.textContent = data.weather[0].description; 
div.insertAdjacentElement('beforeend',p1);