import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public deathlist = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.deathlist.push({ name: "Travel to Spain" });

  }

  home() {
    this.api.home().subscribe(response => {
      console.log(response);
    })
  }

  clear() {
    this.api.clear().subscribe(response => {
      console.log(response);
    });
  }

  write() {
    const payload = [{
      user_id: "chance123",
      name: "Chance",
      category: "unknown",
      location: "unknown",
      price: "0",
      resources: "unknown"
    }];
    this.api.write(payload).subscribe(response => {
      console.log(response);
    });
  }
}
