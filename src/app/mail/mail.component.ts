import { Component, OnInit } from '@angular/core';
import { Mail } from '../mail';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  public mails: Mail[] = [];
  constructor(private mailService: MailService) { 
    this.mailService.getMail().subscribe(
      (data: any) => {
        this.mails = data;
      },
      (err: any) => {
        alert('Internal Server error');
      }
     )

  }

  ngOnInit(): void {
  }

}
