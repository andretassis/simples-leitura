import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarCitacaoComponent } from './componentes/citacoes/criar-citacao/criar-citacao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuralCitacaoComponent } from './componentes/citacoes/mural-citacao/mural-citacao.component';
import { CitacaoComponent } from './componentes/citacoes/citacao/citacao.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirCitacaoComponent } from './componentes/citacoes/excluir-citacao/excluir-citacao.component';
import { EditarCitacaoComponent } from './componentes/citacoes/editar-citacao/editar-citacao.component';
import { HomeComponent } from './componentes/home/home.component';
import { EstanteComponent } from './componentes/estante/estante.component';
import { BotaoCarregarMaisComponent } from './componentes/citacoes/mural-citacao/botao-carregar-mais/botao-carregar-mais.component';
import { AdicionarLivroComponent } from './componentes/estante/adicionar-livro/adicionar-livro.component';
import { LivroComponent } from './componentes/estante/livro/livro.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarCitacaoComponent,
    MuralCitacaoComponent,
    CitacaoComponent,
    ExcluirCitacaoComponent,
    EditarCitacaoComponent,
    HomeComponent,
    EstanteComponent,
    BotaoCarregarMaisComponent,
    AdicionarLivroComponent,
    LivroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
