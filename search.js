export default {
    search: function (searchT, limit, filters){
        console.log('Searching for DatA .............................')
        const url =             `https://api.happi.dev/v1/music?q=${searchT}&limit=${limit}&apikey=b70706IPo2prhU2uLqD5OLoMHAVZxI0kfdJY4936JqVQ2mNs3611Bz7b&type=${filters}`

        console.log(url);
        return   fetch(
            `https://api.happi.dev/v1/music?q=${searchT}&limit=${limit}&apikey=b70706IPo2prhU2uLqD5OLoMHAVZxI0kfdJY4936JqVQ2mNs3611Bz7b&type=${filters}`
          )
            .then(res => res.json())
            .then(data => {
                console.log(data.result)
              return data.result;
            })
            .catch(err => console.log(err));
        }
    
}