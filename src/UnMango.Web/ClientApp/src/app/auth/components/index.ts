import { LoginFormComponent } from './login-form/login-form.component';
import { LogoutConfirmationDialogComponent } from './logout-confirmation-dialog/logout-confirmation-dialog.component';

export const components: any[] = [
  LoginFormComponent,
  LogoutConfirmationDialogComponent
];

export const entryComponents: any[] = [
  LogoutConfirmationDialogComponent
];

export * from './login-form/login-form.component';
export * from './logout-confirmation-dialog/logout-confirmation-dialog.component';
