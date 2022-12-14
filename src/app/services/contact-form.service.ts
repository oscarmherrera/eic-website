import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  private api = "https://mailthis.to/oscar@e-i-c.global"

  constructor(private http: HttpClient) { }
  PostMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text'}).pipe(
        map(
            (response) => {
              if (response) {
                return response;
              }
            },
            (error: any) => {
              return error
            }
        )
    )

  }
}
