/* Взаимодействия с элементами */

// $('h2, p').css('border', '1px solid #000'); // Первый, второй, третий и т.д.
// $('h2 span') // outer и inner вернет абсолютно все спан лежащие в h2
// $('h2 > span') // parent > child а это вернет только span? который дочка h2
//$('h2 + p').css('border', '2px solid #000'); // prev + next выделяется элемент(р) следующий после(h2) но только самый первый
// $('h2 ~ p') // prev ~ next 
// $('.second_ul li:first').css('border', '2px solid #000');
// $('.second_ul li:last').css('border', '2px solid #000');
// $('.second_ul li:odd').css('border', '2px solid #000');
// $('.second_ul li:gt(2)').css('background', 'red');
//.css('border', '1px solid #000'); 	
// $('form .from-control').css('border', '1px solid #000');
// $('button').css({
//   border: 'solid 1px red',
//   background: 'yellow'
// });
//Найти все radio-элементы из одной группы (где gender это значение атрибута name у искомой группы переключателей)

$('input[name = gender]').css('border', '1px solid red');
$('button').click(function (e) { 
  console.log('Приветствую, пользователь!')
});
$('button').dblclick(function (e) { 
  $(this).addClass('active');
});
$('.menu').css('display','none')
$('h3, .menu').mouseenter(function () { 
  $('.menu').css('display','block')
  // $('.second_ul li').css('border','solid 1px red')
});
$('h3, .menu').mouseleave(function () { 
  $('.menu').css('display','none')
  // $('.second_ul li').css('border','none')
});