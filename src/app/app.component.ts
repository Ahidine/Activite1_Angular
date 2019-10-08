import { Component } from '@angular/core';
import { Post } from './models/post.model';
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor(){
var firebaseConfig = {
    apiKey: "AIzaSyCMz71M0bn98FwjRfcaXoD5oK2uIo6K7DU",
    authDomain: "actvitefincoursoc.firebaseapp.com",
    databaseURL: "https://actvitefincoursoc.firebaseio.com",
    projectId: "actvitefincoursoc",
    storageBucket: "",
    messagingSenderId: "266193422314",
    appId: "1:266193422314:web:71fcd4f2f8984a367b9493"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
}

