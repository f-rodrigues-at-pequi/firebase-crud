import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-root',
  standalone: false,

  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  email = '';
  password = '';

  constructor(public auth: AuthService) {}

  ngOnInit(): void {

  }
}
