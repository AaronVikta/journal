import {Note} from './../models/Note.model';

export namespace NoteActions{
    export class AddNote{
        static readonly type = '[Note] Add';
    
        constructor(public payload: Note){}
    }
    
    export class FectchNotes{
        static readonly type = '[Note] Fetch';
      
    }
    
    export class markRead {
        static readonly type = '[Todo] markDone';
        constructor(public payload: string, public is_read: boolean) { }
    }
}
