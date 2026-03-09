'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname()
    return (
        <div className="navbar">
            <nav>
                <button><Link href={'/'} className={pathname === '/' ? 'active' : ''}>Início</Link></button>
                <button><Link href={'/museu'} className={pathname === '/museu' ? 'active' : ''}>Acessar o Museu</Link></button>
            </nav>
        </div>
    )
}