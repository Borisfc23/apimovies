import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MoviesGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (
      sessionStorage.getItem('request_Token') &&
      sessionStorage.getItem('LoginFlag')
    ) {
      return true; //aqui si permite si cumple la condicion y puedes acceder a las rutas
    }
    this.router.navigate(['login']);
    return false; //el false es cuando no permite acceder a las rutas protegidas y te redirige
  }
}
