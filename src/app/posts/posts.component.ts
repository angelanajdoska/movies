  
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
@Input() pictureUrl: string; 
name:string;
description:string;
  constructor() { }

  ngOnInit() {
  }

}
