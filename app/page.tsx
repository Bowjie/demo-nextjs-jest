'use client';
import Login from './Login';

export default function Home() {
  const handleResult = (result: string) => {
    console.log(result);
  };
  return <Login onLogin={handleResult} />;
}
