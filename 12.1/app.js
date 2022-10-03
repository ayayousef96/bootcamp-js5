const library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];

    //const Read_Books= library.find(book => { console.log((book.readingStatus==true).author)

    //Read_Books(library);
    const read=library.find(b => b.readingStatus==true);
    console.log(read.title+ " , " + read.author +" , "+read.readingStatus);