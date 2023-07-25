import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuralCitacaoComponent } from './componentes/citacoes/mural-citacao/mural-citacao.component';
import { CriarCitacaoComponent } from './componentes/citacoes/criar-citacao/criar-citacao.component';
import { ExcluirCitacaoComponent } from './componentes/citacoes/excluir-citacao/excluir-citacao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'meu-mural',
    pathMatch: 'full'
  },
  {
    path: 'meu-mural',
    component: MuralCitacaoComponent
  },
  {
    path: 'criar-citacao',
    component: CriarCitacaoComponent
  },
  {
    path: 'citacoes/excluir-citacao/:id',
    component: ExcluirCitacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
