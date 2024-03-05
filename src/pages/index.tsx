import React from 'react';
import Head from 'next/head';
import { auth } from '../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Home() {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <Head>
        <title>Uurtje factuurtje</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{!user && <div>Login om een factuur aan te maken</div>}</div>

      {user && (
        <div>
          <div className="flex mx-auto w-full gap-4 ">
            <div className="w-full grid grid-cols-2 gap-4 ">
              <div className="p-4 bg-an-lightgray rounded-md">
                Alle facturen
              </div>
              <div className="p-4 bg-an-gray rounded-md">Alle klanten</div>
              <div className="p-4 bg-an-gray rounded-md">Mijn info</div>
              <div className="p-4 bg-an-lightgray rounded-md">Alle klanten</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
