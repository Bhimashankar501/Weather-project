import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myWeather: any;
  city: any;
  temperature: number = 0;
  min_temp: number = 0;
  max_temp: number = 0;
  humidity: number = 0;
  speed: number = 0;
  cityname: string='London';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.setDefaultCity();
  }

  onSubmit() {
    if (this.cityname) {
      this.getWeatherData();
    }
  }

  private setDefaultCity() {
    const defaultCity = 'London'; 
    this.cityname = defaultCity;
    this.getWeatherData();
  }

  private getWeatherData() {
    if (this.cityname) {
      this.weatherService.getWeatherByCity(this.cityname).subscribe({
        next: (res) => {
          this.myWeather = res;
          this.city = this.myWeather.name;
          this.temperature = this.myWeather.main.temp;
          this.min_temp = this.myWeather.main.temp_min;
          this.max_temp = this.myWeather.main.temp_max;
          this.humidity = this.myWeather.main.humidity;
          this.speed = this.myWeather.wind.speed;
        },
        error: (error) => console.log(error.message),
        complete: () => console.info('API call completed')
      });
    }
  }
}
