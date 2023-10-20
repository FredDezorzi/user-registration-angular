import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserList } from 'src/app/interfaces/user-list';
import { UserApiService } from 'src/app/service/user-api.service';
import Swal from 'sweetalert2';
import Inputmask from 'inputmask';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  @ViewChild('dateInput') dateInput!: ElementRef;

  
  public userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    birthDay: new FormControl('', [Validators.required,
      this.dateInPast,]),
  })

  constructor(private userApiService: UserApiService, private route: ActivatedRoute, private router: Router){}
  public userId: number = 0;

  ngOnInit(){
    const idParam = this.route.snapshot.paramMap.get('id') || "";
    this.userId = idParam ? parseInt(idParam, 10) : 0; 
    if(this.userId){
      this.userApiService.getUserById(this.userId).subscribe((user:UserList)=> {
        this.userForm.setValue({
          name: user.name,
          email: user.email,
          password: user.password,
          birthDay: user.birthDay,
        });
      })
    }
    
  }

  ngAfterViewInit() {
    Inputmask({
      mask: '99/99/9999',
      showMaskOnHover: false,
    }).mask(this.dateInput.nativeElement);
  }

  insertUser(){
    const user:UserList = this.userForm.value as UserList;
    this.userApiService.insertUser(user).subscribe({
      next: (res) => {
        Swal.fire(
          'Success!',
          `${user.name} was successfully registered`,
          'success'
        );
        this.userForm.reset();
      },
      error: (err) => {
        Swal.fire(
          'Error!',
          'Unable to register the user. Check that the information is correct.',
          'error'
        );
      }
    });
  }

  editUser(){
    const user:UserList = this.userForm.value as UserList;
    this.userApiService.editUser(user,this.userId).subscribe({
      next: (res) => {
        Swal.fire(
          'Success!',
          `User ${this.userId} was edited successfully`,
          'success'
        );
        this.router.navigate(['']);
      },
      error: (err) => {
        Swal.fire(
          'Error!',
          'Unable to edit user. Check that the information is correct.',
          'error'
        );
      }
    })
  }
  
  dateInPast(control: AbstractControl): ValidationErrors | null {
    const inputDateStr = control.value;
  
    if (inputDateStr === null) {
      return null;
    }
  
    const match = inputDateStr.match(/^(\d{2})\/(\d{2})\/(\d{4})/);
  
    if (!match) {
      return { invalidDate: true };
    }
  
    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);
  
    const inputDate = new Date(year, month - 1, day);
  
    if (isNaN(inputDate.getTime())) {
      return { invalidDate: true };
    }
  
    const currentDate = new Date();
  
    if (inputDate >= currentDate) {
      return { dateInFuture: true };
    }
  
    return null;
  }

}
