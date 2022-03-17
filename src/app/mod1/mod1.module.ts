import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod1RoutingModule } from './mod1-routing.module';
import { Mod1Component } from './mod1.component';
import { TopCardComponent } from './top-card/top-card.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [Mod1Component, TopCardComponent, CardComponent],
  imports: [CommonModule, Mod1RoutingModule],
})
export class Mod1Module {}
