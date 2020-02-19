import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  registerHandler(formData) {
    this.userService.registerUser(formData);
    this.router.navigate(['/user/login']);
  }

}
