import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { RouterLink } from '@angular/router';
platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
