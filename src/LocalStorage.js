export const saveAuthInfo = (token, userId, email) => {
    try {
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('email', email);
    } catch(error) {}
  };