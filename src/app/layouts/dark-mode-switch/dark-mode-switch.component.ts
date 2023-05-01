import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-dark-mode-switch',
  templateUrl: './dark-mode-switch.component.html',
  styleUrls: ['./dark-mode-switch.component.scss']
})
export class DarkModeSwitchComponent {
  isDarkThemeActive = false;

  constructor(@Inject(DOCUMENT)private document: Document) {}

  ngOnInit(): void {
    const storedValue = localStorage.getItem('isDarkThemeActive');
    
    if (storedValue === 'true'){
      this.isDarkThemeActive = true;
      this.document.body.classList.add('dark-mode');
    } else {
      this.isDarkThemeActive = false;
      this.document.body.classList.remove('dark-mode');
    } 
    
  }

  onChange(newValue: boolean): void{
    this.isDarkThemeActive = newValue;

    if (newValue) {
      localStorage.setItem('isDarkThemeActive', 'true');
      this.document.body.classList.add('dark-mode')
    } else {
      localStorage.setItem('isDarkThemeActive', 'false');
      this.document.body.classList.remove('dark-mode')
    }

  }
}
