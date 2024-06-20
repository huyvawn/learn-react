import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Welcome name="Neo" />
      <Text />
      <StyledText />
    </div>
  );
}

function Welcome(props) {
  return(
    <section>
      <h1>
        Hello, <span> {props.name}</span>
      </h1>
    </section>
  );
}

function withStyles(Component) {
  return(props) => {
    const style = {
      color: "red",
      fontSize: "1em",
      ...props.style,
    };
    return <Component {...props} style ={style} />;
  };
}

const Text = ({style = {}}) => (
  <p style={{ ...style, fontFamily: "Inter"}}>Hello world!</p>
);

const StyledText = withStyles(Text);

export default App;
