
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main className="App-main">
          <Dictionary defaultKeyword="flower" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Kerstin Wiessmann and is{" "}
            <a
              href="https://github.com/KerstinWieseline/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
            and hosted on{" "}
            <a
              href="https://kerstinsdictionary.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify!
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
