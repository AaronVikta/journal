import {Note} from './../models/Note.model';

export namespace NoteActions{
    export class AddNote{
        static readonly type = '[Note] Add';
    
        constructor(public payload: Note){}
    }
    
    export class FetchNotes{
        static readonly type = '[Note[]] Fetch';
      
    }
    
    export class markRead {
        static readonly type = '[Note] markDone';
        constructor(public payload: string, public is_read: boolean) { }
    }
}
