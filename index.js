import reddit from './search'
const search = document.getElementById('search-form');
const input = document.getElementById('search-input');
search.addEventListener('submit', e => {
e.preventDefault();
const searchT = input.value;
  console.log(searchT);
  const filters = document.querySelector('input[name="type"]:checked').value;
  console.log(filters);
  let limit = document.getElementById('limit').value;
  console.log(limit);

  reddit.search(searchT, limit, filters).then(results => {
    let output = '<div class="card-columns">';
    console.log(results);
    results.forEach(post => {
      // Check for image
      if(filters === 'track'){
/* */
      output += `
      <div class=" song card mb-2">
      <img class="card-img-top" src="${post.cover}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${post.artist}</h5>
        <p class="card-text"><b>Album: </b>${post.album}</p>

        <p class="card-text"><b>Track: </b>${post.track}</p>
      </div>
    </div>
      `;
      }
      else{
        output += `
        <div class="card mb-2">
        <img class="card-img-top" src="${post.cover}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${post.artist}</h5>
  
        </div>
      </div>`
      }
    });
    output += '</div>';
    document.getElementById('res').innerHTML = output;
  });

})