import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  id: any;
  property: any;
  imgUrl: any;

  constructor(private firebaseService: FirebaseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Get ID from the query param
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getPropertyDetails(this.id).subscribe(property => {
      this.property = property;
      console.log(property)
    });
  }

}
