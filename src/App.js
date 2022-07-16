import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="sunset" />
        <footer>
          Open source code on{" "}
          <a
            className="git"
            href="https://github.com/jadercodes/dictionary-react"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
