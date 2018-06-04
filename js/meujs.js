var min = Math.ceil(0);
var max = Math.floor(3);
var Aleatorio = Math.floor(Math.random() * (max - min)) + min;
var dic = ["futebol", "escola","computador"]
var forca = dic[Aleatorio]
var count = 0;
$(document).ready(function () {
    for (var i = 0; i < forca.length; i++) {
        $('.campo').append('<input class="forca" type="text" data-forca="" data-posicao="' + i + '">');
    }

    $('.forca').each(function (i, elem) {
        $(elem).attr('data-forca', forca[$(elem).attr('data-posicao')])
    })

});

$('.submit').click(function () {
    if (count > forca.length - 1 || count > 5) {
        alert('Você perdeu!!!');
        window.location.reload();
       
    } else {
        if($('[data-forca="' + $('.palava').val().toLowerCase() + '"]').length > 0){
            $('[data-forca="' + $('.palava').val().toLowerCase() + '"]').val($('.palava').val())
            debugger;
        }
         else{
            count++;
            
            switch(count){
                case 1:
                $('.boneco').text('@');
                break;
                case 2:
                $('.boneco').text('@-');
                break;
                case 3:
                $('.boneco').text('@-<');
                break;
                case 4:
                $('.boneco').text('@-<-');
                break;
                case 5:
                $('.boneco').text('@-<-<');
                break;

            }
            
         } 
    }
})
