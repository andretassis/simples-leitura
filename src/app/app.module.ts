import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarCitacaoComponent } from './componentes/citacoes/criar-citacao/criar-citacao.component';
import { FormsModule } from '@angular/forms';
import { MuralCitacaoComponent } from './componentes/citacoes/mural-citacao/mural-citacao.component';
import { CitacaoComponent } from './componentes/citacoes/citacao/citacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarCitacaoComponent,
    MuralCitacaoComponent,
    CitacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
