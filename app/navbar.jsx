'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname()
    return (
        <div className="navbar">
            <nav>
                <Link href={'/'} className={pathname === '/' ? 'active' : ''}>Início</Link>
                <Link href={'/museu'} className={pathname === '/museu' ? 'active' : ''}>Acessar o Museu</Link>
                <Link href={'/destaques'} className={pathname === '/destaques' ? 'active' : ''}>Destaques</Link>
                <Link href={'/creditos'} className={pathname === '/creditos' ? 'active' : ''}>Créditos</Link>
            </nav>
        </div>
    )
}