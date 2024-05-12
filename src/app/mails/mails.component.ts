import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrl: './mails.component.css',
})
export class MailsComponent {
  @Input({ required: true }) mail: {
    name: string;
    image: string;
    discription: string;
  } = { name: '', image: '', discription: '' };
}
