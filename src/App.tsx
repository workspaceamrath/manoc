import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "81975 79586"; // Add the full number with country code, e.g. 919876543210
const INSTAGRAM_URL = "https://www.instagram.com/manoc.fashion?dlrf=MTY2bHZkaG90anRkaQ==";

const photos = {
  hero: "https://images.unsplash.com/photo-1689044611227-3267fabaf76a?auto=format&fit=crop&w=1400&q=85",
  heroDetail:
    "https://images.unsplash.com/photo-1594035795435-be3b09601d40?auto=format&fit=crop&w=900&q=82",
  whiteTee:
    "https://images.unsplash.com/photo-1612694815984-bc3986cff958?auto=format&fit=crop&w=900&q=82",
  blackTee:
    "https://images.unsplash.com/photo-1518590713842-629f89f09c9f?auto=format&fit=crop&w=900&q=82",
  pants:
    "https://images.unsplash.com/photo-1654512463040-2226d9df854d?auto=format&fit=crop&w=900&q=82",
  mug: "https://images.unsplash.com/photo-1570841398972-8aaa69ec72f2?auto=format&fit=crop&w=900&q=82",
  desk: "https://images.unsplash.com/photo-1642083139428-9ee5fa423c46?auto=format&fit=crop&w=900&q=82",
  individual:
    "https://images.unsplash.com/photo-1636573563592-e9fb5bfed7ab?auto=format&fit=crop&w=1100&q=82",
  group:
    "https://images.unsplash.com/photo-1577372570570-fe08f7adc27b?auto=format&fit=crop&w=1300&q=82",
};

const messages = {
  general: "Hi MANOC! I'm interested in your custom printing services. I'd like to know more.",
  tshirt:
    "Hi MANOC! I want to get a customized T-shirt printed. I'll share my design and requirements.",
  bulk: "Hi MANOC! I'm interested in placing a bulk order for customized T-shirts. Please share the details.",
};

const whatsapp = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d={diagonal ? "M4 16 16 4M7 4h9v9" : "M3 10h14M12 5l5 5-5 5"} />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path d="M8.1 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.8 1.9c.1.2 0 .4-.1.6l-.6.7c-.2.2-.1.4 0 .6.5 1 1.3 1.8 2.3 2.3.2.1.4.2.6 0l.8-1c.2-.2.4-.2.6-.1l1.8.8c.3.1.4.3.4.5 0 .3-.1 1.3-.6 1.8-.5.5-1.2.8-2 .7-1.1-.1-2.7-.7-4.2-2-1.8-1.5-2.8-3.4-3.1-4.6-.3-1.2.1-1.8.5-2.2.4-.4.8-.5 1.2 0Z" />
    </svg>
  );
}

function Cta({
  href,
  children,
  secondary = false,
  diagonal = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
  diagonal?: boolean;
}) {
  return (
    <a
      className={`cta ${secondary ? "cta-secondary" : ""}`}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      <span>{children}</span>
      <Arrow diagonal={diagonal} />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "#home"],
    ["Custom T-Shirts", "#tshirts"],
    ["Other Products", "#products"],
    ["How It Works", "#process"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="MANOC home">
        <img src="/assets/manoc-logo-cropped.webp" alt="MANOC" />
      </a>
      <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <Cta href={whatsapp(messages.general)}>Start your order</Cta>
      </nav>
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
      </button>
    </header>
  );
}

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span>Custom printing</span>
              <span>Udupi, India</span>
            </div>
            <h1>
              Your design.
              <br />
              Your style.
              <br />
              <em>Your statement.</em>
            </h1>
            <p>
              Bring your ideas to life with custom-printed T-shirts and personalized products. You
              create the design. We make it wearable.
            </p>
            <div className="hero-actions">
              <Cta href={whatsapp(messages.tshirt)}>Get your T-shirt printed</Cta>
              <Cta href="#tshirts" secondary>
                Explore what we print
              </Cta>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="hero-number">01 / 04</div>
            <img
              className="hero-main-img"
              src={photos.hero}
              alt="Young man wearing a contemporary graphic T-shirt"
            />
            <div className="hero-inset">
              <img src={photos.heroDetail} alt="Close-up streetwear styling in a black T-shirt" />
              <span>
                Wear your
                <br />
                own idea
              </span>
            </div>
            <div className="hero-sticker">
              YOU IMAGINE IT.
              <br />
              WE PRINT IT.
            </div>
          </div>
          <div className="marquee" aria-label="MANOC custom products">
            <div>
              Custom tees <i>✳</i> Your artwork <i>✳</i> Group orders <i>✳</i> Personalised goods{" "}
              <i>✳</i> Custom tees <i>✳</i> Your artwork
            </div>
          </div>
        </section>

        <section className="tee-section section" id="tshirts">
          <div className="section-kicker reveal">
            <span>01 — Main offering</span>
            <span>Made from your idea</span>
          </div>
          <div className="tee-intro reveal">
            <h2>
              Not just a T-shirt.
              <br />
              <span>It’s your design.</span>
            </h2>
            <p>
              From personal artwork to creative graphics, turn your ideas into something you can
              actually wear.
            </p>
          </div>
          <div className="tee-editorial">
            <figure className="tee-photo tee-photo-a reveal">
              <img
                src={photos.whiteTee}
                alt="White T-shirt styling showing a possible print placement"
              />
              <figcaption>01 — Personal artwork</figcaption>
            </figure>
            <div className="tee-list reveal">
              {[
                "Print your own artwork",
                "Add your favourite graphics",
                "Personalize with text or photos",
                "Create matching group tees",
                "Print for events & businesses",
              ].map((item, i) => (
                <div key={item}>
                  <b>0{i + 1}</b>
                  <span>{item}</span>
                </div>
              ))}
              <Cta href={whatsapp(messages.tshirt)}>Bring your design to MANOC</Cta>
            </div>
            <figure className="tee-photo tee-photo-b reveal">
              <img
                src={photos.blackTee}
                alt="Black T-shirt styling showing another custom print possibility"
              />
              <figcaption>02 — Type & graphics</figcaption>
            </figure>
          </div>
          <p className="demo-note reveal">
            <span>*</span> Images shown are creative demonstrations only. MANOC prints the design
            that you provide — there is no fixed design catalogue.
          </p>
        </section>

        <section className="products section" id="products">
          <div className="section-kicker light reveal">
            <span>02 — Beyond tees</span>
            <span>Put your mark on more</span>
          </div>
          <div className="products-heading reveal">
            <h2>
              Your ideas don’t stop
              <br />
              at <span>T-shirts.</span>
            </h2>
            <p>Personalize more of the things you use every day.</p>
          </div>
          <div className="product-row">
            <article className="product product-pants reveal">
              <div className="product-image">
                <img src={photos.pants} alt="Contemporary pants styling" />
              </div>
              <div className="product-copy">
                <b>01</b>
                <h3>
                  Custom
                  <br />
                  pants
                </h3>
                <p>Give your apparel a personal touch with customized prints.</p>
              </div>
            </article>
            <article className="product reveal">
              <div className="product-image">
                <img src={photos.mug} alt="White ceramic mug ready for personalisation" />
              </div>
              <div className="product-copy">
                <b>02</b>
                <h3>
                  Personalized
                  <br />
                  mugs
                </h3>
                <p>Turn your artwork, photos, or messages into personalized mugs.</p>
              </div>
            </article>
            <article className="product product-desk reveal">
              <div className="product-image">
                <img src={photos.desk} alt="Modern desk setup with mouse pad" />
              </div>
              <div className="product-copy">
                <b>03</b>
                <h3>
                  Custom
                  <br />
                  mouse pads
                </h3>
                <p>Add personality to your workspace with custom designs.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="audience section">
          <div className="section-kicker reveal">
            <span>03 — Who it’s for</span>
            <span>One idea. Many possibilities.</span>
          </div>
          <h2 className="audience-title reveal">
            Made for one.
            <br />
            <span>Made for everyone.</span>
          </h2>
          <div className="audience-grid">
            <article className="audience-card individual reveal">
              <img
                src={photos.individual}
                alt="Individual expressing personal style in a T-shirt"
              />
              <div className="audience-content">
                <small>01 / For individuals</small>
                <h3>
                  Make it
                  <br />
                  personal.
                </h3>
                <p>
                  Your favourite artwork, your own quote, your personal style. Create something that
                  feels uniquely yours.
                </p>
                <Cta href={whatsapp(messages.tshirt)} secondary>
                  Make your own
                </Cta>
              </div>
            </article>
            <article className="audience-card groups reveal">
              <img src={photos.group} alt="Group of friends in coordinated streetwear" />
              <div className="audience-content">
                <small>02 / For groups & businesses</small>
                <h3>
                  Belong
                  <br />
                  together.
                </h3>
                <p>
                  Bring people together with customized T-shirts designed for your team, event, or
                  community.
                </p>
                <Cta href={whatsapp(messages.bulk)}>Enquire for bulk orders</Cta>
              </div>
            </article>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="process-heading reveal">
            <div className="section-kicker">
              <span>04 — How it works</span>
            </div>
            <h2>
              From your screen
              <br />
              to your <span>wardrobe.</span>
            </h2>
            <p>
              No complicated checkout. No forms. Just send your idea to MANOC on WhatsApp and we’ll
              take it from there.
            </p>
          </div>
          <div className="steps">
            {[
              [
                "01",
                "Share your design",
                "Send us your artwork, logo, photograph, or reference through WhatsApp.",
              ],
              [
                "02",
                "Choose your product",
                "Tell us whether you want T-shirts, pants, mugs, or mouse pads.",
              ],
              [
                "03",
                "Confirm the details",
                "Discuss quantity, sizes, print placement, and other requirements.",
              ],
              [
                "04",
                "We make it happen",
                "Once everything is confirmed, MANOC takes care of the printing.",
              ],
            ].map(([number, title, text]) => (
              <article className="step reveal" key={number}>
                <b>{number}</b>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="step-arrow">
                  <Arrow diagonal />
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="why section">
          <div className="why-title reveal">
            <span className="vertical-label">Why MANOC / 05</span>
            <h2>
              Good ideas
              <br />
              deserve
              <br />
              <em>good prints.</em>
            </h2>
          </div>
          <div className="promises">
            {[
              ["01", "Personalized designs", "Your artwork, your choice."],
              ["02", "Individual & bulk", "From one person's idea to an entire group's identity."],
              ["03", "Multiple products", "Your creativity can go beyond just T-shirts."],
              ["04", "Simple ordering", "Connect directly with MANOC through WhatsApp."],
            ].map(([n, title, text]) => (
              <article className="promise reveal" key={n}>
                <b>{n}</b>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta" id="contact">
          <div className="final-ticker">
            You imagine it <i>✳</i> We print it <i>✳</i> You wear it <i>✳</i>
          </div>
          <div className="final-inner reveal">
            <small>Ready when you are</small>
            <h2>
              Think it.
              <br />
              Design it.
              <br />
              <span>Wear it.</span>
            </h2>
            <div>
              <p>
                Have an idea in mind?
                <br />
                Let’s turn it into something real.
              </p>
              <a
                className="whatsapp-cta"
                href={whatsapp(messages.general)}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
                <span>Chat with us on WhatsApp</span>
                <Arrow diagonal />
              </a>
              <small>
                Based in Brahmavara, Udupi.
                <br />
                Open to enquiries from everywhere.
              </small>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/assets/manoc-logo-cropped.webp" alt="MANOC" />
            <p>Your design, brought to life on custom apparel and personalized products.</p>
          </div>
          <div>
            <b>Explore</b>
            <a href="#tshirts">Custom T-shirts</a>
            <a href="#products">Other products</a>
            <a href="#process">How it works</a>
          </div>
          <div>
            <b>Products</b>
            <a href="#tshirts">T-shirts</a>
            <a href="#products">Custom pants</a>
            <a href="#products">Mugs & mouse pads</a>
          </div>
          <div>
            <b>Connect</b>
            <a href={whatsapp(messages.general)} target="_blank" rel="noreferrer">
              WhatsApp ↗
            </a>
            <a href={INSTAGRAM_URL}>Instagram ↗</a>
            <span>
              Brahmavara, Udupi
              <br />
              Karnataka, India
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MANOC. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      <a
        className="floating-wa"
        href={whatsapp(messages.general)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with MANOC on WhatsApp"
      >
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
    </>
  );
}

export default App;
