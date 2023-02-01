function App() {
    return (
        <>
            <div>sdlfjlkaskj {text}</div>
            <button onClick={change}>Click</button>
        </>
        
    )
}

function change() {
    [text, setText] = useState("Hello");

    const updateClick = () => {
        setText("Boo!")
    }

}

ReactDOM.render(<App/>, document.getElementById('root'))