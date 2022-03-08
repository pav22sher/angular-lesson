import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//При запуске приложения первым выполняется код,
//который определен в этом файле
const platform = platformBrowserDynamic()
//загрузка главного модуля
platform.bootstrapModule(AppModule)
