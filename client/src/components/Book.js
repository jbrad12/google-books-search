

export default function Book({ books, saveBooks}) {

    const data = books.map(data => {
        let image = ""
        if (data.volumeInfo.imageLinks) {
           image = data.volumeInfo.imageLinks.thumbnail
        } else {
            image = ""
        }
        
        return (
            <div className="book">
                
                <h3>{data.volumeInfo.title}</h3>
                <h4>{data.volumeInfo.authors}</h4>
                <img src={image} alt="book" />
                <p>{data.volumeInfo.description}</p>
                <button onClick={() => saveBooks(data.id)}> Save Book</button>
            </div>
        )
    })
    let header = ""
    if (data) {header = <h1>Results</h1>}
    return (
      <div className="App">
          {header}
          {data}
      </div>
    );
  }