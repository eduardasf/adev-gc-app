import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

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

export interface SlideIgreja {
  imagem: string;
  tag: string;
  titulo: string;
  descricao: string;
}

@Component({
  selector: 'app-inicio.component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent implements OnInit, OnDestroy {
  // Configurações do WhatsApp a partir das variáveis de ambiente
  whatsappUrl: string = `https://wa.me/${environment.whatsappNumero}?text=${encodeURIComponent(environment.whatsappMensagemOracao)}`;

  // Slides do Card da Igreja
  slidesIgreja: SlideIgreja[] = [
    {
      imagem: 'assets/img/igreja.png',
      tag: 'NOSSO TEMPLO',
      titulo: 'ADEV Grande Colorado',
      descricao: 'Assembleia de Deus - Ministério Edificar Vidas',
    },
    {
      imagem: 'assets/img/igreja_culto.png',
      tag: 'ADORAÇÃO',
      titulo: 'Comunhão e Fé',
      descricao: 'Momentos inspiradores de louvor e ensino bíblico.',
    },
  ];

  slideIgrejaAtual: number = 0;
  private autoPlayTimer: any = null;
  isAutoPlayPausado: boolean = false;
  mostrarTooltipInicial: boolean = true;
  private tooltipTimer: any = null;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.iniciarAutoPlay();
      this.iniciarTimerTooltip();
    }
  }

  ngOnDestroy(): void {
    this.pararAutoPlay();
    if (this.tooltipTimer) {
      clearTimeout(this.tooltipTimer);
      this.tooltipTimer = null;
    }
  }

  iniciarTimerTooltip(): void {
    this.tooltipTimer = setTimeout(() => {
      this.mostrarTooltipInicial = false;
    }, 6000);
  }

  proximoSlideIgreja(): void {
    this.slideIgrejaAtual = (this.slideIgrejaAtual + 1) % this.slidesIgreja.length;
  }

  anteriorSlideIgreja(): void {
    this.slideIgrejaAtual =
      (this.slideIgrejaAtual - 1 + this.slidesIgreja.length) % this.slidesIgreja.length;
  }

  irParaSlideIgreja(index: number): void {
    this.slideIgrejaAtual = index;
  }

  iniciarAutoPlay(): void {
    this.pararAutoPlay();
    if (!this.isBrowser) return;
    this.autoPlayTimer = setInterval(() => {
      if (!this.isAutoPlayPausado) {
        this.proximoSlideIgreja();
      }
    }, 6000);
  }

  pararAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  pausarAutoPlay(): void {
    this.isAutoPlayPausado = true;
  }

  retomarAutoPlay(): void {
    this.isAutoPlayPausado = false;
  }

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
