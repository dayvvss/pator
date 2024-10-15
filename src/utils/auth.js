import { verify } from 'jsonwebtoken';

export const isAuthenticated = (ctx) => {
  const { req } = ctx;
  const token = req.cookies.token; // Assuming you store the token in a cookie named 'token'

  if (!token) {
    return false;
  }

  try {
    verify(token, process.env.JWT_SECRET);
    
    return true;
  } catch (error) {
    return false;
  }
};

export const withAuthServerSideProps = (getServerSidePropsFunc) => {
  return async (ctx) => {
    const isAuth = isAuthenticated(ctx);

    if (!isAuth) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    if (getServerSidePropsFunc) {
      return await getServerSidePropsFunc(ctx);
    }

    return { props: {} };
  };
};