import './globals.css'
import { Providers } from './providers';
import {DM_Sans as roboto} from 'next/font/google'
import  {Button}  from '@nextui-org/button';
export const metadata = {
  title:'Car Room | Home',
  description :'Home page.',
  keywords:'Sitio web de autos, Car website'
};
 const font =roboto({
  weight:['400'],
  styles:['italic', 'normal'],
  subsets:['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body className={font.className}>
        <Providers>

        <nav className='bg-white drop-shadow-lg border rounded-sm flex gap-16 text-black p-6 text-3xl font-light '>
          <h1>House of Cars</h1>
          <Button>Cotizar</Button>
          <Button>Comprar</Button>
        </nav>

        {children}
        <footer className='bg-slate-300 text-black p-6'>Footer</footer>
        </Providers>
      </body>
    </html>
  );
}