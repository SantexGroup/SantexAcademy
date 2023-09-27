import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { Profile } from 'src/app/core/interfaces/profile.interface';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-profile-two',
  templateUrl: './profile-two.component.html',
  styleUrls: ['./profile-two.component.css']
})
export class ProfileTwoComponent implements OnInit {
  listProfile: Profile[] = [];
  profileData: any; // Variable para almacenar los datos proporcionados

  constructor(
    public userData: UserDataService,
    public views: NavBarService,    
  ) { }

  ngOnInit(): void {
    this.userData.getMyOptionals();
    this.userData.languageGet();
    this.userData.getExperience();
    this.userData.getListFormations();
    this.userData.getReference();
    this.userData.getSkill();
  }

  async downloadPDF() {
    // Selecciona el elemento con el ID 'profile-1' y captura su contenido
    const profileContainer: HTMLElement | null = document.getElementById('profile-1');
    
    if (!profileContainer) {
      console.error('No se encontró el elemento con el ID "profile-1".');
      return;
    }

    try {
      const canvas: HTMLCanvasElement = await html2canvas(profileContainer, {
        scale: 2,
        useCORS: true,
      });

      const imageDataUrl: string = canvas.toDataURL('image/jpeg');

      const doc = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      
      const marginLeft = 10; 
      const marginTop = 10; 

      doc.addImage(imageDataUrl, 'JPEG', marginLeft, marginTop, imgWidth, imgHeight);
      doc.save(`${new Date().toISOString()}_Curriculum.pdf`);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
    }
  }

}
