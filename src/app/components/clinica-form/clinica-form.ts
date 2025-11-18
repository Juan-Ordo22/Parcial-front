import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Clinica } from '../../models/clinica';
import { ClinicaService } from '../../services/clinica.service';

@Component({
  selector: 'app-clinica-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clinica-form.html',
  styleUrls: ['./clinica-form.css']
})
export class ClinicaFormComponent {

  clinica: Clinica = { nombre: '', direccion: '', telefono: '' };

  constructor(private service: ClinicaService) {}

  guardar() {
    this.service.crear(this.clinica).subscribe(() => {
      alert('Clínica creada');
      this.clinica = { nombre: '', direccion: '', telefono: '' };
    });
  }
}
