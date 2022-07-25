import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  features:any[] = []

  constructor() { }

  ngOnInit(): void {
     fetch("http://localhost:3000/MRData").then(res => res.json()).then((res) => {
      this.features = res.DriverTable.Drivers
      console.log(this.features)
  })

  }
  // "driverId":"abate","url":"http:\/\/en.wikipedia.org\/wiki\/Carlo_Mario_Abate","givenName":"Carlo","familyName":"Abate","dateOfBirth":"1932-07-
}
