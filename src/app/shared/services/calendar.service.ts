import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Calendar } from '../models/calendar';

const URL_CALENDARS = '/api/v1/calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  
  constructor(private http: HttpClient){

  }

  getCalendarByDay(date: string): Observable<Calendar[]>{
    return this.http.get(`${environment.URL_API}${URL_CALENDARS}/?date=${date}`)
    .pipe(map((resp: Calendar[]) => {
      return resp;
    }));
  }

  save(calendar: Calendar): Observable<Calendar>{
    return this.http.post(`${environment.URL_API}${URL_CALENDARS}`,calendar)
    .pipe(map((resp: Calendar) => {
      return resp;
    }));
  }

  update(calendar: Calendar): Observable<Calendar>{
    return this.http.put(`${environment.URL_API}${URL_CALENDARS}/${calendar.id}`,calendar)
    .pipe(map((resp: Calendar) => {
      return resp;
    }));
  }

  updateDriverOrTechniqueCalendar(personId: string, calendarId: string, isDriver: boolean): Observable<Calendar> {
    let put = {
      personId,
      calendarId,
      isDriver
    }
    return this.http.put(`${environment.URL_API}${URL_CALENDARS}/update-driver-or-technique-calendar`,put)
    .pipe(map((resp: Calendar) => {
      return resp;
    }))
  }

  updateStatusOrTravelOnCalendar(status: string, calendarId: string, isTravelOn: boolean, travelOn: string): Observable<Calendar> {
    let put = {
      status,
      calendarId,
      isTravelOn,
      travelOn
    }
    return this.http.put(`${environment.URL_API}${URL_CALENDARS}/update-status-or-travel-on-calendar`,put)
    .pipe(map((resp: Calendar) => {
      return resp;
    }))
  }

  updateContractMade(calendarId: string): Observable<Calendar>{
    let put = {
      calendarId,
    }
    return this.http.put(`${environment.URL_API}${URL_CALENDARS}/update-contract-made`,put)
    .pipe(map((resp: Calendar) => {
      return resp;
    }))
  }
  
  availability(startDate: string, endDate: string, clientId: string, equipamentId: string, driverId: string, techniqueId: string): Observable<Calendar[]>{
    return this.http.get(`${environment.URL_API}${URL_CALENDARS}/availability?startDate=${startDate}&endDate=${endDate}&clientId=${clientId}&equipamentId=${equipamentId}&driverId=${driverId}&techniqueId=${techniqueId}`)
    .pipe(map((resp: Calendar[]) => {
      return resp;
    }));
  }
}


