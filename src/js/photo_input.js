// Загрузка фото

// переменне
let input_photo = document.querySelector('Photo-input');
let user_photo = document.querySelector('Users_photo');
let user_photo_preview = document.querySelector('Card-card-profile-photo');

// функция
inputAvatar.addEventListener('change', function(){
    user_photo.src = URL.createObjectURL(input_photo.files[0]);
    user_photo.style.display = "block";
    document.querySelector('Photo').style.display = "none";
    user_photo_preview.style.backgroundImage = `url(${user_photo.src})`;
    user_photo_preview.style.border = "none";
    window.localStorage.setItem('avatar', user_photo.src);
});
