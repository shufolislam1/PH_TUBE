const loadAll = ()=>{
    fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
    .then(res => res.json())
    .then(data => displayData(data.data))


    // alert('done');
}

const displayData = (data) => {
    const cardContainer = document.getElementById('card-container')
    data.forEach(singelData => {
        console.log(singelData);
        const card = document.createElement('div');
        card.classList.add('col-lg-3')
        card.classList.add('p-4')
        card.classList.add('text-center')
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src=${singelData.thumbnail} class="card-img-top" alt="...">
        <div class="card-body">
          <div>
          <div>
              <img src="" alt="" srcset="">
          </div>
          <div>
              <h1></h1>
              <p></p>
          </div>
      </div>
        </div>
      </div>
        
        `
        cardContainer.appendChild(card)
    });
}

