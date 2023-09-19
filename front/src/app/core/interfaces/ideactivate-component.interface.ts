import { Observable } from "dexie";

export interface IDeactivateComponent {
    canExit: () => boolean;
}
