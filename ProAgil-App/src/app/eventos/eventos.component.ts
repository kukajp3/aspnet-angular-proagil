import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  eventos: any;

  constructor(private http: HttpClient) {}

  getEventos() {
    this.http.get('http://localhost:5000/api/values').subscribe(
      (res) => {
        this.eventos = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.getEventos();
  }
}
