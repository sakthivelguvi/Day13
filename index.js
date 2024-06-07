// // create a paragraph Html element
// let paragraph = document.createElement('P');
// //set the content of the pargraph
//     paragraph.textContent = 'This is dynamically created the paragraph element'
// // append  the paragraph element to the html body
// document.body.appendChild(paragraph);
// console.log(paragraph);

// let link = document.createElement('a');

// set the attribute

// link.href = 'http://www.google.com'
// link.textContent = 'visit google.com'
// document.getElementById('secondDiv').appendChild(link);
// let googleLogo = document.createElement('img');

// googleLogo.setAttribute('src','./image.png');   

// googleLogo.setAttribute('alt','googleLogo');

// googleLogo.id = 'google-logo';
// googleLogo.className = 'logo';
// // googleLogo width:200Px
// googleLogo.style.width = '500px';
// document.getElementById('secondDiv').appendChild(googleLogo);

// let createULlist = document.createElement('ul');
// createULlist.setAttribute('li');
// createULlist.textContent='Item1'
// document.getElementById('secondDiv').appendChild(createULlist);
//Create New Anchor element

//5. Create a new '<a>' (anchor) element and set its 'href' attribute to 'https://www.google.com' and its 'target' attribute to "_blank". Append the anchor element to a '<p>' element.

// let anchorElement = document.createElement('a');
// anchorElement.setAttribute('href','http://google.com');
// anchorElement.setAttribute('target','_blank');
// anchorElement.textContent='visit google.com';
// // document.getElementById('paragraph').appendChild(anchorElement);
// let paragraph = document.createElement('p');
// paragraph.appendChild(anchorElement);
// document.body.appendChild(paragraph);

// let list = document.createElement('ul');

// let listItem = document.createElement('li');
// listItem.textContent = 'item1';
// list.appendChild(listItem);

// listItem = document.createElement('li');
// listItem.textContent = 'item2';
// list.appendChild(listItem);

// listItem = document.createElement('li');
// listItem.textContent = 'item3';
// list.appendChild(listItem);

// listItem = document.createElement('li');
// listItem.textContent = 'item4';
// list.appendChild(listItem);

// // document.body.append(list);//or other menthod below  
// document.getElementById('listContainer').appendChild(list);
// let ListItems = ['Coffee','Tea','Green Tea','Black tea'];
// let list =document.createElement('ol');
// ListItems.forEach(data=> {
//     let listitems= document.createElement('li');
//     listitems.textContent=data;
//     list.appendChild(listitems);

// });
// document.getElementById('listContainer').appendChild(list);
// let ListItems = ['Coffee','Tea','Green Tea','Black tea'];
// let list ='<ul>';
//  ListItems.forEach(item => {
//     list+='<li>'+ item +'</li>';
// });
// list+='</ul>';
// document.getElementById('listContainer').innerHTML=list;
// let highlightedElement = document.getElementsByClassName('highlight');
// for (let index=0; index <
//     highlightedElement.length; index++){
//     highlightedElement[index].style.backgroundColor='red';
//     }
// console.log(highlightedElement);
// let pragraphs = document.getElementsByTagName('p');
// console.log(pragraphs[0]);
// let paragraph = document.querySelectorAll('highlight') 
let paragraph = document.querySelector('#paragraph');

console.log(paragraph);