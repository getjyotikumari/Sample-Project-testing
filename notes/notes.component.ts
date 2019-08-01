import { Component, OnInit } from '@angular/core';
import { Notes } from '../notes';
import { NOTES } from '../notes-stock';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
     private notes : Notes[] = NOTES;

  constructor() { }

  ngOnInit() {
  }
  addNote(newNoteText):void{
    const newId = this.notes.length+1;
    const newNote : Notes =
    {
      id:newId,
      text:newNoteText,
      completed: false
    }
    this.notes.push(newNote);
  }

}
