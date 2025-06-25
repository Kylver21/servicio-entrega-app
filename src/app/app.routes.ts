import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'productos', loadComponent: () => import('./components/product-list/product-list.component').then(m => m.ProductListComponent) },
  { path: 'producto/:id', loadComponent: () => import('./components/product-detail/product-detail.component').then(m => m.ProductDetailComponent) },
  { path: 'carrito', loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent) },
  { path: 'checkout', loadComponent: () => import('./components/checkout/checkout.component').then(m => m.CheckoutComponent) },
  { path: 'perfil', loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent) },
  { path: '**', redirectTo: '' }
];