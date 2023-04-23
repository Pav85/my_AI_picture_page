
const App = () => {
  const surpriseOptions = [
    "A kangaroo on the bicycle",
    "Dancing bear in a pink dress",
    "Realistic photo of Hitler playing chess with Jesus"
  ]

  const getImages = async() => {
    try {
      const options = {
        method: "POST"
      }
      const response = await fetch('http://localhost:8000/images', options)
    } catch (error) {
      console.error(error)
    }
  }
 
  return (
    <div className="app">
      <section className="search-section">
        <p>Enter detailed description of a picture  
          <span className="surprise">Surprise me</span>
          </p>
        <div className="input-container">
          <input placeholder="Mona Lisa wearing sunglasses" />
          <button onClick={getImages}>Generate</button>
        </div>
      </section>
      <section className="image-section"></section>
    </div>
  )
}

export default App
