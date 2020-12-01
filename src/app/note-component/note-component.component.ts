import { Component } from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {NoteActions} from './../state/Note.actions';
import {FormGroup, FormControl} from '@angular/forms';
import {NoteState} from './../state/Note.state'
import {Note} from './../models/Note.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-note-component',
  templateUrl: './note-component.component.html',
  styleUrls: ['./note-component.component.css']
})
export class NoteComponentComponent  {

  title!: 'Notes-app';

  @Select(NoteState)
  notes$ :Observable<Note> | undefined

  addForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  })

  constructor(private store:Store) { }
  onSubmit(form: any){
    this.store.dispatch(new NoteActions.AddNote(form)).subscribe(() => {
      this.addForm.reset();
    });
  }

  markDone(id: string, is_read: boolean){
    this.store.dispatch(new NoteActions.markRead(id, is_read));
  }
}