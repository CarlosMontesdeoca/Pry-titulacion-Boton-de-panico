import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  contactForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    // private contactCrudService: ContactCrudService 
  ) {
    this.contactForm = this.formBuilder.group({
      name: [''],
      phone: ['']
    })
  }

  ngOnInit() { }

  // onSubmit() {
  //   if (!this.contactForm.valid) {
  //     return false;
  //   } else {
  //     this.contactCrudService.createUser(this.contactForm.value)
  //       .subscribe((response) => {
  //         this.zone.run(() => {
  //           this.contactForm.reset();
  //           this.router.navigate(['/list']);
  //         })
  //       });
  //   }
  // }
}


//https://remotestack.io/ionic-angular-crud-app-with-node-express-and-mongodb/