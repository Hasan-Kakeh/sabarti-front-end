import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  year = new Date().getFullYear();
  platformId = inject(PLATFORM_ID);
  sendWhatsApp() {
    if (isPlatformBrowser(this.platformId))
    return  encodeURIComponent(
        'مرحباً، أود طلب هذا المنتج 🌵%0A' +
          'اسم المنتج: ' +
          'product.name' +
          '%0A' +
          'السعر: ' +
          'product.price' +
          ' ر.س%0A' +
          'رابط الصورة: ' +
          'https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1575936123452-b67c3203c357%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&docid=ExDvm63D_wCvSM&tbnid=-mNI5DBCB_iEPM&vet=12ahUKEwjZ8pWxiL-NAxVil4kEHX3wM_0QM3oECGUQAA..i&w=3000&h=2000&hcb=2&itg=1&ved=2ahUKEwjZ8pWxiL-NAxVil4kEHX3wM_0QM3oECGUQAA',
      );
      return ''
  }
}
