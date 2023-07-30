import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ConstantUri } from 'src/app/utils/constantUri';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { LoginModel } from 'src/app/models/Login.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BaseComponent<LoginModel.Login> {
  formLogin!: FormGroup; //indicamos que no sera nulo
  viewToast: boolean = this.toast;
  override set setResponseService({ request_token }: LoginModel.Login) {
    sessionStorage.setItem('request_Token', request_token);
    sessionStorage.setItem('LoginFlag', 'true');
    this.router.navigate(['populars']);
  }

  constructor(
    private formBuilder: FormBuilder,
    protected override readonly apiService: ApiService<LoginModel.Login>,
    private router: Router
  ) {
    super(apiService);
  }
  override ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    const { username, password } = this.formLogin.value;
    const body = {
      username,
      password,
      request_token: sessionStorage.getItem('requestToken'),
    };
    const configPost = {
      url: ConstantUri.validateWithLogin,
      params: ConstantUri.tokenMe,
      body: JSON.stringify(body),
    };
    this.paramsConfig.url = ConstantUri.validateWithLogin;
    this.paramsConfig.params = ConstantUri.tokenMe;
    this.paramsConfig.body = JSON.stringify(body);
    this.postRequest();
  }
  closeToast() {
    this.toast = false;
  }
}
