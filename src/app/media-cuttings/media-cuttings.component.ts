import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-cuttings',
  templateUrl: './media-cuttings.component.html',
  styleUrls: ['./media-cuttings.component.scss']
})
export class MediaCuttingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  media = [
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2F881bc48a-fa30-42de-8fc6-380b0a38cf95.JPG?alt=media&token=85ecaec5-1942-4d93-9f4c-33a48122e13a', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2Ffc30b8e6-2283-4d14-ad9e-e336cb4bb16e.JPG?alt=media&token=7dfd5f64-1b2a-43d3-8db1-f605ef9a3109', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2FIMG-6481.JPG?alt=media&token=80ae74d5-2998-4394-9f4a-0520d8fed6f7', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2FIMG-6485.JPG?alt=media&token=daa06756-0e7c-48d4-9e82-7cfa86012c63', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2FIMG-6491.JPG?alt=media&token=c9bf159a-9053-4548-a990-73848ad8c75e', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2FIMG-6504.JPG?alt=media&token=06bbf3bd-9908-4c85-9431-728d35390cd3', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2FIMG-6506.JPG?alt=media&token=98c18635-fc70-4f76-97bd-e5f9b47ff46e', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2FIMG-6513.JPG?alt=media&token=134f5376-6412-463d-86bf-60376c649f7e', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2FIMG-6514.JPG?alt=media&token=c7d77024-0f57-48cb-9864-c2e4a11c2fda', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2FIMG-6515.JPG?alt=media&token=c6bbc7ad-6023-46f9-9e64-0c98d54cf39e', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2FIMG-6517.JPG?alt=media&token=df6e19b3-896a-457f-877b-0e8262dbc8ba', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2FIMG-6521.JPG?alt=media&token=755ecaa4-569f-41e5-b0ff-eb6c86ace484', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2FIMG-6522.JPG?alt=media&token=3b8ae890-d260-42a1-bba4-aaae78ba58ef', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2FIMG-6523.JPG?alt=media&token=83206ec8-c39a-466a-b0dd-cb339842b8ee', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2FIMG-6524.JPG?alt=media&token=a87a39c7-4f09-438c-af8d-744b570e4e28', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2FIMG-6525.JPG?alt=media&token=d21531ef-0f90-425d-9b5c-2b4331ba1af6', title: '' },
    { image: 'https://firebasestorage.googleapis.com/v0/b/barkat-cb375.appspot.com/o/news%2FIMG-6526.JPG?alt=media&token=577eb707-af7f-44d4-af60-04426932b25e', title: '' },
    // { image: '../../assets/gallery/News/', title: '' },
  ]

}
