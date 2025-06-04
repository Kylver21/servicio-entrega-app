import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'productos', loadComponent: () => import('./pages/product-list/product-list.component').then(m => m.ProductListComponent) },
  { path: 'producto/:id', loadComponent: () => import('./pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent) },
  { path: 'carrito', loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent) },
  { path: 'checkout', loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent) },
  { path: 'perfil', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent) },
  { path: '**', redirectTo: '' }
];
