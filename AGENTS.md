# Diretrizes do Agente - ADEV Grande Colorado (ADEV-GC)

Este arquivo documenta todas as diretrizes de desenvolvimento, identidade visual, decisões de arquitetura e regras de negócio para qualquer agente de IA ou desenvolvedor atuando no projeto **ADEV Grande Colorado**.

---

## 1. Visão Geral do Projeto

- **Organização:** Igreja Evangélica Assembleia de Deus - ADEV Grande Colorado (Ministério Edificar Vidas).
- **Localização:** Grande Colorado, Sobradinho – DF.
- **Estrutura do Repositório:**
  - `adev-gc-app/`: Aplicação Web / SPA em Angular 17+ (Standalone Components).
  - `adev-gc-api/`: Backend API (Node.js / Express).

---

## 2. Paleta de Cores & Identidade Visual

As cores da igreja devem ser **rigorosamente respeitadas**. Nunca use cores genéricas, gradientes avermelhados ou laranjas que fujam do padrão:

- **Azul Marinho Oficial (`$navy_blue`):** `#0e2032`  
  Usado para títulos, textos principais, botões outline secundários e rodapés escuros.
- **Amarelo / Dourado Oficial (`$yellow`):** `#f9a728`  
  Usado para tags de seção, ícones temáticos, botões de ação primários (`.btn-pill-yellow`), bordas ativas e destaques.
- **Fundos Neutros:**  
  - Fundo geral: `#ffffff` e tons ultra suaves de cinza/bege (`#f8fafc`, `#fef8eb` para caixas douradas sutis).
- **Tipografia:**  
  - Títulos e Destaques: `Poppins` (`font-poppins`), `weight: 600` e `700`.
  - Corpo de Texto: `Inter` / `sans-serif`.

---

## 3. Regras de Design e Experiência do Usuário (UI/UX)

### 3.1. Regra de Ouro do Mobile: Sem Arrasto Lateral em Filtros
- **NUNCA utilize rolagem ou arrasto horizontal (`overflow-x: auto`) em filtros e abas no mobile.**
- Todos os filtros de navegação no mobile devem caber em uma **grade estática visível de uma só vez** (`grid-template-columns: repeat(N, 1fr)`).
- Use spans responsivos com rótulos concisos no mobile (ex: `GERAL`, `HORÁRIOS`, `EVENTOS`) e rótulos completos no desktop.

### 3.2. Formato e Densidade de Cards
- **Evite poluição visual e excesso de caixas aninhadas.**
- Não use hashtags soltas ou subtítulos redundantes dentro de cards.
- **Aba Ministérios:** Deve ser apresentada em **formato de cards** (3 colunas no desktop, 1 coluna no mobile), contendo ícone temático, título, descrição concisa de 2 linhas, encontros, liderança e botão direto de WhatsApp.
- **Aba Contato:** **NUNCA coloque caixas de texto ou formulários de envio**. O contato deve ser 100% direto através de cards interativos de WhatsApp, Redes Sociais, horários de cultos e mapa com rota.

### 3.3. Citações Bíblicas Editoriais
- Citações bíblicas devem ser apresentadas em estilo editorial clássico com `<blockquote class="verse-quote">`, com traço dourado lateral (`border-left: 3px solid #f9a728`) e tipografia legível, evitando caixas artificiais com aparência de IA.

---

## 4. Estrutura das Páginas e Funcionalidades

| Rota | Componente | Objetivo & Regras |
| :--- | :--- | :--- |
| `/` | `InicioComponent` | Hero com versículo, carrossel de fotos, próximos cultos/eventos (cards padronizados), mapa e atalho para Sobre Nós. |
| `/sobre` | `SobreComponent` | História da igreja, galeria de fotos, pilares da fé e carrossel de liderança pastoral. |
| `/eventos` | `EventosComponent` | Horários fixos de culto e eventos da igreja. Se não houver eventos, horários expandem automaticamente em 2 colunas. Sem mapa nesta aba. |
| `/ministerios` | `MinisteriosComponent` | Grade de **Cards** dos 9 ministérios oficiais com botão direto para engajar via WhatsApp. Filtros sem arrasto no mobile. |
| `/contribua` | `ContribuaComponent` | QR Code PIX ampliado (270px) para leitura rápida, Chave PIX (CNPJ) com botão de copiar e Bloco de Doação de Alimentos com botão "COMO CHEGAR" e "DOAR VIA WHATSAPP". |
| `/contato` | `ContatoComponent` | **Sem caixa de texto**. Cards diretos (WhatsApp, Telefone Fixo, Instagram, YouTube), horários de culto e mapa interativo com botão "COMO CHEGAR". |

---

## 5. Links, Contatos e Recursos Externos

- **WhatsApp Oficial:** `5561999999999` (Definido em `src/environments/environment.ts`).
- **Instagram:** `https://www.instagram.com/adevgrandecolorado/`
- **YouTube:** `https://www.youtube.com/@AdevGrandeColorado/videos`
- **Google Maps (Como Chegar):** `https://maps.app.goo.gl/WzZqagbht1sHD5tr6`
- **Google Maps Embed (Iframe):**
  `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500!2d-47.8469841!3d-15.6690609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a38b21113e2cd%3A0x7ac9b442e17ada1!2sADEVGC%20-%20IGREJA%20ASSEMBLEIA%20DE%20DEUS!5e0!3m2!1spt-BR!2sbr`

---

## 6. Padrões de Código & Boas Práticas

- **Framework:** Angular 17+ (Standalone Components).
- **Estruturas de Controle Modernas:** Utilize `@if`, `@for`, `@empty` em vez de `*ngIf` e `*ngFor`.
- **CSS / SCSS:** Escreva estilos limpos, utilizando as variáveis `$navy_blue` e `$yellow`. Respeite a responsividade em breakpoints padrão Bootstrap (`575.98px`, `767.98px`, `991.98px`).
- **Verificação de Compilação:** Sempre execute `npm run build` após alterações substanciais para garantir que a aplicação continue compilando com código de saída 0.
