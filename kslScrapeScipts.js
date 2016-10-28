//get all major categories
var categories = [];

$('.categoryHeader').find('.categoryTitle a').each(function(i, e){
  var category = {};
  category['name'] = e.innerHTML;
  category['category'] = $(e).attr('href').split('=').slice(-1)[0];
  category['cat'] = '-1';
  category['optgroup'] = true;
  categories.push(category);
});
var categoriesJSON = JSON.stringify(categories);


/*
 {"Announcements":"http://www.ksl.com/?nid=231&category=1","Appliances":"http://www.ksl.com/?nid=231&category=344","Auto Parts and Accessories":"http://www.ksl.com/?nid=231&category=100","Baby ":"http://www.ksl.com/?nid=231&category=350","Books and Media":"http://www.ksl.com/?nid=231&category=352","Clothing and Apparel":"http://www.ksl.com/?nid=231&category=348","Computers":"http://www.ksl.com/?nid=231&category=16","Electronics":"http://www.ksl.com/?nid=231&category=345","Hunting and Fishing":"http://www.ksl.com/?nid=231&category=353","For Trade or Barter":"http://www.ksl.com/?nid=231&category=252","FREE":"http://www.ksl.com/?nid=231&category=349","Furniture":"http://www.ksl.com/?nid=231&category=40","General":"http://www.ksl.com/?nid=231&category=63","Home and Garden":"http://www.ksl.com/?nid=231&category=51","Industrial":"http://www.ksl.com/?nid=231&category=94","Other Real Estate":"http://www.ksl.com/?nid=231&category=523","Outdoors and Sporting":"http://www.ksl.com/?nid=231&category=184","Pets and Livestock":"http://www.ksl.com/?nid=231&category=104","Recreational Vehicles":"http://www.ksl.com/?nid=231&category=142","Toys":"http://www.ksl.com/?nid=231&category=351"}

 */
