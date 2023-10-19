import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Token } from '../../interfaces/token.interface';
import { OptionalsService } from '../optionals.service';
import { ExperiencesService } from '../experiences.service';
import { FormationsService } from '../formations.service';
import { LanguagesService } from '../languages.service';
import { ReferencesService } from '../references.service';
import { SkillService } from '../skill.service';
import { Experience } from '../../interfaces/experience.interface';
import { Formations } from '../../interfaces/formation.interface';
import { Language } from '../../interfaces/language.interface';
import { Optionals } from '../../interfaces/optionlas.interface';
import { Reference } from '../../interfaces/reference.interface';
import { Skill } from '../../interfaces/skill.interface';
import { FormGroup } from '@angular/forms';
import { Profile } from '../../interfaces/profile.interface';
import { ProfileService } from '../profile.service';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../usuario.service';
import { ApiService } from '../../http/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  checkForm: boolean = false;

  newUser: boolean = false;

  levels: number[] = Array.from({ length: 10 }, (_, index) => index + 1);

  /* profileId que se escribe desde el servicio de login */
  profileId: number = 0;
  /* userId que se escribe desde el servicio de login */
  userId: number = 0;

  level: number = 0;

  companies: string[] = [];

  userName = "" || localStorage.getItem('userName');

  lastName = "" || localStorage.getItem('lastName');

  phone = "" || localStorage.getItem('phone');

  urlPicture = "" || localStorage.getItem('picture');

  email = "" || localStorage.getItem('email');

  imageProfile: string = `${this.api.apiUrl}user/profile/profile${this.userId}.jpeg`;

  constructor(
    private _experience: ExperiencesService,
    private _formations: FormationsService,
    private _language: LanguagesService,
    private _optionals: OptionalsService,
    private _references: ReferencesService,
    private _skills: SkillService,
    private _profiles: ProfileService,
    private _personal: UserService,
    private api: ApiService
  ) {

  }

  /* Chequeo de formularios */
  markForm(form: FormGroup) {
    if (form.dirty) {
      this.checkForm = true;
    }
  }

  user = {} as User;
  experiences: Experience[] = [];
  formations: Formations[] = [];
  languages: Language[] = [];
  optionals: Optionals[] = [];
  references: Reference[] = [];
  skills: Skill[] = [];
  profileList: Profile[] = [];

  getExperience() {
    this._experience.getExperience(this.userId).subscribe((experieceList: Experience[]) => {
      this.experiences = experieceList;
    });
  }

  getListFormations() {
    this._formations.getFormationByUser(this.userId).subscribe((formationList: Formations[]) => {
      this.formations = formationList;
    });
  }

  languageGet() {
    this._language.getLanguages(this.userId).subscribe((languagesList: Language[]) => {
      this.languages = languagesList;
    });
  }

  getMyOptionals() {
    this._optionals.getMyOptionals(this.userId).subscribe((myOptionals: Optionals[]) => {
      this.optionals = myOptionals;
    });
  }

  getReference() {
    this._references.getReference(this.userId).subscribe((referenceList: Reference[]) => {
      this.references = referenceList;
    });
  }

  getSkill() {
    this._skills.getSkillsByUser(this.userId).subscribe((skillList: Skill[]) => {
      this.skills = skillList;
    })
  }

  getProfiles() {
    return this._profiles.getProfile(this.userId).subscribe((profiles: Profile[]) => {
      this.profileList = profiles;
    })
  }

  getPersonal() {
    return this._personal.getUser(this.userId).subscribe((userData) => {
      this.user = userData;
    });
  }

  /* Obtener foto de usuario */
  downloadImage(url: any, id: number): Observable<any> {
    const body = { url: url }
    return this.api.post<any>(`user/profile/${id}`, body);
  }

  deleteImage(): Observable<any> {
    const name: string = `profile${this.userId}.jpeg`
    return this.api.delete(`user/profile/${name}`);
  }

  /* Autenticacion de usuariio */
  isAuthenticated() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const tokenData = jwtDecode<Token>(token);
      // console.log(tokenData); //TODO ELIMINAR
      const currentTime = Math.floor(Date.now() / 1000);
      const expiration = tokenData.exp;
      this.userId = tokenData.id;
      this.profileId = tokenData.profileId;
      return expiration > currentTime && expiration <= currentTime + 7200;
    }
    return false
  }



}
