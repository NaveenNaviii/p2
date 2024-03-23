import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private user:UsersService){}

  result:any

  ngOnInit(): void {
    this.user.getData().subscribe((data)=>{
      this.result=data;
    })
  }
}
