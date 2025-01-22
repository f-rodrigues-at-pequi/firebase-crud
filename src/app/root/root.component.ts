import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import { map, Observable } from 'rxjs';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';

export interface Item {
  key: string;
  email: string;
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  standalone: false,
 
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  email = '';
  password = '';

  formNewName = '' as string;
  formNewAge = '' as string;

  listRef: any;
  list: Observable<Item[]>;

  constructor(public auth: AuthService, database: AngularFireDatabase) {
    this.listRef = database.list('items');
    this.list = this.listRef.snapshotChanges().pipe(
      map((changes: SnapshotAction<Item>[]) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
      )
    )
  }

  ngOnInit(): void {}

  addItem() {
    this.listRef.push({
      nome: this.formNewName,
      idade: this.formNewAge,
      email: this.email,
    })

    this.formNewName = '';
    this.formNewAge = '';
  }

  deleteItem(key: string) {
    this.listRef.remove(key); 
  }
}
