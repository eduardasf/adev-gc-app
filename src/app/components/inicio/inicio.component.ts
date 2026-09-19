import { Component } from '@angular/core';

export interface HorarioCulto {
  dia: string;
  titulo: string;
  horario: string;
  descricao: string;
  aberto?: boolean;
}

export interface EventoEspecial {
  data: string;
  mes: string;
  titulo: string;
  horario: string;
  local: string;
}

@Component({
  selector: 'app-inicio.component',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {

  abaAtiva: 'horarios' | 'eventos' = 'horarios';

  horarios: HorarioCulto[] = [
    {
      dia: 'TER',
      titulo: 'Culto de Ensino',
      horario: '19:00H',
      descricao: 'Estudo aprofundado das Sagradas Escrituras para edificação e crescimento espiritual de toda a igreja.',
      aberto: false,
    },
    {
      dia: 'QUA',
      titulo: 'Tarde de Milagres',
      horario: '15:00H',
      descricao: 'Clamor com orações de cura, libertação e manifestação do poder de Deus.',
      aberto: false,
    },
    {
      dia: 'QUI',
      titulo: 'Culto de Oração',
      horario: '19:30H',
      descricao: 'Momento de intercessão, busca pelo Espírito Santo e intimidade com Deus.',
      aberto: false,
    },
    {
      dia: 'DOM',
      titulo: 'Escola B. Dominical',
      horario: '09:00H',
      descricao: 'Classes bíblicas divididas por faixas etárias com ensino dinâmico da Palavra.',
      aberto: false,
    },
    {
      dia: 'DOM',
      titulo: 'Culto da Família',
      horario: '19:00H',
      descricao: 'Celebração com louvor, adoração e ministração especial para as famílias.',
      aberto: false,
    },
  ];

  eventosEspeciais: EventoEspecial[] = [
    {
      data: '28',
      mes: 'SET',
      titulo: 'Vigília da Vitória',
      horario: '22:00H',
      local: 'Templo Sede',
    },
    {
      data: '12',
      mes: 'OUT',
      titulo: 'Dia das Crianças - Departamento Infantil',
      horario: '15:00H',
      local: 'ADEV Grande Colorado',
    },
  ];

  setAba(aba: 'horarios' | 'eventos'): void {
    this.abaAtiva = aba;
  }

  toggleHorario(index: number): void {
    this.horarios[index].aberto = !this.horarios[index].aberto;
  }
}
