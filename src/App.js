import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div>Dictionary</div>
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/JanaZorigt/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub link"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://github.com/JanaZorigt"
            target="_blank"
            rel="noopener noreferrer"
            title="Jana's GitHub Profile"
          >
            Jana Zorigt
          </a>
        </footer>
      </div>
    </div>
  );
}
