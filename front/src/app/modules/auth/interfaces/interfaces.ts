export interface AuthResponse {
  ok: boolean;
	id?: number;
	username?: string;
	tipoDeUsuario?: string;
	token?: string;
  msg?: string;
}

export interface Usuario {
	id: number;
	username: string;
	tipoDeUsuario: string;
}