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
      horario: '19:00H',
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
      dia: 'SÁB',
      frequencia: 'Sábado',
      titulo: 'Conexão Jovem',
      horario: '19:30H',
      descricao:
        'Culto vibrante da juventude com louvor contemporâneo, comunhão e ministração bíblica prática direcionada aos jovens.',
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
    {
      data: '01',
      mes: 'NOV',
      frequencia: '1º Domingo do Mês',
      titulo: 'Culto da Santa Ceia do Senhor',
      horario: '19:00H',
      descricao:
        'Celebração solene em memória de Cristo: comunhão, renovação de aliança e gratidão pelo sacrifício da cruz.',
      aberto: false,
    },
    {
      data: '14',
      mes: 'NOV',
      frequencia: 'Sábado Especial',
      titulo: 'Encontro de Casais: Famílias no Altar',
      horario: '19:30H',
      descricao:
        'Uma noite edificante para fortalecer os laços conjugais segundo os princípios de Deus, com palestra temática e comunhão.',
      aberto: false,
    },
    {
      data: '27',
      mes: 'NOV',
      frequencia: 'Sexta para Sábado',
      titulo: 'Grande Vigília da Unidade',
      horario: '22:30H',
      descricao:
        'Madrugada inteira de clamor, adoração profunda e busca pelo avivamento espiritual na presença do Senhor.',
      aberto: false,
    },
    {
      data: '12',
      mes: 'DEZ',
      frequencia: 'Sábado à Tarde',
      titulo: 'Chá das Mulheres Vitoriosas',
      horario: '17:00H',
      descricao:
        'Tarde de comunhão feminina, louvor e ministração voltada para os propósitos e desafios da mulher cristã.',
      aberto: false,
    },
    {
      data: '31',
      mes: 'DEZ',
      frequencia: 'Última Noite do Ano',
      titulo: 'Culto da Virada de Ano',
      horario: '21:30H',
      descricao:
        'Passando a virada de ano no altar do Senhor, com Santa Ceia, adoração e consagração dos novos projetos para o próximo ano.',
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
    const mensagem = `Paz do Senhor! Quero te convidar para o culto *${titulo}* na ADEV Grande Colorado!\n\n📅 ${diaOuData} às ${horario}\n📍 Local: ADEV Grande Colorado\n\nVenha adorar a Deus conosco!`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagem)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  }
}
