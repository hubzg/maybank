import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup
  editable: boolean = false

  constructor(
    private toast: ToastController
  ) {

  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.compose([
        Validators.email,
        Validators.required
      ])),

      'street': new FormControl('', Validators.required),
      'suite': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'zipCode': new FormControl('', Validators.required),

      'phone': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ])),

      'website': new FormControl('', Validators.required),
      'company.name': new FormControl('', Validators.required)
    });
  }

  async register(form) {
    this.editable = true
    const toast = await this.toast.create(
      { 
        message: `${form.name} successfully registered`,
        duration: 2000
       }
      )
    toast.present()
  }

}
