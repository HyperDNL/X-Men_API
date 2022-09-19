function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function search() {
    var txtSearch = document.getElementById('search_text').value;
    txtSearch = txtSearch.toLowerCase();
    let e = document.getElementsByClassName('card');
    const urlAPI = 'https://xmenapiheroku.herokuapp.com/api/characters/?name=';
    var urlSearch = urlAPI + txtSearch;
    for (i = 0; i < e.length; i++) {
        if (!e[i].innerHTML.toLowerCase().includes(txtSearch)) {
            e[i].style.display = "none";
        }
        else {
            e[i].style.display = "div";
        }
    }
}

const col = document.getElementById('data_father')
const url = 'https://xmenapiheroku.herokuapp.com/api/characters';

function fetchToAPI(urlAPI) {
    fetch(urlAPI)
        .then((resp) => resp.json())
        .then(function (data) {
            for (i in data.results) {
                let divContainer = createNode('div');
                divContainer.classList.add('col');
                let divCard = createNode('div');
                divCard.classList.add("card");
                divCard.style.margin = '0.5rem';
                let divCardBody = createNode('div');
                divCardBody.classList.add('card-body');
                let h3 = createNode('h3');
                h3.classList.add('card-title');
                let img = createNode('img');
                img.classList.add('card-img-top');
                let p1 = createNode('p');
                p1.classList.add('card-text');
                let p2 = createNode('p');
                p2.classList.add('card-text');
                let p3 = createNode('p');
                p3.classList.add('card-text');
                let p4 = createNode('p');
                p4.classList.add('card-text');
                if (data.results[i].alias === '') {
                    img.src = data.results[i].img;
                    h3.innerHTML = `${data.results[i].name}`
                    p1.innerHTML = `Nombre: ${data.results[i].name}`;
                    p2.innerHTML = `Descripción: ${data.results[i].description}`;
                    p3.innerHTML = `Poderes: ${data.results[i].powers}`;
                    p4.innerHTML = `Afiliación: ${data.results[i].affiliation}`;
                }
                else {
                    img.src = data.results[i].img;
                    h3.innerHTML = `${data.results[i].alias}`
                    p1.innerHTML = `Nombre: ${data.results[i].name}`;
                    p2.innerHTML = `Descripción: ${data.results[i].description}`;
                    p3.innerHTML = `Poderes: ${data.results[i].powers}`;
                    p4.innerHTML = `Afiliación: ${data.results[i].affiliation}`;
                }
                append(divCard, img);
                append(divCardBody, h3);
                append(divCardBody, p1);
                append(divCardBody, p2);
                append(divCardBody, p3);
                append(divCardBody, p4);
                append(divCard, divCardBody);
                append(divContainer, divCard)
                append(col, divContainer);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}