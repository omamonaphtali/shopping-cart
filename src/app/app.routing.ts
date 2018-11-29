import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{ path: '', component: ProductComponent, pathMatch: 'full' },
	{ path: 'home', component: HomeComponent},
	{ path: 'products', component: ProductComponent },
	{ path: 'cart', component: CartComponent },
	{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);