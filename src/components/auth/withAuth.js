import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'src/hooks/useAuth';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { user, loading } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (!loading) {
        if (!user) {
          const publicPages = ['/pages/login', '/pages/register', '/404', '/500'];
          if (!publicPages.includes(router.pathname)) {
            router.replace('/pages/login');
          }
        }
        setIsLoading(false);
      }
    }, [user, loading, router]);

    if (isLoading) {
      return <div>Loading...</div>; // You can replace this with a proper loading component
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;