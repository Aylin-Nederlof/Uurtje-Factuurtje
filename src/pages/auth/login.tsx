import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/../utils/firebase';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';

const Login = () => {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  // Sign in with google
  const googlePrivider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googlePrivider);
      route.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      route.push('/');
    } else {
      console.log('login');
    }
  }, [user]);

  return (
    <div className="border-2 rounded-sm mt-32 p-6 text-gray-700 ">
      <h2 className="text-2xl font-medium">Login</h2>
      <div className="py-2">
        <h3 className="pb-4">Sign in with one of the providers</h3>
        <button
          onClick={GoogleLogin}
          className="text-black bg-an-gray w-full font-medium rounded-xl flex align-middle p-4 gap-2 "
        >
          <FcGoogle className="text-2xl" />
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default Login;
