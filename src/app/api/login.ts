//essa pagina simula um service de login back-end
import bcrypt from "bcryptjs";

export async function login(email: string, password: string) {
  const senhaDoBanco = await bcrypt.hash("123123", 10);
  const emailDoBanco = "email@gmail.com";

  const isMatch = await bcrypt.compare(password, senhaDoBanco);

  if (email == emailDoBanco && isMatch) {
    return true;
  }
  return false;
}
