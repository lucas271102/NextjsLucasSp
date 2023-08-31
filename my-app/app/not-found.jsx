import Link from "next/link"


export default function NotFound() {
    return( 
    <>
    
    
    <section className="flex justify-center items-center text-3xl gap-4 h-screen">
        <h1>
            404
        </h1>
        <p>
            Lo sentimos, la página quer busca no ha sido encontrada

        </p>
        <Link href={'/'} className="text-blue-600">Regresar</Link>
    </section>
    </>
    )
}