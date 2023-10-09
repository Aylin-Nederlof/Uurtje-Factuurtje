import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/static/images/Logo-uurtje-factuurtje.svg';

import { auth } from '../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Nav = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center py-4">
      <Link className="text-lg font-medium" href="/">
        <Image
          className="px-4"
          src={logo}
          alt="Logo uurtje factuurtje"
          width="160"
          height="200"
        />
      </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link
            className="py-2 px-4 text-sm bg-an-green text-black rounded-md font-medium ml-8 border-black border-2 border-sm transition hover:underline"
            href={'/auth/login'}
          >
            Login
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-4">
            <Link href="/createInvoice">
              <button className="text-sm font-medium bg-an-green rounded-md py-2 px-4 text-black border-an-green border-2 border-sm transition hover:bg-an-green-darker">
                Create invoice
              </button>
            </Link>
            <Link href="/">
              <button className="text-sm font-medium  bg-black rounded-md py-2 px-4 text-white border-black border-2 border-sm transition hover:bg-gray-800 hover:border-bg-gray-800">
                Dashboard
              </button>
            </Link>
            <Link href="/myaccount">
              <button className="text-sm font-medium  bg-an-purple rounded-md py-2 px-4 text-white border-an-purple border-2 border-sm transition hover:bg-an-purple-darker hover:border-an-purple-darker">
                Mijn UF
              </button>
            </Link>
            <button
              onClick={() => auth.signOut()}
              className="text-sm font-medium bg-white rounded-md py-2 px-4 text-black transition hover:underline"
            >
              Sign out
            </button>
            {/* <Link href="/">
              <img
                className="w-10 rounded-full cursor-pointer"
                src={user.photoURL}
              />
            </Link> */}
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
