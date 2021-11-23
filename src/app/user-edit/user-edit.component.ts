import { Component, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { UserService } from '../core/services/user.service'
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  @ViewChild(UserListComponent) child: any;

  id: any
  users: any = {}

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.users = JSON.parse(this.id)
    console.log(this.users,"Users")
    // this.userService.getById(this.id).subscribe((x) => {
    //   this.users = x.data
    // })
  }

  Submit() {
    this.userService
      .updateUserData(this.id, this.users)
      .subscribe((res: any) => {
        if (res.status == 200) {
          this.toastrService.success(res.message, 'Success !')
          this.router.navigateByUrl('/user-list')
        } else {
          this.toastrService.error(res.message, 'Error !')
        }
      })
  }
}
