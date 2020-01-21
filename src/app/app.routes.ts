import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';

export const AppRoutes: Routes = [
    { path: '', component: AppComponent }, 
    { path: 'grid/:gridid', component: BoardComponent }
]; 