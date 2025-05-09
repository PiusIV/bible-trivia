import reactLogo from "../assets/react.svg";

function Header() {
  return (
    <header className="flex gap-6 justify-center text-3xl font-serif font-bold mb-8">
      {/* <img src={reactLogo} alt="holy bible" /> */}
      <p className="text-green-400 capitalize">the bible trivia</p>
      <span>✝</span>
    </header>
  );
}

export default Header;
