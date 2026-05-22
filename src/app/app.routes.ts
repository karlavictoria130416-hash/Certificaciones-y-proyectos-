import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'siesta',
    loadComponent: () => import('./pages/siesta/siesta.page').then( m => m.SiestaPage)
  },
  {
    path: 'juego',
    loadComponent: () => import('./pages/juego/juego.page').then( m => m.JuegoPage)
  },
  {
    path: 'comida',
    loadComponent: () => import('./pages/comida/comida.page').then( m => m.ComidaPage)
  },
  
  {
  path: 'tienda',
  loadComponent: () =>
    import('./pages/tienda/tienda.page').then(m => m.TiendaPage)
  },



  {
    path: 'estudio',
    loadComponent: () => import('./pages/estudio/estudio.page').then( m => m.EstudioPage)
  },
  {
    path: 'mascota',
    loadComponent: () => import('./pages/mascota/mascota.page').then( m => m.MascotaPage)
  },
  {
    path: 'pages',
    loadComponent: () => import('./pages/pages.page').then( m => m.PagesPage)
  },
  {
    path: 'service',
    loadComponent: () => import('./pages/service/service.page').then( m => m.ServicePage)
  },
  {
    path: 'ajustes',
    loadComponent: () => import('./pages/ajustes/ajustes.page').then( m => m.AjustesPage)
  },
];
