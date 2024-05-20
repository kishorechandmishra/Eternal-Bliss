const imageContainer = document.getElementById('imageContainer');
const apiKey = '5vCv7VLkeLtulPQjU_ajLyNK3YpVmRAm2S4CFnSyw_w'; // Replace with your Unsplash API key
let page = 1;

const fetchImages = () => {
    fetch(`https://api.unsplash.com/photos?client_id=${apiKey}&page=${page}&per_page=10`)
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.urls.regular;
                imgElement.alt = image.alt_description || 'Beautiful Image';
                imageContainer.appendChild(imgElement);
            });
            page++;
        })
        .catch(error => console.error('Error fetching images:', error));
};

const loadMoreImages = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        fetchImages();
    }
};

window.addEventListener('scroll', loadMoreImages);
fetchImages();
