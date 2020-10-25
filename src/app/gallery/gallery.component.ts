import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  // images = [
  //   { image: "url(../../assets/gallery/IMG-6519.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6516.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6508.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/7b78fc01-d9ea-4b0a-a1b8-63b33049aa3a.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6480.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6494.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6482.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6483.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6511.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6484.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6486.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6510.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6512.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6487.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6509.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6488.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6505.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6518.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6493.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6502.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6496.JPG)", title: 'Test Title', color: 'white' },
  //   { image: "url(../../assets/gallery/IMG-6503.JPG)", title: 'Test Title', color: 'white' },
  // ];

  images = [
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2F7b78fc01-d9ea-4b0a-a1b8-63b33049aa3a.JPG?alt=media&token=9089cf62-0554-4c4a-96c3-f4f1d44c75e9)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6480.JPG?alt=media&token=0f43a8e5-a283-4939-8fa9-b21b84e75822)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6482.JPG?alt=media&token=67b213a1-76c6-4616-b317-557a5bdaa0c0)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6483.JPG?alt=media&token=f844e278-cb0c-40c1-8718-d637b1c08d37)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6484.JPG?alt=media&token=4138d487-3123-4b70-8405-f053558d6b73)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6486.JPG?alt=media&token=800fbc6c-ccee-4ebf-9676-5bb8c384e743)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6487.JPG?alt=media&token=b3b48853-0077-4ad3-80f7-2b69ab5f26b0)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6488.JPG?alt=media&token=966d6963-8f66-4840-b60c-ff5de247c364)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6493.JPG?alt=media&token=b8802e84-dfe5-4715-b627-7343548a7292)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6494.JPG?alt=media&token=329705d5-c44a-4671-a9f3-daa5a6c91055)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6496.JPG?alt=media&token=f2c97fe5-de72-48ef-aa7a-48262d2211a5)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6502.JPG?alt=media&token=6962e8cc-772d-470d-8abd-4cc66ac06a20)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6503.JPG?alt=media&token=9bab91d8-2e90-410f-94b2-7f86441bbbed)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6505.JPG?alt=media&token=04abfa89-c8a9-42bf-a1fd-488767e61f84)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6508.JPG?alt=media&token=18e51b7b-d691-4bf7-bd13-734b149705ae)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6509.JPG?alt=media&token=272103db-13f3-4653-a769-3499543fa5f9)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6510.JPG?alt=media&token=32f427a3-d08c-434d-8324-00da8b20ebab)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6511.JPG?alt=media&token=04618002-66a0-4e0e-a5f8-a5f36b2e5dba)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6512.JPG?alt=media&token=e9482c4a-0ee2-4f6c-ba94-97e13c3762b1)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6516.JPG?alt=media&token=3222ea2e-cfea-40f7-90a1-045c280dd37b)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6518.JPG?alt=media&token=e7a56399-60cd-49f1-817c-ea58ba9c03e8)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6519.JPG?alt=media&token=a7d3fb46-5d0f-4d23-aaf1-9a8c5f1da179)", title: 'Test Title', color: 'white' },
    { image: "url(https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/gallery%2FIMG-6520.JPG?alt=media&token=9c25f5e7-f6b6-4b23-a5df-9d7fdea63fca)", title: 'Test Title', color: 'white' },
  ];

  openImage(img) {
    this.dialog.open(ImageViewerComponent, { data: img,panelClass:'imageViewer' });
  }

}
