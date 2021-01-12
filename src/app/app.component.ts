import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProfilePicService } from './service/profile-pic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-pic-uploader';

  constructor(private spinner: NgxSpinnerService,
    private service: ProfilePicService,
    private toaster: ToastrService) {
  }

  ngOnInit() {
    this.previewPic = "";
    console.log(this.file);
  }

  file: File;
  previewPic;

  onProfilePicSelected($event) {
    this.file = $event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (event) => {
      this.previewPic = reader.result;
    };

  }

  onSubmit() {

    if (this.file) {
      this.spinner.show();
      this.service.addPicture(this.file).then(data => {
        this.service.getPicture(data.ref.fullPath).getDownloadURL().then(url => {
          this.spinner.hide();

          //to notify
          this.showSuccess(url);

        })
      })
        .catch(err => {
          this.spinner.hide();
          alert(err);
        })
    }
   

  }

  showSuccess(msg: string) {
    this.toaster.success(msg, "Copy To Clipboard", {
      enableHtml: true
    }).onTap.subscribe(data => {
      // console.log(data);
      let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (msg));
        e.preventDefault();
      };

      document.addEventListener('copy', listener);
      document.execCommand('copy');
      document.removeEventListener('copy', listener);
    })
  }

}
