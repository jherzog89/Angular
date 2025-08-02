import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ManipulatedString } from '../../list-to-dos/list-to-dos';
import { REVERSE_WORDS_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ReverseWordsService {

  constructor(private http:HttpClient) { }

      //POST
      sendWordsReversal(manipString : ManipulatedString){
        console.log('calling' + REVERSE_WORDS_URL);
        return this.http.post<ManipulatedString[]>(
          `${REVERSE_WORDS_URL}`
          , manipString);
      }
}
