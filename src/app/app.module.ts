import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FormsModule } from '@angular/forms';
import { ProgressSpinnerDialogComponent } from './progress-spinner-dialog/progress-spinner-dialog.component';

const materialModules = [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatProgressSpinnerModule, MatSnackBarModule];

const otherModules = [FormsModule];

@NgModule({
	declarations: [AppComponent, HeaderComponent, LoginModalComponent, ProgressSpinnerDialogComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ...materialModules, ...otherModules],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [LoginModalComponent],
})
export class AppModule {}
