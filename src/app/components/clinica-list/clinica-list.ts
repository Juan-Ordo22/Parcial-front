import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicaService } from '../../services/clinica.service';

@Component({
  selector: 'app-clinica-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clinica-list.html',
  styleUrls: ['./clinica-list.css']
})
export class ClinicaListComponent implements OnInit {

  clinicas: any[] = [];

  constructor(private service: ClinicaService) {}

  ngOnInit(): void {
    this.service.listar().subscribe(data => {
      this.clinicas = data;
    });
  }
}
