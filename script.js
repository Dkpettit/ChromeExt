async function fetchData(){
    const url = 'https://real-time-events-search.p.rapidapi.com/search-events?query=Concerts%20in%20London%20Ontario&date=any&is_virtual=false&start=0';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '67631460aemsh500c60fedb3fa1ep1bc9a8jsnf19f5a5688f8',
		'x-rapidapi-host': 'real-time-events-search.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    
    document.getElementById("concerts").innerHTML = result.data.map(item => `<div class="card">
  <img src="${item.thumbnail}" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>${item.name}</b></h4>
    <h2>Venue: ${item.venue.name}</h2> 
    <p>${item.description}</p> 
  </div>
</div>`).join('')
} catch (error) {
	console.error(error);
}
}


fetchData();
