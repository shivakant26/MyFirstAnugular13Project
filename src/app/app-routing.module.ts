import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApplictionComponent } from './appliction/appliction.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { TemplateformComponent } from './templateform/templateform.component';

const routes: Routes = [
    {
      path:"",
      component:HomeComponent
    },
    {
      path:"about",
      component:AboutComponent
    },
    {
      path:"application",
      component:ApplictionComponent
    },
    {
      path:"help",
      component:HelpComponent
    },
    {
      path:"contactus",
      component:ContactusComponent
    },
    {
      path:"template-form",
      component:TemplateformComponent
    },
    {
      path:"basic-form",
      component:BasicFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
