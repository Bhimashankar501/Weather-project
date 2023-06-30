import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'fd2ada5f97660d89724cf8f1427c6663&units=metric'; // Replace with your actual API key

  constructor(private http: HttpClient) {}

  getWeatherByCity(cityname: string='london'): Observable<any> {
    const url = `${this.apiUrl}?q=${cityname}&appid=${this.apiKey}`;
    return this.http.get(url);
  }

 
  
}
