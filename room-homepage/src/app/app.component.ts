import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'room-homepage';
  pagenb = 1;
  contentnumber = 0;
  imageType = '';
  mobileNavActivated = false;

  secondContent = [
    {
      header: 'Discover innovative ways to decorate',
      description:
        ' We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    },
    {
      header: ' We are available all across the globe',
      description:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
      header: 'Manufactured with the best materials',
      description:
        'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    }
  ];

  goToPreviousPage(): void {
    if (this.pagenb !== 1) {
      this.pagenb--;
      this.contentnumber--;
    }
  }

  goToNextPage(): void {
    if (this.pagenb !== 3) {
      this.pagenb++;
      this.contentnumber++;
    }
  }

  renderBackground(): object {
    return this.imageType === 'desktop'
      ? {
          'background-image':
            'url(../assets/images/' +
            this.imageType +
            '-image-hero-' +
            this.pagenb +
            '.jpg)'
        }
      : {
          'background-image':
            'url(../assets/images/' +
            this.imageType +
            '-image-hero-' +
            this.pagenb +
            '.jpg)',
          width: '100%',
          height: '360px'
        };
  }

  updateImageType(): void {
    if (window.innerWidth < 376) {
      this.imageType = 'mobile';
    } else {
      this.imageType = 'desktop';
    }
  }

  ngOnInit(): void {
    this.updateImageType();
    window.onresize = () => {
      this.updateImageType();
    };
  }
}
