$(function()
{
    $('#text').css('font-family', 'Arial');
});


// $('#text').css('font-family', 'Arial');
/*Dans les premiers exercices on changeait quelque chose directement dans le html du coup on ne marque que " $('').remove();
grace au CSS en temps normal on peut modifier la couleur, la taille de la typo... donc on va pouvoir changer directement les choses dans le CSS d'ou le " $('').CSS()"
css est une méthode qui permet la modification du style de nos page 
la méthode CSS() il faut spécifier le nom de la propriété afin de récupérer sa valeur
Imaginon que l'on a un paragraphe qui est de couleur vert pour recuperer cette donnée on devrai écrire $('p').css('color');
si il est possible de récupérer la valeur d'une propriété CSS spécifique, il est aussi possible d'en définir et de la modifier
pour cela il suffit de passer un 2 argument à la méthode qui contiendra la valeur à donner à l'attribut le 1er le nom spécifique (color, font... et apres le nom de la couleur, la typo... qui va écraser la 1er
    Pour mettre plusieurs valeurs sur 1 object.... il faut  $('').css(font-family: 'Arial , Avetika , .....' , font-size: '20px'); il faut séparer chaque valeur... il faut mettre un ":" pour préciser chaque */