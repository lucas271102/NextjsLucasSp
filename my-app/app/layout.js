import './globals.css'
import { Providers } from './providers';
import {IBM_Plex_Sans} from 'next/font/google'
export const metadata = {
  title:'Car Room | Home',
  description :'Home page.',
  keywords:'Sitio web de autos, Car website'
};
 const roboto =IBM_Plex_Sans({
  weight:['400','500'],
  styles:['italic', 'normal'],
  subsets:['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={roboto.className}>
        <Providers>

        <nav>
          <h1 className='bg-slate-300 text-black p-6 '>Navbar</h1>
        </nav>

        {children}
        <footer className='bg-slate-300 text-black p-6'>Footer</footer>
        </Providers>
      </body>
    </html>
  );
}