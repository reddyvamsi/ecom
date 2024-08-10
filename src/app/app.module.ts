import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { reducerFunction } from 'src/ngrx-store/ecom.reducer';
import { DummyComponentComponent } from './dummy-component/dummy-component/dummy-component.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DummyComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counterSelector: reducerFunction }),
    StoreDevtoolsModule.instrument({ maxAge: 100, logOnly: !isDevMode() }), //maxAge : this will store the last 100 states of the application
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
