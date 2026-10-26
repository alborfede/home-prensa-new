import Link from 'next/link';

export default function Home() {
  return (
    <div className="clarin-home-wrapper">
      {/* GRILLA PRINCIPAL DE NOTICIAS */}
      <div className="clarin-grid-container">
        {/* NOTICIA PRINCIPAL (COLUMNA IZQUIERDA CON BORDE DIVISOR) */}
        <article className="article-main main-column-border">
          <div className="main-image-wrapper">
            <img
              src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2Fbrasil-1.avif&w=640&q=65"
              alt="Noticia Principal"
              className="main-news-img"
            />
            <span className="image-caption-overlay">EDITORIAL</span>
          </div>

          <div className="main-news-content">
            <span className="news-volanta">Internacionales</span>
            <h1 className="main-news-title">
              Elecciones en Brasil: ¡perdieron Bolsonaro, Milei y Trump!
            </h1>
            <div className="news-author-byline">Rafael Santos </div>
            <p className="main-news-excerpt">
              En la calle y en las urnas la ultraderecha recibió un golpe.
            </p>
          </div>
        </article>

        {/* COLUMNA DERECHA (GRILLA SECUNDARIA 2x2) */}
        <div className="clarin-secondary-grid">
          {/* CASILLA 1: ARRIBA IZQUIERDA */}
          <article className="secondary-card card-border-right card-border-bottom">
            <img
              src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2FSerbia-estudiantes44.jpg&w=640&q=65"
              alt="Internacionales"
              className="secondary-img"
            />
            <span className="news-volanta">Internacionales</span>
            <h2 className="secondary-title">
              Elecciones en Serbia: victoria de la Lista Estudiantil,
              identificada con las protestas
            </h2>
            <div className="news-author-byline">Fede Picca</div>
          </article>

          {/* CASILLA 2: ARRIBA DERECHA */}
          <article className="secondary-card card-border-bottom">
            <img
              src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2Finundaciones-1-1.jpeg&w=640&q=65"
              alt="Sociedad"
              className="secondary-img"
            />
            <span className="news-volanta">Sociedad</span>
            <h2 className="secondary-title">
              Misiones y Corrientes, la población sufre las consecuencias de “El
              niño” por la imprevisión de los gobiernos
            </h2>
            <div className="news-author-byline">Virginia Villanueva</div>
          </article>

          {/* CASILLA 3: ABAJO IZQUIERDA */}
          <article className="secondary-card card-border-right">
            <img
              src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2Fmilei-y-los-lbira.avif&w=640&q=65"
              alt="Políticas"
              className="secondary-img"
            />
            <span className="news-volanta">Políticas</span>
            <h2 className="secondary-title">Caso $Libra: Impunidad a granel</h2>
            <div className="news-author-byline">REDACCIÓN</div>
          </article>

          {/* CASILLA 4: ABAJO DERECHA */}
          <div className="vertical-stack">
            <article className="secondary-card card-horizontal card-border-bottom">
              <div className="card-text-side">
                <span className="news-volanta">Políticas</span>
                <h2 className="secondary-title small">
                  La renuncia de Alejandro Vilches vuelve a exponer la
                  corrupción y el vaciamiento de Discapacidad
                </h2>
                <div className="news-author-byline">Nazareno Suozzi</div>
              </div>
              <img
                src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2Fvilches-e1790107825919.webp&w=640&q=95"
                alt="Políticas"
                className="small-thumb"
              />
            </article>

            <article className="secondary-card card-horizontal">
              <div className="card-text-side">
                <span className="news-volanta">Salud</span>
                <h2 className="secondary-title small">
                  En el Presupuesto 2027 la motosierra otra vez apunta contra
                  Discapacidad
                </h2>
                <div className="news-author-byline">Rocío Librandi</div>
              </div>
              <img
                src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2F5-TRIBUNA-DISCA.jpg&w=640&q=95"
                alt="Trama Política"
                className="small-thumb"
              />
            </article>
          </div>
        </div>
      </div>

      {/* REGIÓN 1: BANNER SUSCRIPCIÓN */}
      <section className="bottom-banner-region">
        <Link href="#" className="bottom-banner-link">
          <img
            src="/banner-suscripcion.jpg"
            alt="Colaborá con Prensa Obrera - SuscribitE"
            className="bottom-banner-img"
          />
        </Link>
      </section>

      {/* SECCIÓN DE VIDEOS DE YOUTUBE */}
      <section className="youtube-videos-section">
        <div className="youtube-section-header">
          <span className="news-volanta">MULTIMEDIA</span>
          <h2 className="youtube-section-title">Últimos Videos</h2>
        </div>

        <div className="youtube-grid-container">
          <div className="youtube-video-card">
            <div className="video-responsive-wrapper">
              <iframe
                src="https://www.youtube.com/embed/xwfH4BdjRtY"
                title="Video de YouTube 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="youtube-video-title">
              BRASIL: DERROTA de BOLSONARO, MILEI y TRUMP | El DEBATE en el FITU
              | 14 Toneladas
            </h3>
          </div>

          <div className="youtube-video-card">
            <div className="video-responsive-wrapper">
              <iframe
                src="https://www.youtube.com/embed/XRU8E0PdVoI"
                title="Video de YouTube 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="youtube-video-title">
              El formidable paro del subte es la punta de un iceberg | EDITORIAL
            </h3>
          </div>
        </div>
      </section>
      {/* ========================================== */}
      {/* CABECERA DE SECCIÓN CON LOGO DE EDM        */}
      {/* ========================================== */}
      <div className="edm-section-header">
        <Link href="https://revistaedm.com.ar" target="_blank">
          <img
            src="/logo-edm.svg"
            alt="En defensa del marxismo"
            className="edm-section-logo"
          />
        </Link>
      </div>
      {/* ========================================== */}
      {/* SECCIÓN: 5 ARTÍCULOS DE REVISTA EDM EN ROJO*/}
      {/* ========================================== */}
      <section className="five-articles-red-grid">
        {/* Artículo 1 */}
        <Link
          href="https://revistaedm.com.ar/nota/los-palestinos-del-48-y-las-elecciones-del-apartheid-israeli"
          target="_blank"
          className="red-card"
        >
          <img
            src="https://revistaedm.com.ar/api/image/wp-content/uploads/2026/10/portada-2-100-1.jpg"
            alt="Palestinos del 48"
            className="red-card-img"
          />
          <div className="red-card-content">
            <span className="red-volanta">Edición Web #103</span>
            <h3 className="red-title">
              Los palestinos del 48 y las elecciones del apartheid israelí
            </h3>
            <span className="red-author">Revista EDM</span>
          </div>
        </Link>

        {/* Artículo 2 */}
        <Link
          href="https://revistaedm.com.ar/nota/la-cuestion-irlandesa-parte-i"
          target="_blank"
          className="red-card"
        >
          <img
            src="https://revistaedm.com.ar/api/image/wp-content/uploads/2026/10/portada-4-100.jpg"
            alt="Cuestión irlandesa"
            className="red-card-img"
          />
          <div className="red-card-content">
            <span className="red-volanta">Edición Web #103</span>
            <h3 className="red-title">La cuestión irlandesa (Parte I)</h3>
            <span className="red-author">Revista EDM</span>
          </div>
        </Link>

        {/* Artículo 3 */}
        <Link
          href="https://revistaedm.com.ar/nota/una-critica-a-la-historia-del-movimiento-piquetero-de-francisco-longa"
          target="_blank"
          className="red-card"
        >
          <img
            src="https://revistaedm.com.ar/api/image/wp-content/uploads/2026/10/portada-5-100.jpg"
            alt="Movimiento Piquetero"
            className="red-card-img"
          />
          <div className="red-card-content">
            <span className="red-volanta">Edición Web #103</span>
            <h3 className="red-title">
              Una crítica a la historia del movimiento piquetero de Francisco
              Longa
            </h3>
            <span className="red-author">Revista EDM</span>
          </div>
        </Link>

        {/* Artículo 4 */}
        <Link
          href="https://revistaedm.com.ar/nota/programa-estrategia-y-partido-el-debate-en-el-frente-de-izquierda-de-la-argentina"
          target="_blank"
          className="red-card"
        >
          <img
            src="https://revistaedm.com.ar/api/image/wp-content/uploads/2026/10/portada-7-100-1.jpg"
            alt="Frente de Izquierda"
            className="red-card-img"
          />
          <div className="red-card-content">
            <span className="red-volanta">Edición Web #103</span>
            <h3 className="red-title">
              Programa, estrategia y partido: el debate en el Frente de
              Izquierda
            </h3>
            <span className="red-author">Revista EDM</span>
          </div>
        </Link>

        {/* Artículo 5 */}
        <Link
          href="https://revistaedm.com.ar/nota/a-70-anos-de-la-revolucion-politica-de-la-clase-obrera-hungara"
          target="_blank"
          className="red-card"
        >
          <img
            src="https://revistaedm.com.ar/api/image/wp-content/uploads/2026/10/portada-6-100-1.jpg"
            alt="Revolución Húngara"
            className="red-card-img"
          />
          <div className="red-card-content">
            <span className="red-volanta">Edición Web #103</span>
            <h3 className="red-title">
              A 70 años de la revolución política de la clase obrera húngara
            </h3>
            <span className="red-author">Revista EDM</span>
          </div>
        </Link>
      </section>

      {/* REGIÓN INTERMEDIA: GRILLA DE 4 ARTÍCULOS */}
      <section className="four-articles-grid">
        <article className="secondary-card card-border-right card-border-bottom">
          <img
            src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2F4e2ad0bba5c4a1252cccc3bae193317e.webp&w=640&q=95"
            alt="Internacionales"
            className="secondary-img"
          />
          <span className="news-volanta">Internacionales</span>
          <h2 className="secondary-title">
            Perú: el asesinato de una candidata y los lazos entre el Estado y el
            crimen organizado
          </h2>
          <div className="news-author-byline">Gustavo Montenegro</div>
        </article>

        <article className="secondary-card card-border-bottom">
          <img
            src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2Fpresupuesto-universidad.jpeg&w=640&q=95"
            alt="Sindicales"
            className="secondary-img"
          />
          <span className="news-volanta">Universidad</span>
          <h2 className="secondary-title">
            Fuegos de octubre: la universidad sale a la calle
          </h2>
          <div className="news-author-byline">Martina Sarubbi</div>
        </article>

        <article className="secondary-card card-border-right">
          <img
            src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2Finta.jpeg&w=640&q=95"
            alt="Ambientes"
            className="secondary-img"
          />
          <span className="news-volanta">Ambiente</span>
          <h2 className="secondary-title">
            Intentan exonerar a la investigadora del Inta que lideró el Proyecto
            Sprint en Argentina
          </h2>
          <div className="news-author-byline">
            agrupación Naranja Ciencia y Técnica{' '}
          </div>
        </article>

        <article className="secondary-card">
          <img
            src="https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2FTelecom-Personal-e1790098481143.jpg&w=640&q=95"
            alt="Políticas"
            className="secondary-img"
          />
          <span className="news-volanta">Políticas</span>
          <h2 className="secondary-title">
            La aprobación de Metrotel consolida al monopolio Telecom-Clarín y su
            ofensiva patronal
          </h2>
          <div className="news-author-byline">Pablo Eibuszyc</div>
        </article>
      </section>

      {/* REGIÓN 2: BANNER EDM PROMO */}
      <section className="bottom-banner-region promo-region">
        <Link href="#" className="bottom-banner-link">
          <img
            src="/banner-edm-promo.jpg"
            alt="Promocion libro EDM"
            className="bottom-banner-img"
          />
        </Link>
      </section>
    </div>
  );
}
