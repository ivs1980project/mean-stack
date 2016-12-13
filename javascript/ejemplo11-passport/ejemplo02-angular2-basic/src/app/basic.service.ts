import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BasicService {

  constructor(private http: Http) { }


  getResultado(): Observable<Response> {
    //let cabeceraDeSeguridad = new Headers({ 'Content-Type': 'application/json' });
    let cabeceraDeSeguridad = new Headers();
    let username = "luis";
    let password = "luis"
    //btoa --> binary to ascii
    cabeceraDeSeguridad.append('Authorization', "Basic " + btoa(username + ":" + password));
    let opcionesDeRequest = new RequestOptions({ headers: cabeceraDeSeguridad });

    return this.http.get("http://127.0.0.1:8080/home", opcionesDeRequest)
      .map((response: Response) => {
        return response;
      })
      .catch((error: any) => {
        console.error("Error!!" + error);
        return Observable.throw("Error al procesar la peticion get")
      });
  }
  /*
    postResultado(): Observable<Response> {
      //let cabeceraDeSeguridad = new Headers({ 'Content-Type': 'application/json' });
      let cabeceraDeSeguridad = new Headers();
      let username = "luis";
      let password = "luis"
      //btoa --> binary to ascii
      cabeceraDeSeguridad.append('Authorization', "Basic " + btoa(username + ":" + password));
      let opcionesDeRequest = new RequestOptions({ headers: cabeceraDeSeguridad });

      return this.http.post("http://127.0.0.1:8080/home", opcionesDeRequest)
        .map((response: Response) => {
          return response;
        })
        .catch((error: any) => {
          console.error("Error!!" + error);
          return Observable.throw("Error al procesar la peticion post")
        });
  }*/

}
