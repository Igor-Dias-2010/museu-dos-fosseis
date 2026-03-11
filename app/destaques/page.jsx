import Image from "next/image"

export default function Destaques() {
    return (
        <div>
            <h1>Destaques</h1>
            <section className="main-fotos">
                <figure>
                    <Image className="img" src={"/img-fosseis-certas/fossil-elasmotherium.jpeg"} alt="Fóssil de Elasmotherium" width={200} height={200} />
                    <figcaption>Fóssil de Elasmotherium</figcaption>
                </figure>
                <figure>
                    <Image className="img" src={"/img-fosseis-certas/fossil-glyptodon.jpeg"} alt="Fóssil de Glyptodon" width={200} height={200} />
                    <figcaption>Fóssil de Glyptodon</figcaption>
                </figure>
                <figure>
                    <Image className="img" id="precisa-rotacionar" src={"/img-fosseis-certas/fossil-leao-das-cavernas.jpeg"} alt="Fóssil de Leão-das-Cavernas" width={200} height={200} />
                    <figcaption>Fóssil de filhote de Leão-das-Cavernas</figcaption>
                </figure>
                <figure>
                    <Image className="img" src={"/img-fosseis-certas/fossil-lobo-terrivel.jpeg"} alt="Fóssil de Lobo-Terrível" width={200} height={200} />
                    <figcaption>Fóssil de Lobo-Terrível</figcaption>
                </figure>
                <figure>
                    <Image className="img" src={"/img-fosseis-certas/fossil-mamute-lanoso.jpeg"} alt="Fóssil de Mamute-Lanoso" width={200} height={200} />
                    <figcaption>Fóssil de bebê de Mamute-Lanoso</figcaption>
                </figure>
                <figure>
                    <Image className="img" src={"/img-fosseis-certas/fossil-mandibula-mastodonte.jpeg"} alt="Fóssil de mandíbula de um Mastodonte" width={200} height={200} />
                    <figcaption>Fóssil de mandíbula de Mastodonte</figcaption>
                </figure>
                <figure>
                    <Image className="img" src={"/img-fosseis-certas/fossil-megaterio.jpeg"} alt="Fóssil de um Megatéiro" width={200} height={200} />
                    <figcaption>Fóssil de Megatério</figcaption>
                </figure>
                <figure>
                    <Image className="img" src={"/img-fosseis-certas/fossil-rinoceronte-lanoso.jpeg"} alt="Fóssil de Rinoceronte-Lanoso" width={200} height={200} />
                    <figcaption>Fóssil de Rinoceronte-Lanoso</figcaption>
                </figure>
                <figure>
                    <Image className="img" src={"/img-fosseis-certas/fossil-tigre-dentes-de-sabre.jpeg"} alt="Fóssil de Tigre-Dentes-de-Sabre" width={200} height={200} />
                    <figcaption>Fóssil de Tigre-Dentes-de-Sabre</figcaption>
                </figure>
                <figure>
                    <Image className="img" src={"/img-fosseis-certas/fossil-urso-das-cavernas.jpeg"} alt="Fóssil de Urso-das-Cavernas" width={200} height={200} />
                    <figcaption>Fóssil de Urso-das-Cavernas</figcaption>
                </figure>
            </section>

        </div>
    )
}