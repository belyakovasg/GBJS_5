$(document).ready(function () {
    $('form').on('submit', function (event) {
        event.preventDefault();
        $.ajax({
            url: 'validator.php', // файл, к которому обращаемся
            dataType: 'text', // тип загружаемых данных ???
            type: 'POST',
            data: {
                'username':     $('input[name=username]').val(),
                'password':     $('input[name=password]').val(),
                'email':        $('input[name=email]').val(),
                'gender':       $('input[name=gender]').val(),
                'credit_card':  $('input[name=credit_card]').val(),
                'bio':          $('input[name=bio]').val()
            },
            success: function (data, textStatus) {
               if (data == 'true') {
                    $('div#answer').text('Ok!');
                } else {
                    $('div#answer').text('Error!');
                }
            }
        });
    });
});
