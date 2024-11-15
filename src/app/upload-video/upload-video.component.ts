import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFileDropEntry, NgxFileDropModule } from 'ngx-file-drop';

@Component({
  selector: 'upload-video',
  standalone: true,
  imports: [CommonModule, NgxFileDropModule],  // Importa NgIf e NgxFileDropModule
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent {
  videoFile: File | null = null;  // File video selezionato
  files: NgxFileDropEntry[] = [];  // File che vengono trascinati

  constructor() {}

  // Gestisce il drop dei file
  public onFilesDropped(files: NgxFileDropEntry[]): void {
    this.files = files;
    const droppedFile = files[0];  // Gestiamo solo il primo file nel caso ci siano più file

    if (droppedFile.fileEntry.isFile) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        this.videoFile = file;  // Assegna il file video alla variabile videoFile
        console.log('File dropped:', file.name);
      });
    } else {
      console.error('Non è stato selezionato un file');
    }
  }

  // Metodo per caricare il video
  public uploadVideo(): void {
    if (this.videoFile) {
      console.log('Uploading video:', this.videoFile.name);
      // Aggiungi qui la logica per l'upload (ad esempio con HttpClient)
    } else {
      console.error('No video selected');
    }
  }
}
