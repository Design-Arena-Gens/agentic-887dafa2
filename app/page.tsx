import { results } from "../data/results";

function Numbers({ values }: { values: [string, string, string] }) {
  return (
    <span className="numbers">
      <span>{values[0]}</span>
      <span>?</span>
      <span>{values[1]}</span>
      <span>?</span>
      <span>{values[2]}</span>
    </span>
  );
}

export default function Page() {
  return (
    <main>
      <div className="grid">
        <section className="section section-half">
          <div className="card">
            <h3>
              <span>?? Day Games</span>
              <span className="badge">Results</span>
            </h3>
            <div className="list">
              {results.dayGames.map((game) => (
                <div className="item" key={game.name}>
                  <div className="name">{game.name}</div>
                  <Numbers values={game.numbers} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section section-half">
          <div className="card">
            <h3>
              <span>?? Night Games</span>
              <span className="badge">Results</span>
            </h3>
            <div className="list">
              {results.nightGames.map((game) => (
                <div className="item" key={game.name}>
                  <div className="name">{game.name}</div>
                  <Numbers values={game.numbers} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
