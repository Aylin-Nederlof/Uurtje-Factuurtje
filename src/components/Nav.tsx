import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/static/images/Logo-uurtje-factuurtje.svg';

import { auth } from '../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button } from './Buttons/Button';
import router from 'next/router';

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
          <Button onClick={() => router.push('/createInvoice')} $variant="primary">Create invoice</Button>
          <Button onClick={() => router.push('/')} $variant="black">Dashboard</Button>
          <Button $variant={'underlined'} onClick={() => auth.signOut()}>Sign out</Button>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
