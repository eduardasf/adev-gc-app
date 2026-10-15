import { Component, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface SlideIgreja {
  imagem: string;
  tag: string;
  titulo: string;
  descricao: string;
}

export interface MembroEquipe {
  nome: string;
  cargo: string;
  departamento: string;
  foto: string;
  descricao: string;
}

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent implements OnInit, OnDestroy {
  // =========================================================================
  // 1. CARROSSEL DE IMAGENS DA IGREJA (HERO)
  // =========================================================================
  slidesIgreja: SlideIgreja[] = [
    {
      imagem: 'assets/img/banner.jpg',
      tag: 'TEMPLO PRINCIPAL',
      titulo: 'ADEV Grande Colorado',
      descricao: 'Um espaço de adoração, paz e acolhimento para você e toda a sua família.'
    },
    {
      imagem: 'assets/img/igreja.png',
      tag: 'NOSSA COMUNIDADE',
      titulo: 'Uma Igreja Feita de Pessoas para Pessoas',
      descricao: 'Vivendo em comunhão e aprendendo juntos o caminho da verdade e do amor cristão.'
    },
    {
      imagem: 'assets/img/banner2.png',
      tag: 'CELEBRAÇÃO & LOUVOR',
      titulo: 'Momentos Marcantes na Presença de Deus',
      descricao: 'Cultos dinâmicos com adoração sincera, oração fervorosa e comunhão profunda.'
    },
    {
      imagem: 'assets/img/banner3.jpg',
      tag: 'ENSINO & PROPÓSITO',
      titulo: 'Edificação Sólida na Palavra',
      descricao: 'Estudos bíblicos, Escola Dominical e discipulado para todas as gerações.'
    }
  ];

  slideIgrejaAtual: number = 0;
  private autoPlayTimer: any = null;
  isAutoPlayPausado: boolean = false;

  // =========================================================================
  // 3. CARROSSEL DE PESSOAS E CARGOS
  // =========================================================================
  membrosEquipe: MembroEquipe[] = [
    {
      nome: 'Pr. Carlos Andrade',
      cargo: 'Pastor Presidente',
      departamento: 'Diretoria Executiva',
      foto: 'assets/img/equipe/pastor-presidente.jpg',
      descricao: 'Liderança espiritual, cuidado pastoral e ministração da Palavra.'
    },
    {
      nome: 'Pra. Débora Andrade',
      cargo: 'Pastora & Ministério de Mulheres',
      departamento: 'Ministério Feminino',
      foto: 'assets/img/equipe/pastora-mulheres.jpg',
      descricao: 'Mentoria familiar, aconselhamento e coordenação feminina.'
    },
    {
      nome: 'Pr. Marcos Oliveira',
      cargo: 'Pastor Vice-Presidente',
      departamento: 'Ensino Teológico',
      foto: 'assets/img/equipe/pastor-vice.jpg',
      descricao: 'Apoio à diretoria, formação de obreiros e Escola Dominical.'
    },
    {
      nome: 'Lucas Gabriel',
      cargo: 'Líder da Juventude',
      departamento: 'Ministério Jovem',
      foto: 'assets/img/equipe/lider-jovens.jpg',
      descricao: 'Discipulado de jovens, eventos dinâmicos e conexão da nova geração.'
    },
    {
      nome: 'Camila Silva',
      cargo: 'Líder de Louvor e Adoração',
      departamento: 'Música & Artes',
      foto: 'assets/img/equipe/lider-louvor.jpg',
      descricao: 'Direção do coral, bandas e atmosfera de adoração nos cultos.'
    },
    {
      nome: 'Diácono André Santos',
      cargo: 'Diácono & Ação Social',
      departamento: 'Diaconia e Assistência',
      foto: 'assets/img/equipe/diacono-social.jpg',
      descricao: 'Recepção, apoio logístico e assistência às famílias da comunidade.'
    }
  ];

  indiceEquipe: number = 0;
  itensPorVez: number = 4;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.atualizarItensPorVez();
      this.iniciarAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.pararAutoPlay();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (this.isBrowser) {
      this.atualizarItensPorVez();
    }
  }

  // --- LÓGICA DO CARROSSEL HERO (IGREJA) ---
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

  // --- LÓGICA DO CARROSSEL DE EQUIPE (PESSOAS E CARGOS) ---
  atualizarItensPorVez(): void {
    if (!this.isBrowser) return;
    const largura = window.innerWidth;
    if (largura >= 1200) {
      this.itensPorVez = 4;
    } else if (largura >= 992) {
      this.itensPorVez = 3;
    } else if (largura >= 640) {
      this.itensPorVez = 2;
    } else {
      this.itensPorVez = 1;
    }

    const max = this.getMaxIndiceEquipe();
    if (this.indiceEquipe > max) {
      this.indiceEquipe = max;
    }
  }

  getMaxIndiceEquipe(): number {
    return Math.max(0, this.membrosEquipe.length - this.itensPorVez);
  }

  proximoEquipe(): void {
    const max = this.getMaxIndiceEquipe();
    if (this.indiceEquipe < max) {
      this.indiceEquipe++;
    } else {
      // Loop contínuo para retorno ao início
      this.indiceEquipe = 0;
    }
  }

  anteriorEquipe(): void {
    const max = this.getMaxIndiceEquipe();
    if (this.indiceEquipe > 0) {
      this.indiceEquipe--;
    } else {
      // Loop contínuo para ir ao final
      this.indiceEquipe = max;
    }
  }

  irParaEquipe(idx: number): void {
    const max = this.getMaxIndiceEquipe();
    this.indiceEquipe = Math.min(Math.max(0, idx), max);
  }

  getPaginasEquipe(): number[] {
    const max = this.getMaxIndiceEquipe();
    const paginas: number[] = [];
    for (let i = 0; i <= max; i++) {
      paginas.push(i);
    }
    return paginas;
  }

  getTranslateXEquipe(): string {
    const percentPorItem = 100 / this.itensPorVez;
    const offset = this.indiceEquipe * percentPorItem;
    return `translateX(-${offset}%)`;
  }
}
