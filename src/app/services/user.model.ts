export interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  perfil: 'ADMIN' | 'USUARIO';
  confirmPassword?: string;
}
