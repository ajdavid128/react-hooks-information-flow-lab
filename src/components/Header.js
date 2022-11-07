

function Header({propClickFn, propState}) {


    return (
    <header>
        <h2>Shopster</h2>
        <button onClick={propClickFn}>
          {propState ? "Light" : "Dark"} Mode
        </button>
      </header>
    );
}

export default Header;