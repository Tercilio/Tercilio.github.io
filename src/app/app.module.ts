import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./componentes/templates/views/header/header.component";
import { FooterComponent } from "./componentes/templates/views/footer/footer.component";
import { HomeComponent } from "./componentes/templates/home/home.component";
import { NavComponent } from './componentes/templates/views/nav/nav.component';
import { UsuarioReadComponent } from './componentes/templates/usuarios/usuario-read/usuario-read.component';
import { UsuarioCreateComponent } from './componentes/templates/usuarios/usuario-create/usuario-create.component';
import { UsuarioCalculateComponent } from './componentes/templates/usuarios/usuario-calculate/usuario-calculate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    UsuarioReadComponent,
    UsuarioCreateComponent,
    UsuarioCalculateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
  ],
  providers: [
   { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
],
  bootstrap: [AppComponent],
})
export class AppModule {}
