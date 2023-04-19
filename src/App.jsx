
const App = () => {
  const surpriseOptions = [
    "A kangaroo on the bicycle",
    "Dancing bear in a pink dress",
    "Realistic photo of Hitler playing chess with Jesus"
  ]
 
  return (
    <div className="App">
      <section className="search-section">
        <p>Enter detailed description of a picture 
          <span className="surprise">Surprise me</span>
          </p>
      </section>
      <section className="image-section"></section>
    </div>
  )
}

export default App
