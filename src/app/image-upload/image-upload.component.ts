import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core'
import * as S3 from 'aws-sdk/clients/s3'

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  @ViewChild('fileInput') el: ElementRef
  users: any = {}
  imageFile: any
  imageUrl: any = 'assets/images/add.png'
  editFile: boolean = true
  removeUpload: boolean = false
  allImageData: any = []
  selectedFiles: FileList
  s3Url = 'https://radhikabucket123.s3.ap-south-1.amazonaws.com/'
  bucket = new S3({
    accessKeyId: 'AKIAUFSYBNLQE3MHC4XX',
    secretAccessKey: '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',
    region: 'ap-south-1',
  })
  FOLDER: any
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getAllImages()
  }

  //Image Upload
  uploadFile(event: any) {
    let reader = new FileReader() // HTML5 FileReader API
    this.imageFile = event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(this.imageFile)
      console.log(this.imageFile, 'file')
      reader.onload = () => {
        this.imageUrl = reader.result
        console.log(this.imageUrl, 'imageUrl')
        this.editFile = false
        this.removeUpload = true
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.changeDetectorRef.markForCheck()
    }
  }

  // Remove uploaded Image
  removeUploadedFile() {
    this.imageUrl = 'assets/images/add.png'
    this.editFile = true
    this.removeUpload = false
  }

  //Upload File to Amazon S3 Bucket
  uploadAWSS3() {
    const file = this.selectedFiles.item(0)
    const contentType = file.type

    const params = {
      Bucket: 'radhikabucket123',
      Key: this.FOLDER + file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType,
    }
    this.bucket.upload(params, (err: any, data: any) => {
      if (err) {
        console.log('There was an error uploading your file: ', err)
        return false
      }
      console.log('Successfully uploaded file.', data)
      return true
    })
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files
  }

  //Fetch File from Amazon S3 Bucket
  getAllImages() {
    let params = {
      Bucket: 'radhikabucket123',
    }
    this.bucket.listObjects(params, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        this.allImageData = data.Contents
        console.log('Successfully get files.', this.allImageData)
      }
    })
  }

  //Delete File from Amazon S3 Bucket
  deleteImages(Key: any) {
    console.log(Key, 'key')
    let params = {
      Bucket: 'radhikabucket123',
      Key: Key,
    }
    this.bucket.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Successfully delete files.')
      }
    })
  }
}
