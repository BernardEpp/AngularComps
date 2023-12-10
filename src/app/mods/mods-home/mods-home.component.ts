import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    {title: 'Why is the sky blue', content: 'Because it is.'},
    {title: 'What does an orange taste like?', content: 'An orange tastes like an orange'},
    {title: 'WHat color is that cat', content: 'Orange'}
  ]
  
  onClick() {
    this.modalOpen = !this.modalOpen;

}

}
