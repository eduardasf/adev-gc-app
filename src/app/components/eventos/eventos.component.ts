import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface HorarioCulto {
  dia: string;
  frequencia: string;
  titulo: string;
  horario: string;
  descricao: string;
  aberto?: boolean;
}

export interface EventoIgreja {
  data: string;
  mes: string;
  frequencia: string;
  titulo: string;
  horario: string;
  descricao: string;
  destaque?: boolean;
  aberto?: boolean;
}

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
})
export class EventosComponent implements OnInit {
  abaAtiva: 'todos' | 'horarios' | 'eventos' = 'todos';

  // Horários Fixos da Semana
  horarios: HorarioCulto[] = [
    {
      dia: 'TER',
      frequencia: 'Terça-feira',
      titulo: 'Culto de Ensino',
      horario: '19:30H',
      descricao:
        'Estudo aprofundado das Sagradas Escrituras para edificação, fortalecimento na fé e crescimento espiritual de toda a igreja.',
      aberto: false,
    },
    {
      dia: 'QUA',
      frequencia: 'Quarta-feira',
      titulo: 'Tarde de Milagres',
      horario: '15:00H',
      descricao:
        'Clamor com orações de cura, libertação e manifestação do poder e da graça de Deus.',
      aberto: false,
    },
    {
      dia: 'QUI',
      frequencia: 'Quinta-feira',
      titulo: 'Culto de Oração',
      horario: '19:30H',
      descricao:
        'Momento de intercessão pelas famílias, busca pelo Espírito Santo e intimidade com Deus.',
      aberto: false,
    },
    {
      dia: 'DOM',
      frequencia: 'Domingo pela manhã',
      titulo: 'Escola Bíblica Dominical (EBD)',
      horario: '09:00H',
      descricao:
        'Classes bíblicas divididas por faixas etárias (crianças, jovens e adultos) com ensino dinâmico da Palavra de Deus.',
      aberto: false,
    },
    {
      dia: 'DOM',
      frequencia: 'Domingo à noite',
      titulo: 'Culto da Família',
      horario: '19:00H',
      descricao:
        'Celebração congregacional com louvor, adoração e ministração especial da Palavra para todas as famílias.',
      aberto: false,
    },
  ];

  // Eventos que Ocorrem na Igreja
  eventos: EventoIgreja[] = [
    {
      data: '17-18',
      mes: 'OUT',
      frequencia: '17 e 18 de Outubro',
      titulo: '30º Aniversário da Igreja',
      horario: '19:30H',
      descricao:
        'Três décadas de fé, milagres e proclamação do Evangelho no Grande Colorado. Dois dias especiais com preletores e louvores convidados.',
      destaque: true,
      aberto: false,
    },
  ];

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  setAba(aba: 'todos' | 'horarios' | 'eventos'): void {
    this.abaAtiva = aba;
  }

  toggleHorario(index: number): void {
    this.horarios[index].aberto = !this.horarios[index].aberto;
  }

  toggleEvento(index: number): void {
    this.eventos[index].aberto = !this.eventos[index].aberto;
  }

  compartilharWhatsApp(titulo: string, horario: string, diaOuData: string, event: MouseEvent): void {
    event.stopPropagation();

    const mensagem = `A paz do Senhor! 🙏\n\nQuero te convidar para o culto *${titulo}* na ADEV Grande Colorado!\n\n📅 ${diaOuData} às ${horario}\n📍 ADEV Grande Colorado\n\nVenha estar conosco para adorar ao Senhor!`;

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagem)}`;

    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  }
}
