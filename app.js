const loadCatagory = () => {
    fetch(`https://openapi.programming-hero.com/api/videos/categories`)
      .then(res => res.json())
      .then(data => {
        const categoryIds = data.data.map(singleId => singleId.category_id);
        attachEventListeners(categoryIds);
      })
      .catch(error => console.error('Error fetching categories:', error));
  };


const attachEventListeners = (categoryIds) => {
    document.querySelectorAll('.category-btn').forEach((button, index) => {
      button.addEventListener('click', function () {
        // console.log(categoryIds);
        const categoryId = categoryIds[index];
        // console.log(categoryId);
        loadAll(categoryId);
      });
    });
  };

const loadAll = (id)=>{
    // console.log('fullllllll', id);
    try {
        fetch(`https://openapi.programming-hero.com/api/videos/category/${id?id:1000}`)
        .then(res => res.json())
        .then(data => displayData(data.data))
    } catch (error) {
        console.log("erroor", error);
    }

}

// load drawing
const loadDrawing = ()=>{
  const drawing = document.getElementById('drawing')
  const card = document.createElement('div');
  card.innerHTML=`<div>
  <img style="width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 40px;
background: url(<path-to-image>), lightgray 50% / cover no-repeat;" src="./Design in png/Icon.png" alt="" srcset="">
</div>`
drawing.appendChild(card)
}


const displayData = (data) => {
    const cardContainer = document.getElementById('card-container')

    // clearing already loaded data... (ei line tar jonno ami 2 ghonta boisa aasi. mane ami kotttttto boro ekta gadha)
    cardContainer.innerHTML = '';
    // ********************************
    data.forEach(singelData => {
        // console.log(singelData.category_id);
        const card = document.createElement('div');
        card.classList.add('col-lg-3')
        card.classList.add('p-4')
        card.classList.add('text-center')
        card.innerHTML = `
        <div class="card" style="width: 18rem; border: none;">
        <img style="border-radius: 10px" src=${singelData.thumbnail} class="card-img-top" alt="...">
        <div class="card-body">
          <div class="d-flex mt-3">
          <div>
              <img style="width: 40px;
              height: 40px;
              flex-shrink: 0;
              border-radius: 40px;
background: url(<path-to-image>), lightgray 50% / cover no-repeat;" src=${singelData.authors[0].profile_picture} alt="" srcset="">
          </div>
          <div class="mx-5">
              <p>${singelData.others.posted_date}</p>
              <p style="color: #171717;
              font-family: Inter;
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              line-height: 26px; /* 162.5% */">${singelData.title}</p>
              <p style="color: rgba(23, 23, 23, 0.70);
              font-family: Inter;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              ">${singelData.authors[0].profile_name} 
              <span style="width: 20px;
          height: 20px;
          flex-shrink: 0;">
          ${singelData.authors[0].verified ? '<img src="./Design in png/tik.png" style="" alt="">' : ''}
          </span>
              </p>
              <p style="color: rgba(23, 23, 23, 0.70);
              font-family: Inter;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;">${singelData.others.views} views</p>
          </div>
          
          
      </div>
        </div>
      </div>
        
        `
        cardContainer.appendChild(card)
        
    });
}


loadCatagory()
loadAll()