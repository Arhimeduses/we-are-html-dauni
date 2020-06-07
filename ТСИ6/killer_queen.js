$(function () {

  var html_privacy = '';
  html_privacy += '<p>';
  html_privacy += '<input type="checkbox" name="privacy">';
  html_privacy += '<a href="#" style="color: black;" target="_blank">Я согласен на обработку персональных данных</a>';
  html_privacy += '</p>';
  $('#ayaya p:last').before(html_privacy);

  var use_privacy = true;
  $('#ayaya').on('submit', function (e) {

    if (use_privacy) {
      if (!$(this).find('input[name=privacy]').prop('checked')) {
        alert('Для продолжения вы должны принять условия Пользовательского соглашения');
        return false;
      }
    }

    //Тут код отправки формы
    document.write('Благодарим за сотрудничество!');

    e.preventDefault();
  });
});
