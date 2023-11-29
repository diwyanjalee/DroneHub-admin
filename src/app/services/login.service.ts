import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
  ) {}

  signIn(email: string, password: string) :Promise<any> {

    return this.afAuth.signInWithEmailAndPassword('tharinduariyarathna94@gmail.com', 'QPerh@1027').then((res)=>{
      return res;
    }).catch((err)=>{
      console.log("==============err from server ========", err)
      return err.message;
    })
  }
}
