import "./App.css";

const getImageUrl = (fileName) =>
  `${import.meta.env.BASE_URL}images/${fileName}`;

const historySections = [
  {
    id: 1,
    title: "Beginnings",
    text: `Founded in 1954, Greenwich Skating Club has served generations of local families from its home on Cardinal Road. What began as an outdoor skating club developed into a longstanding Greenwich tradition centered around hockey, figure skating, recreation, and time spent together on the ice.`,
    image: "gsc-history-beginnings.jpg",
    alt: "Historic Greenwich Skating Club imagery",
    objectPosition: "center",
    dark: false,
    reverse: false,
  },
  {
    id: 2,
    title: "The 2017 Redevelopment",
    text: `In 2017, Greenwich Skating Club completed a major redevelopment of its Cardinal Road property. The project introduced a new outdoor rink and a modern clubhouse with updated spaces for members, coaches, programs, and club activities. The redevelopment significantly improved the facilities while keeping the rink outdoors. This allowed GSC to modernize the property without losing the open-air skating experience that has always distinguished the club.`,
    image: "gsc-history-redevelopment.jpg",
    alt: "The redeveloped Greenwich Skating Club property",
    objectPosition: "center",
    dark: true,
    reverse: true,
  },
  {
    id: 3,
    title: "A Lasting Legacy",
    text: `For generations of members, Cardinal Road has been the setting for first skating lessons, practices under the lights, weekend skating, games, and time spent together in the clubhouse. These shared experiences have shaped the character of GSC as much as any building or program. The club’s history continues through the families, friendships, and winter traditions that return to the rink each season.`,
    image: "gsc-history-legacy.jpg",
    alt: "Skating traditions at Greenwich Skating Club",
    objectPosition: "center",
    dark: false,
    reverse: false,
  },
];

function HistorySection({ section }) {
  const sectionClasses = [
    "history-section",
    section.dark ? "history-section--dark" : "history-section--light",
    section.reverse ? "history-section--reverse" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClasses}>
      <div className="history-section__inner">
        <div className="history-copy">
          <div className="history-copy__rule" aria-hidden="true" />

          <h2>{section.title}</h2>

          <p>{section.text}</p>
        </div>

        <div className="history-visual">
          <div className="history-image-frame">
            <img
              src={getImageUrl(section.image)}
              alt={section.alt}
              style={{ objectPosition: section.objectPosition }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const headerBackground = {
    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(5, 25, 56, 0.94) 0%,
        rgba(5, 25, 56, 0.8) 43%,
        rgba(5, 25, 56, 0.46) 75%,
        rgba(5, 25, 56, 0.3) 100%
      ),
      url("${getImageUrl("gsc-history-header.jpg")}")
    `,
  };

  return (
    <div className="history-page">
      <header className="history-hero" style={headerBackground}>
        <div className="history-hero__content">
          <div className="history-hero__branding">
            <img
              className="history-hero__logo"
              src={getImageUrl("gsc-logo.png")}
              alt="Greenwich Skating Club"
            />

            <span className="history-hero__divider" aria-hidden="true" />

            <h1>Club History</h1>
          </div>
        </div>
      </header>

      <main className="history-main">
        {historySections.map((section) => (
          <HistorySection key={section.id} section={section} />
        ))}
      </main>
    </div>
  );
}

export default App;