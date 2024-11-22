import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarvellousChkPipe } from './marvellous-chk.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MarvellousChkPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CustomePipe_03';
}
