import { Component, Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';


export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  }

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate>{

    canDeactivate(component: CanComponentDeactivate) {
      return component.canDeactivate
      ?  window.confirm('You have not saved this event, do you want really want to cancel?')
      : true
      }
    }