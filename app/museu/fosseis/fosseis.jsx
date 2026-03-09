import Image from "next/image"

export default function fosseis() {
    return (
        <div className="main-fotos">
            <h1>Fotos</h1>
            <figure>
                <Image src={"/img/elasmotherium.png"} alt="Fóssil de Elasmotherium" width={200} height={200} />
                <figcaption>Fóssil de Elasmotherium</figcaption>
            </figure>
            <figure>
                <Image src={"/img/glyptodon.png"} alt="Fóssil de Glyptodon" width={200} height={200} />
                <figcaption>Fóssil de Glyptodon</figcaption>
            </figure>
            <figure>
                <Image src={"/img/leao-das-cavernas.png"} alt="Fóssil de Leão-das-Cavernas" width={400} height={200} className="precisa-rotacionar" />
                <figcaption>Fóssil de filhote de Leão-das-Cavernas</figcaption>
            </figure>
            <figure>
                <Image src={"/img/glyptodon.png"} alt="Fóssil de Glyptodon" width={200} height={200} />
                <figcaption>Fóssil de Glyptodon</figcaption>
            </figure>
        </div>
    )
}