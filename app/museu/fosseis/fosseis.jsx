'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Fosseis() {
    const [imagemAberta, setImagemAberta] = useState(null)

    return (
        <div className="main">
            <h1>Fotos</h1>
            <section className="main-fotos">
                <figure>
                    <Image onClick={(e) => setImagemAberta(e.target.src)} className="img" src={"/img-fosseis-certas/fossil-elasmotherium.jpeg"} alt="Fóssil de Elasmotherium" width={200} height={200} />
                    <figcaption>Fóssil de Elasmotherium</figcaption>
                    <ul className="info">
                        <li><strong>Achado em:</strong> Pavlodar, Cazaquistão - 2016</li>
                        <li><strong>Idade:</strong> aprox. 39 mil a 29 mil anos</li>
                        <li><strong>Fonte:</strong> <Link href={"https://commons.wikimedia.org/wiki/File:Elasmotherium_sibiricum_skull_7.JPG"} target="_blank" rel="noopener noreferrer">commons.wikimedia.org</Link></li>
                    </ul>
                </figure>
                <figure>
                    <Image onClick={(e) => setImagemAberta(e.target.src)} className="img" src={"/img-fosseis-certas/fossil-glyptodon.jpeg"} alt="Fóssil de Glyptodon" width={200} height={200} />
                    <figcaption>Fóssil de Glyptodon</figcaption>
                    <ul className="info">
                        <li><strong>Achado em:</strong> Argentina - 23 de junho de 2011</li>
                        <li><strong>Idade:</strong> aprox. 11 mil anos</li>
                        <li><strong>Fonte:</strong> <Link href={"https://commons.wikimedia.org/wiki/File:Glyptodon_clavipes_01.jpg"} target="_blank" rel="noopener noreferrer">commons.wikimwdia.org</Link></li>
                    </ul>
                </figure>
                <figure>
                    <Image onClick={(e) => setImagemAberta(e.target.src)} className="img" id="precisa-rotacionar" src={"/img-fosseis-certas/fossil-leao-das-cavernas.jpeg"} alt="Fóssil de Leão-das-Cavernas" width={200} height={200} />
                    <figcaption>Fóssil de filhote de Leão-das-Cavernas</figcaption>
                    <ul className="info">
                        <li><strong>Achado em:</strong> Sibéria</li>
                        <li><strong>Idade:</strong> mais de 10 mil anos</li>
                        <li><strong>Fonte:</strong> <Link href={"https://www.nationalgeographicbrasil.com/historia/filhotes-de-leao-das-cavernas-sao-encontrados-congelados-na-siberia"} target="_blank" rel="noopener noreferrer">National Geographic Brasil</Link></li>
                    </ul>
                </figure>
                <figure>
                    <Image onClick={(e) => setImagemAberta(e.target.src)} className="img" src={"/img-fosseis-certas/fossil-lobo-terrivel.jpeg"} alt="Fóssil de Lobo-Terrível" width={200} height={200} />
                    <figcaption>Fóssil de Lobo-Terrível</figcaption>
                    <ul className="info">
                        <li><strong>Achado em:</strong> Califórnia, Estados Unidos</li>
                        <li><strong>Idade:</strong> aprox. 10 a 13 mil anos</li>
                        <li><strong>Fonte:</strong> <Link href={"https://www.flickr.com/photos/jsjgeology/31936676740/in/photostream/"} target="_blank" rel="noopener noreferrer">Flickr</Link></li>
                    </ul>
                </figure>
                <figure>
                    <Image onClick={(e) => setImagemAberta(e.target.src)} className="img" src={"/img-fosseis-certas/fossil-mamute-lanoso.jpeg"} alt="Fóssil de Mamute-Lanoso" width={200} height={200} />
                    <figcaption>Fóssil de bebê de Mamute-Lanoso</figcaption>
                    <ul className="info">
                        <li><strong>Achado em:</strong> Yukon, Canadá - 21 de junho de 2022</li>
                        <li><strong>Idade:</strong> mais de 30 mil anos</li>
                        <li><strong>Fonte:</strong> <Link href={"https://revistagalileu.globo.com/Ciencia/noticia/2022/06/mineradores-acham-filhote-de-mamute-de-30-mil-anos-mumificado-no-canada.html"} target="_blank" rel="noopener noreferrer">Revista Galileu</Link></li>
                    </ul>
                </figure>
                <figure>
                    <Image onClick={(e) => setImagemAberta(e.target.src)} className="img" src={"/img-fosseis-certas/fossil-mandibula-mastodonte.jpeg"} alt="Fóssil de mandíbula de um Mastodonte" width={200} height={200} />
                    <figcaption>Fóssil de mandíbula de Mastodonte</figcaption>
                    <ul className="info">
                        <li><strong>Achado em:</strong> Santa Catarina, Brasil - 2018</li>
                        <li><strong>Idade:</strong> cerca de 30 mil anos</li>
                        <li><strong>Fonte:</strong> <Link href={"https://g1.globo.com/sc/santa-catarina/noticia/fossil-de-elefante-pre-historico-e-encontrado-por-pescadores-em-sombrio-sc.ghtml"} target="_blank" rel="noopener noreferrer">g1</Link></li>
                    </ul>
                </figure>
                <figure>
                    <Image onClick={(e) => setImagemAberta(e.target.src)} className="img" src={"/img-fosseis-certas/fossil-megaterio.jpeg"} alt="Fóssil de um Megatéiro" width={200} height={200} />
                    <figcaption>Fóssil de Megatério</figcaption>
                    <ul className="info">
                        <li><strong>Achado em:</strong> 1830</li>
                        <li><strong>Idade:</strong> cerca de 8 mil anos</li>
                        <li><strong>Fonte:</strong> <Link href={"https://www.nhm.ac.uk/discover/what-was-megatherium.html"} target="_blank" rel="noopener noreferrer">Natural History Museum</Link></li>
                    </ul>
                </figure>
                <figure>
                    <Image onClick={(e) => setImagemAberta(e.target.src)} className="img" src={"/img-fosseis-certas/fossil-rinoceronte-lanoso.jpeg"} alt="Fóssil de Rinoceronte-Lanoso" width={200} height={200} />
                    <figcaption>Fóssil de Rinoceronte-Lanoso</figcaption>
                    <ul className="info">
                        <li><strong>Achado em:</strong> Sibéria - 2020</li>
                        <li><strong>Idade:</strong> 32 mil anos</li>
                        <li><strong>Fonte:</strong> <Link href={"https://www.correiobraziliense.com.br/ciencia-e-saude/2024/10/6956310-cientistas-encontram-fossil-de-rinoceronte-de-32-mil-anos-intacto.html"} target="_blank" rel="noopener noreferrer">Correio Braziliense</Link></li>
                    </ul>
                </figure>
                <figure>
                    <Image onClick={(e) => setImagemAberta(e.target.src)} className="img" src={"/img-fosseis-certas/fossil-tigre-dentes-de-sabre.jpeg"} alt="Fóssil de Tigre-Dentes-de-Sabre" width={200} height={200} />
                    <figcaption>Fóssil de Tigre-Dentes-de-Sabre</figcaption>
                    <ul className="info">
                        <li><strong>Achado em:</strong> Estados Unidos - 2019</li>
                        <li><strong>Idade:</strong> 40 milhões de anos</li>
                        <li><strong>Fonte:</strong> <Link href={"http://g1.globo.com/mundo/noticia/2020/12/09/esqueleto-de-tigre-dentes-de-sabre-e-vendido-por-us-842-mil-em-leilao.ghtml"} target="_blank" rel="noopener noreferrer">g1</Link></li>
                    </ul>
                </figure>
                <figure>
                    <Image onClick={(e) => setImagemAberta(e.target.src)} className="img" src={"/img-fosseis-certas/fossil-urso-das-cavernas.jpeg"} alt="Fóssil de Urso-das-Cavernas" width={200} height={200} />
                    <figcaption>Fóssil de Urso-das-Cavernas</figcaption>
                    <ul className="info">
                        <li><strong>Achado em:</strong> Rússia - 2020</li>
                        <li><strong>Idade:</strong> mais de 22 mil anos</li>
                        <li><strong>Fonte:</strong> <Link href={"https://revistagalileu.globo.com/Ciencia/Arqueologia/noticia/2020/09/urso-das-cavernas-preservado-por-mais-de-22-mil-anos-e-encontrado-na-russia.html"} target="_blank" rel="noopener noreferrer">Revista Galileu</Link></li>
                    </ul>
                </figure>
            </section>

            {imagemAberta && (
                <div className="lightbox" onClick={() => setImagemAberta(null)}>
                    <img src={imagemAberta} className="img-lightbox" />
                </div>
            )}
        </div>
    )
}