import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../interface/weather.interface';
import { WeatherService } from '../service/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(
    private weatherService: WeatherService
  ) {

  }

  cityName: string = 'Seoul';
  cityNameInput: string = '';
  weatherData?: WeatherData;

  ngOnInit(): void {
    
    this.getWeatherData(this.cityName);
    this.cityNameInput = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityNameInput);
    this.cityName = this.cityNameInput;
    this.cityNameInput = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
      }
    })
  }

}
