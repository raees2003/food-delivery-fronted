import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NevigationComponent } from './nevigation/nevigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NevigationComponent, HomeComponent, FooterComponent, AboutUsComponent,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food-delivery-fronted';
}
