import 'angular2-meteor-polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Meteor } from "meteor/meteor";
import {AppModule} from "./imports/app.module";

enableProdMode();

Meteor.startup(() => {
   platformBrowserDynamic().bootstrapModule(AppModule);
});
