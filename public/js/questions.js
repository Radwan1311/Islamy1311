var coll = document.getElementsByClassName("questions_collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("questions_active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}





function changeLanguage(lang) {

     location.hash = lang;
     location.reload();
   }


   // Define the language reload anchors
   var language = {
     nav:{
       index11:'الرئيسية',
       index12:'تاريخ الاسلام',
       index13:'الصلاة',
       index14:'القرءان',
       index15:'الاسئله الشائعه',
       index16:'تواصل معنا'

     },
     question_ar:{
       question1:'',

     }

   };

   console.log(window.location.hash);
   // Check if a hash value exists in the URL
   if (window.location.hash === '#ar') {

     // Set the content of the webpage
     // depending on the hash value
     if (window.location.hash == "#ar") {

       $('body').css( {'text-align': 'right'});
       $('.footer').css( {'margin': '5% auto 0 auto'});
       $('.content').css( {'margin': '2% auto 0 auto'});
       $('span').css( {'text-align': 'right' ,'font-size':'1.5rem'});
       $('h2').css( {'text-align': 'right' , 'font-size':'2.5rem'});



       $('.index11').html(language.nav.index11);
       $('.index11').attr('href', '/#ar');

       $('.index12').html(language.nav.index12);
       $('.index12').attr('href', '/history#ar');

       $('.index13').html(language.nav.index13);
       $('.index13').attr('href', '/prayer#ar');

       $('.index14').html(language.nav.index14);
       $('.index14').attr('href', '/quran#ar');

       $('.index15').html(language.nav.index15);
       $('.index15').attr('href', '/questions#ar');

       $('.index16').html(language.nav.index16);
       $('.index16').attr('href', '/contact#ar');


       $('#question1').html(language.question_ar.question1);




     }

   }
