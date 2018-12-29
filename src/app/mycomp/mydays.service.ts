import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MydaysService {

  private days: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'friday'];

  constructor() { }

  getDays(): string[] {
    return this.days;
  }
}
