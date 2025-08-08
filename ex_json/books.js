//Function to fetch and work with JSON data
function fetchBooks()
{
    // Fetch the JSON data from file
    fetch('books.json')
    .then(response => response.json())
    .then(data =>{
        // Data contains the JSON content
        console.log('List of Books:');
        data.forEach(book => {
            console.log(`Title: ${book.title}`);
            console.log(`Auhtor: ${book.author}`);
            console.log(`Publication Year: ${book.publicationYear}`);
            console.log('----------------------------------');
        });
        // you can perform other operations with JSON data here.
    })
    .catch(error =>{
        console.error('Error fetching JSON data:' , error);
    });
}

// Call the function to fetch and work with JSON data

fetchBooks();