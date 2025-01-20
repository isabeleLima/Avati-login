export const IsEmailValid = (email: string) => {
  if (!email || email.trim().length === 0) {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(emailRegex.test(email));
  return emailRegex.test(email);
};

export const IsPasswordValid = (password: string) => {
  if (!password || password.trim().length === 0 || password.length < 6) {
    return false;
  }
  return true;
};
