var post = {
    title: 'Título do Post',
    text: 'Texto do post',
    bannerImage: '',
    inlineImages: []
};

document.getElementById('banner-upload').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        var imageAsDataURL = reader.result;
        document.getElementById('banner-pic').style.backgroundImage = 'url(' + imageAsDataURL + ')';
        post.bannerImage = imageAsDataURL;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        document.getElementById('banner-pic').style.backgroundImage = '';
        post.bannerImage = '';
    }
});

document.getElementById('publish-button').addEventListener('click', function() {
    // Gerar um ID único para o post
    var postId = 'post' + Date.now();

    // Salvar o post no localStorage
    localStorage.setItem(postId, JSON.stringify(post));
});

document.getElementById('inline-image-upload').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        var imageAsDataURL = reader.result;
        var postText = document.getElementById('post-text');
        var img = document.createElement('img');
        img.src = imageAsDataURL;
        var link = document.createElement('a');
        link.textContent = file.name;
        link.href = '#';
        link.addEventListener('click', function(e) {
            e.preventDefault();
            postText.removeChild(img);
            postText.removeChild(link);
            var index = post.inlineImages.indexOf(imageAsDataURL);
            if (index !== -1) {
                post.inlineImages.splice(index, 1);
            }
        });
        // Insirir a imagem e o link no texto do post
        postText.appendChild(img);
        postText.appendChild(link);
        // Adicionar a URL de dados da imagem ao array de imagens inline do post
        post.inlineImages.push(imageAsDataURL);
    }

    if (file) {
        reader.readAsDataURL(file);
    }
});