/* function fetchGitHubProfileJSON() {
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data[0]);
            const image = data[0].image;
            const quote = data[0].quote;
            const name = data[0].character;

            const quoteHtml = `
                <figure class="quotecard">
                    <img src=${image} alt=${name} />
                    <figcaption>
                        <blockquote>${quote}</blockquote>
                        <cite>${name}</cite>
                    </figcaption>
                </figure>
            `;

            document.querySelector('#simpsons-quotes').innerHTML = quoteHtml;
        })
        .catch(err => console.log(err));
}

fetchGitHubProfileJSON(); */


function fetchSimpsonQuoteJSON() {
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';

    axios.get(url)
        .then(response => response.data)
        .then(function (data) {
            //console.log(data);

            const image = data[0].image;
            const quote = data[0].quote;
            const name = data[0].character;

            const quoteHtml = `
                <figure class="quotecard">
                    <img src=${image} alt=${name} />
                    <figcaption>
                        <blockquote>"${quote}"</blockquote>
                        <cite>${name}</cite>
                    </figcaption>
                </figure>
            `;

            document.querySelector('#simpsons-quotes').innerHTML = quoteHtml;

            
        });
}

fetchSimpsonQuoteJSON();

document.getElementById("quoteBtn").addEventListener("click", function () {
    fetchSimpsonQuoteJSON();
});


