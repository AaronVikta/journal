import {NoteActions} from './../state/Note.actions';
import {Injectable} from '@angular/core';
import {State, NgxsOnInit, Action, StateContext} from '@ngxs/store' 
import {updateItem, patch} from '@ngxs/store/operators';
import { Note } from '../models/Note.model';

export interface NoteStateModel{
    notes: Note[];
}

@State <NoteStateModel>({
    name: 'notes',
    defaults:{
        notes: [],
    }
})
@Injectable()
export class NoteState implements NgxsOnInit {

   async ngxsOnInit(ctx:any){
        await ctx.dispatch(new NoteActions.FectchNotes())
    }

    @Action(NoteActions.AddNote)
    addNote(
        ctx: StateContext<NoteStateModel>,
        { payload }: NoteActions.AddNote,
    ) {
        const state = ctx.getState();

        ctx.setState({
            ...state,
            notes: [
                ...state.notes,
                {
                    ...payload,
                    id: Math.random().toString(36).substring(7),
                    is_read: false
                }
            ],
        }
        );
    }

        @Action(NoteActions.markRead)
        markDone(ctx: StateContext<NoteStateModel>, { payload, is_read }: NoteActions.markRead) {

        ctx.setState(
            patch({
                notes: updateItem((item: any) => item.id === payload, patch({ is_read: !is_read }))
            })
        );
    }

}