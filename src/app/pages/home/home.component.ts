import { Component, OnInit } from '@angular/core';
import { UserList } from 'src/app/interfaces/user-list';
import { UserApiService } from 'src/app/service/user-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public users: UserList[] = [];

  constructor(private userApiService: UserApiService ) { }

  ngOnInit(){
    this.getAllUsers();
  }
  

  getAllUsers(){
    this.userApiService.getAllUsers().subscribe((result: UserList[]) => {
      this.users = result;
    });
  }

  deleteUser(userList: UserList) {
    Swal.fire({
      title: 'Are you sure?',
      text: `You are about to delete User ${userList.id}. This action cannot be undone!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userApiService.deleteById(userList.id).subscribe({
          next: (res) => {
            const message = res['message'];
            Swal.fire(
              'Success!',
              message,
              'success'
              ).then(() => {
                this.getAllUsers();
              });
          },
          error: (err) => {
            const errorMessage = err.error.message;
            Swal.fire(
              'Error!',
              errorMessage,
              'error'
            );
          },
        });
      }
    });
  }
}
