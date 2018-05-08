import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  loveIts = 0;
  created_at = new Date();


  constructor() {}

  ngOnInit() {
  }

  onLoveIt() {
    this.loveIts++;

  }

  onDontLoveIt() {
    this.loveIts--;

  }

}
