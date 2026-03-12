import Link from "next/link"

export default function Creditos(){
    return(
        <div className="creditos">
            <h1>Créditos</h1>
            <p>Feito por <Link href={'https://github.com/Igor-Dias-2010'} target="_blank" rel="noopener noreferrer">Igor-Dias-2010</Link></p>
        </div>
    )
}