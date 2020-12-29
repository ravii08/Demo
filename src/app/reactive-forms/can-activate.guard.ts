import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  
  private router: Router;

  constructor(router : Router) {
    this.router = router;
  }
  
  public canActivate(
    ActivatedRouteSnapshot: ActivatedRouteSnapshot,
    RouterStateSnapshot: RouterStateSnapshot
  ): boolean {

    if (this.isPageRefresh() ) {
      console.log("Reactive form not allowed on refresh");
      this.router.navigate(['/']);
      return false;
      
    }
    return true;
  }

  isPageRefresh(): boolean {
    return ( ! this.router.navigated );
  }
}
