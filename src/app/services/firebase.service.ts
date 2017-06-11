import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {FirebaseObjectObservable} from 'angularfire2/database'; // for getPropertyDetails

@Injectable()
export class FirebaseService {
  properties: FirebaseListObservable<any[]>;
  property: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) {
  }

  getProperties() {
    this.properties = this.db.list('/listings') as FirebaseListObservable<Property[]>;
    return this.properties;
  }

  getPropertyDetails(id: any) {
    this.property = this.db.object('/listings/' + id) as FirebaseObjectObservable<Property>;
    return this.property;
  }
}

interface Property {
  $key?: string;
  title?: string;
  type?: string;
  image?: string;
  city?: string;
  owner?: string;
  bedrooms?: string;
}
