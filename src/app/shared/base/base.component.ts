import { Api } from 'src/app/models/api.models';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  template: '',
  styleUrls: [],
})
export class BaseComponent<T extends any> {
  loading: boolean = true;
  toast: boolean = false;
  paramsConfig: Api.Params = { url: '', params: {}, body: {} };
  private _responseService: any;

  public get getResponseService(): any {
    return this._responseService;
  }
  public set setResponseService(value: any) {
    this._responseService = value;
  }

  constructor(protected readonly apiService: ApiService<T>) {}

  ngOnInit(): void {}

  getRequest(): void {
    this.apiService.getService(this.paramsConfig).subscribe({
      next: (response) => {
        this.setResponseService = response;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.apiService.loginSubject.next(true);
      },
      complete: () => {},
    });
  }
  postRequest(): void {
    this.apiService.postService(this.paramsConfig).subscribe({
      next: (response) => {
        this.setResponseService = response;
        this.loading = false;
        this.apiService.loginSubject.next(false);
      },
      error: () => {
        this.toast = true;
        this.loading = false;
        this.apiService.loginSubject.next(true);
      },
      complete: () => {},
    });
  }
}
