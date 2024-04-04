const word: HTMLInputElement = document.getElementById('search');
const search: HTMLImageElement = document.querySelector('.search-bar img');
const toggle: HTMLInputElement = document.querySelector('#theme-toggle')


search.addEventListener('click', () => {

    console.log('Has been clicked');
    async function fetchData() {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`)
            .then(resp => {
                // console.log(resp.json());

                return resp.json();
            }).catch(error => console.error('Error!', error))

        console.log(response);
    }
    fetchData()

})

