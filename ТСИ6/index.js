$( document ).ready(function() {  //обращение к документу
$('.bookmark').click(function (e) {   //если нажат элемент класса "bookmark"
e.preventDefault();
$(this).toggleClass('added');
var parentId = $(this).parent().attr("id"); //передача переменной значение родительского атрибута
var bookMarks = $('.bookmark-list');  //переменная получает значение id bookmark-list
if($(this).hasClass('added')) { //если у выбранного элемента, установлено значение добавлено, то при нажатии оно меняется на удалить из закладок
$(this).text("Удалить из закладок");
var text = $('#' + parentId +' h2').text(); //формируется отправка элемента добавленного в закладки в поле Закладки
$('<a>', { href: '#' + parentId, text: text}).appendTo(bookMarks);  // добавление в поле закладки
} else {
$(this).text("Добавить в закладки");  //если у выбранного элемента, не установлено значение добавлено, то при нажатии оно меняется на добавить в закладки
$('a[href="#'+ parentId +'"]').remove();  //элемент удаляется из закладок
}
});
});
