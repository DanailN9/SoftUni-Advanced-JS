function attachEvents() {
   
    const elements = {
        $angler: () => document.querySelector('#addForm input.angler'),
        $weight: () => document.querySelector('#addForm input.weight'),
        $species: () => document.querySelector('#addForm input.species'),
        $location: () => document.querySelector('#addForm input.location'),
        $bait: () => document.querySelector('#addForm input.bait'),
        $captureTime: () => document.querySelector('#addForm input.captureTime'),
        $addBtn: () => document.querySelector('#addForm button.add'),
        $loadBtn: () => document.querySelector('aside button.load'),
        $catches: () => document.getElementById('catches'),
        $exampleCatch: () => document.querySelector('div.catch'),
    }

    elements.$addBtn().addEventListener('click', addCatch);
    elements.$loadBtn().addEventListener('click', loadCatches)

    function addCatch() {
        const angler = elements.$angler().value;
        const weight = elements.$weight().value;
        const species = elements.$species().value;
        const location = elements.$location().value;
        const bait = elements.$bait().value;
        const captureTime = elements.$captureTime().value;

        catches.post({angler, weight, species, location, bait, captureTime,})
        .then(data => console.log(data))
    }

    function loadCatches() {

        catches.get()
        .then((allCatches) => {
            Object.keys(allCatches).forEach(id => {
                const copy = elements.$exampleCatch().cloneNode(true);

                copy.setAttribute('data-id', id);

                elements.$catches().appendChild(copy);
            })

            elements.$exampleCatch().remove();
        })
            
    }

    
}

attachEvents();

