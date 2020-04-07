class Forecast {
    constructor(){
        this.key = '9GY7jdTpNuUAYvMJVfINgisrMZfaK6oK';
        this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){

     const cityDets = await this.getCity(city);
     const weather = await this.getWeather(cityDets.Key);
     return { cityDets,weather};

    }

    async getCity(city){
      
        const query = `?apikey=${this.key}&q=${city}`;

        const resposne = await fetch(this.cityURI + query);

        const data = await resposne.json();

        return data[0];

    }

    async getWeather(id){

        const query = `${id}?apikey=${this.key}`;

        const response = await fetch(this.weatherURI + query);

        const data = await response.json();

        return data[0];
    }
}

  
  

