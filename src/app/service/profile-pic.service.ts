import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProfilePicService {

  constructor(private afs: AngularFireStorage) { }

  addPicture(file: File) {
    return this.afs.upload("/files" + Math.random() + file.name ,file);
  }

  getPicture(path: string){
    return this.afs.storage.ref().child(path);
  }

}
