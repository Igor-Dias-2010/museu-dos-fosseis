import Image from "next/image"

export default function Destaques() {
    return (
        <div>
            <h1>Destaques</h1>
            <section className="main-fotos-real">
                <figure className="img-animal-real">
                    <Image className="img" src={"/animais-reais/mamute-lanoso2.webp.jpeg"} alt="Mamute-Lanoso" width={200} height={200} />
                    <figcaption>Mamute-Lanoso</figcaption>
                    <figcaption className="info"><strong>Nome científico:</strong> Mammuthus primigenius</figcaption>
                    <figcaption className="info"><strong>O que era:</strong> Um tipo de elefante gigante coberto de pelos que vivia em regiões muito frias.</figcaption>
                    <figcaption className="info">
                        <strong>Tamanho:</strong>
                        <ul>
                            <li>até 4 metros de altura</li>
                            <li>podia pesar de 6 a 8 toneladas</li>
                        </ul>
                    </figcaption>
                    <figcaption className="info">
                        <strong>Características:</strong>
                        <ul>
                            <li>pelagem grossa para suportar o frio</li>
                            <li>presas curvas gigantes</li>
                            <li>camada de gordura para proteger do gelo</li>
                        </ul>
                    </figcaption>
                    <figcaption className="info"><strong>Onde vivia:</strong> Europa, Ásia e América do Norte</figcaption>
                    <figcaption className="info"><strong>Alimentação:</strong> Era herbívoro. Comia principalmente grama, folhas, galhos e plantas da tundra.</figcaption>
                    <figcaption className="info"><strong>Curiosidade:</strong> Alguns mamutes foram encontrados congelados no gelo da Sibéria, com pele, pelos e até restos de comida no estômago preservados.</figcaption>
                </figure>
                <figure className="img-animal-real">
                    <Image className="img" src={"/animais-reais/megaterio2.jpeg"} alt="Megatéiro" width={200} height={200} />
                    <figcaption>Megatério</figcaption>
                    <figcaption className="info"><strong>Nome científico:</strong> Megatherium americanum</figcaption>
                    <figcaption className="info"><strong>O que era:</strong> Uma preguiça gigante terrestre, diferente das preguiças atuais que vivem nas árvores.</figcaption>
                    <figcaption className="info">
                        <strong>Tamanho:</strong>
                        <ul>
                            <li>até 6 metros de comprimento</li>
                            <li>podia pesar cerca de 4 toneladas</li>
                        </ul>
                    </figcaption>
                    <figcaption className="info">
                        <strong>Características:</strong>
                        <ul>
                            <li>garras enormes</li>
                            <li>corpo muito forte</li>
                            <li>conseguia ficar em pé nas patas traseiras para alcançar folhas</li>
                        </ul>
                    </figcaption>
                    <figcaption className="info"><strong>Onde vivia:</strong> Principalmente na América do Sul, inclusive no território do Brasil.</figcaption>
                    <figcaption className="info"><strong>Alimentação:</strong> Era herbívoro. Comia folhas, frutos, raízes e galhos de árvores.</figcaption>
                    <figcaption className="info"><strong>Curiosidade:</strong> Mesmo sendo herbívoro, suas garras enormes provavelmente serviam para defesa contra predadores.</figcaption>
                </figure>
                <figure className="img-animal-real">
                    <Image className="img" src={"/animais-reais/tigre-dente-de-sabre2.webp.jpeg"} alt="Tigre-Dente-de-Sabre" width={200} height={200} />
                    <figcaption>Tigre-Dente-de-Sabre</figcaption>
                    <figcaption className="info"><strong>Nome científico:</strong> Smilodon fatalis</figcaption>
                    <figcaption className="info"><strong>O que era:</strong> Um felino predador famoso pelos dentes gigantes em forma de sabre.</figcaption>
                    <figcaption className="info">
                        <strong>Tamanho:</strong>
                        <ul>
                            <li>cerca de 1 metro de altura</li>
                            <li>podia pesar até 300 kg</li>
                        </ul>
                    </figcaption>
                    <figcaption className="info">
                        <strong>Características:</strong>
                        <ul>
                            <li>presas de até 20cm</li>
                            <li>corpo muito forte e musculoso</li>
                            <li>especializado em ataques de emboscada</li>
                        </ul>
                    </figcaption>
                    <figcaption className="info"><strong>Onde vivia:</strong> América do Norte e América do Sul</figcaption>
                    <figcaption className="info"><strong>Alimentação:</strong> Era carnívoro. Caçava grandes mamíferos, como preguiças gigantes, bisões e filhotes de mamute.</figcaption>
                    <figcaption className="info"><strong>Curiosidade:</strong> Muitos fósseis foram encontrados em La Brea Tar Pits, um local onde animais ficavam presos em piche natural.</figcaption>
                </figure>
            </section>
        </div >
    )
}