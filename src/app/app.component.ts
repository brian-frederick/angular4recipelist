import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userView: string = 'Recipes';
  title = 'app works!';

  changePage(page: string){
    this.userView = page;
  }
}
