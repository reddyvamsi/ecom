import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviselistComponent } from '../deviselist/deviselist.component';
const routes: Routes = [
    { path: '', component: DeviselistComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}