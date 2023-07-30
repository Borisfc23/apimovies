import { ApiService } from './services/api.service';
import { Component } from '@angular/core';
import { ConstantUri } from './utils/constantUri';
import { BaseComponent } from './shared/base/base.component';
import { LoginModel } from './models/Login.models';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends BaseComponent<LoginModel.Login> {
  override set setResponseService({ request_token }: LoginModel.Login) {
    sessionStorage.setItem('requestToken', request_token);
  }

  constructor(
    protected override readonly apiService: ApiService<LoginModel.Login>
  ) {
    super(apiService);
  }
  override ngOnInit(): void {
    initFlowbite();
    //aqui generamos el 1er token para luego acceder al login
    this.paramsConfig.url = ConstantUri.tokenNew;
    this.paramsConfig.params = ConstantUri.tokenMe;
    this.getRequest();
  }
}
