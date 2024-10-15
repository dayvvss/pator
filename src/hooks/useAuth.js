import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      if (token) {
        // Here you would typically verify the token with your backend
        // For now, we'll just set a user object if a token exists
        setUser({ token });
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (credentials) => {
    // Disabled the login functionality
    /*
    try {
      const response = await login(credentials); // Use kinde's login method
      const { token } = response; // Adjust based on kinde's response structure
      localStorage.setItem('token', token);
      setUser({ token });
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error (e.g., show a message to the user)
    }
    */
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return { user, loading, login, logout };
};