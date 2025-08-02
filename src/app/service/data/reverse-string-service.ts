import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { REVERSE_STRING_URL } from '../../app.constants';
import { ManipulatedString } from '../../list-to-dos/list-to-dos';

@Injectable({
  providedIn: 'root'
})
export class ReverseStringService {


  constructor(private http:HttpClient) { }

      //POST
      sendStringReversal(manipString : ManipulatedString){
        console.log('calling' + REVERSE_STRING_URL);
        return this.http.post<ManipulatedString[]>(
          `${REVERSE_STRING_URL}`
          , manipString);
      }

    //GET
    refreshManipulatedStrings(){
      return this.http.get<ManipulatedString[]>(`${REVERSE_STRING_URL}`);
    }
    //DELETE
    deleteManipulatedStrings(){
      return this.http.delete<ManipulatedString[]>(`${REVERSE_STRING_URL}`);
    }

}
