import { Component, OnInit } from '@angular/core';

import { MainService } from '../../services/main.service';


@Component({
  selector: 'app-skor-map',
  templateUrl: './skor-map.component.html',
  styleUrls: ['./skor-map.component.css']
})
export class SkorMapComponent implements OnInit {
  lat: number = -6.2505;
  lng: number = 106.825;
  radius: number = 1000;
  position: {lat: number, lng: number} = {lat: -6.2505, lng: 106.825};

  constructor(private service: MainService) {
    console.log("service", service)
    service.people().subscribe(
      (resp) => {
        console.log("resp", resp)
      },
      (err) => {
        console.log("error", err)
      }
    )

  }

  ngOnInit() {
  }

  clickedMarker(){
    console.log("clicked")
  }

  onDragEnd(event){
    console.log(event)
    this.position = event.coords;

  }

}
