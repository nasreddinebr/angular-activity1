import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },

    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },

    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    }

  ];

  constructor() {

  }


}
