import { Component, OnInit } from '@angular/core';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faUser = faUser;
  faSignOutAlt = faSignOutAlt;

  get isLogged() { return this.userService.isLogged; }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/course/list']);
    });
  }

}
