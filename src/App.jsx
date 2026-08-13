import "./App.css";
import Footer from "./components/Footer.jsx";

const getImageUrl = (fileName) =>
  `${import.meta.env.BASE_URL}images/${fileName}`;

const historySections = [
  {
    id: "early-years",
    title: "Early Years (1954–1970s)",
    layout: "image",
    image: "gsc-history-beginnings.jpg",
    alt: "Historic Greenwich Skating Club imagery",
    objectPosition: "center",
    dark: false,
    reverse: false,
    nudgeUp: true,
    blocks: [
      {
        type: "p",
        text: `The Greenwich Skating Club was founded in 1954 by a group of local families who wanted to create a community-centered skating club for Greenwich residents. Originally, the club operated around an outdoor skating rink on Cardinal Road, near Greenwich High School. Over time, membership grew steadily as hockey and figure skating became increasingly popular.`,
      },
    ],
  },
  {
    id: "growth",
    title: "A Full-Service Skating Club",
    layout: "image",
    image: "gsc-history-redevelopment.jpg",
    alt: "The redeveloped Greenwich Skating Club property",
    objectPosition: "center",
    dark: true,
    reverse: true,
    blocks: [
      {
        type: "p",
        text: `As the club expanded, it evolved from a simple outdoor rink into a year-round winter sports organization. Today, the club includes:`,
      },
      {
        type: "list",
        items: [
          "Approximately 250 member families",
          "A private skating rink",
          {
            text: "A renovated clubhouse with:",
            children: [
              "Locker rooms",
              "Pro shop",
              "Coaching rooms",
              "Snack bar",
              "Fireplaces and gathering spaces",
            ],
          },
          "Extensive youth hockey and figure skating programming",
          "Adult hockey leagues",
          "Curling",
          "Family skating and community events",
        ],
      },
    ],
  },
  {
    id: "hockey-home",
    title: "A Home for Hockey in Greenwich",
    layout: "image",
    image: "gsc-history-legacy.jpg",
    alt: "Skating traditions at Greenwich Skating Club",
    objectPosition: "center",
    dark: false,
    reverse: false,
    blocks: [
      {
        type: "p",
        text: `The club has long been recognized for its youth hockey program. Over the decades it has developed:`,
      },
      {
        type: "list",
        items: [
          "Learn-to-skate and Learn-to-Play Hockey programs",
          "Travel hockey teams",
          "Girls' hockey",
          "Adult recreational leagues",
          "Holiday Stick & Puck sessions",
        ],
      },
      {
        type: "p",
        text: `Many players who later competed at the collegiate, professional, and Olympic levels spent time skating at Greenwich Skating Club as children.`,
      },
    ],
  },
  {
    id: "elite-players",
    title: "Producing Elite Players",
    layout: "full",
    dark: true,
    blocks: [
      {
        type: "p",
        text: `Although GSC has always emphasized family participation over elite competition, the club has helped develop numerous players who reached:`,
      },
      {
        type: "list",
        items: ["NCAA hockey", "professional hockey", "Olympic competition"],
      },
      {
        type: "p",
        text: `Among the most-known alumnus is Cam Atkinson, who played at GSC as a Squirt before eventually reaching the NHL.`,
      },
      {
        type: "p",
        text: `Many other collegiate players from Greenwich began skating at Cardinal Road before moving on to prep schools and Division I programs.`,
      },
    ],
  },
  {
    id: "renovation",
    title: "Renovation and Modernization",
    layout: "image",
    image: "gsc-history-renovation.jpg",
    alt: "The renovated Greenwich Skating Club clubhouse",
    objectPosition: "center",
    dark: false,
    reverse: true,
    blocks: [
      {
        type: "p",
        text: `While preserving its traditional character, Greenwich Skating Club has invested in significant clubhouse improvements. Recent renovations modernized the facility while maintaining the welcoming atmosphere that members associate with the club.`,
      },
    ],
  },
  {
    id: "today",
    title: "Today",
    layout: "full",
    dark: true,
    blocks: [
      {
        type: "p",
        text: `Today the Greenwich Skating Club remains a family-oriented private club whose mission is to provide:`,
      },
      {
        type: "list",
        items: [
          "Youth hockey",
          "Figure skating",
          "Recreational skating",
          "Adult hockey",
          "Curling",
          "Social events that bring together multiple generations of Greenwich families",
        ],
      },
      {
        type: "p",
        text: `Its emphasis on community, volunteerism, and family participation has made it one of the town's enduring athletic institutions.`,
      },
    ],
  },
  {
    id: "timeline",
    title: "Timeline",
    layout: "full",
    dark: false,
    blocks: [
      {
        type: "table",
        caption: "Greenwich Skating Club timeline",
        headers: ["Year", "Milestone"],
        rows: [
          ["1954", "Greenwich Skating Club founded as an outdoor skating club."],
          ["1960s", "Membership and youth hockey programs expand."],
          [
            "1970s",
            "Clubhouse and facilities continue to grow while the Town opens its own municipal rink nearby.",
          ],
          [
            "1980s–2000s",
            "Travel hockey, figure skating, adult leagues, and curling become established programs.",
          ],
          [
            "Recent years",
            "Clubhouse renovations and continued investment in youth programming and member amenities.",
          ],
        ],
      },
    ],
  },
];

function HistoryList({ items, nested = false }) {
  return (
    <ul className={nested ? "history-list history-list--nested" : "history-list"}>
      {items.map((item, index) => {
        const isSimple = typeof item === "string";
        const text = isSimple ? item : item.text;
        const children = isSimple ? null : item.children;

        return (
          <li key={index}>
            {text}
            {children ? <HistoryList items={children} nested /> : null}
          </li>
        );
      })}
    </ul>
  );
}

function HistoryBlock({ block }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;

    case "list":
      return <HistoryList items={block.items} />;

    case "table":
      return (
        <div className="history-table-wrap">
          <table className="history-table">
            <caption className="sr-only">{block.caption}</caption>
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th key={header} scope="col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

function ImageSection({ section }) {
  const sectionClasses = [
    "history-section",
    section.dark ? "history-section--dark" : "history-section--light",
    section.reverse ? "history-section--reverse" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const copyClasses = [
    "history-copy",
    section.nudgeUp ? "history-copy--nudge" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={section.id} className={sectionClasses}>
      <div className="history-section__inner">
        <div className={copyClasses}>
          <div className="history-copy__rule" aria-hidden="true" />

          <h2>{section.title}</h2>

          {section.blocks.map((block, index) => (
            <HistoryBlock block={block} key={index} />
          ))}
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

function FullSection({ section }) {
  const sectionClasses = [
    "history-section",
    "history-section--full",
    section.dark ? "history-section--dark" : "history-section--light",
  ].join(" ");

  return (
    <section id={section.id} className={sectionClasses}>
      <div className="history-section__inner">
        <div className="history-copy">
          <div className="history-copy__rule" aria-hidden="true" />

          <h2>{section.title}</h2>

          {section.blocks.map((block, index) => (
            <HistoryBlock block={block} key={index} />
          ))}
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

            <h1>Club History</h1>
          </div>
        </div>
      </header>

      <main className="history-main">
        {historySections.map((section) =>
          section.layout === "image" ? (
            <ImageSection key={section.id} section={section} />
          ) : (
            <FullSection key={section.id} section={section} />
          ),
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
