

// window.addEventListener('scroll',function(){
//     console.log("hello");
// })
//window.addEventListener('scroll',function(){
    //         console.log(window.scrollY);
    //     })

let aboutOffset=$('#about').offset().top;  ///دي عشان اجيب بعد الabout عن بداية الموقع

    $(window).on('scroll',function(){
       
    let scrol=$(window).scrollTop();
    if(scrol==0){
        $('.scrollButton').addClass('d-none');
        }else{
        $('.scrollButton').removeClass('d-none');

        }
     if(scrol>aboutOffset-100){
        $('.navbar').css('backgroundColor','black');
     }else{
        $('.navbar').css('backgroundColor','transparent');

     }

})

$('.link-item').on('click',function(e){
    let currentancor=$(e.target).attr('href')
    let aboutOffset=$(currentancor).offset().top;
    $('html,body').animate({scrollTop:aboutOffset} , 3000);
   
})


//هنا معناه لما الكونتنت يبقى جاهز اعمل حاجه معينه

$(function(){
    $('.loader').fadeOut(500 ,function(){
    $('.loading').slideUp(500,function(){
        $('body').css('overflow','auto')
    });
      
    });

})
$('.scrollButton').on('click',function(){
        $('html,body').animate({scrollTop:0} , 3000);
        $('.scrollButton').addClass('d-none'); 
})
let boxColor=$('.box-color');
boxColor.eq(0).css('backgroundColor','red');
boxColor.eq(1).css('backgroundColor','#09c');
boxColor.eq(2).css('backgroundColor','gray');
boxColor.eq(3).css('backgroundColor','green');
boxColor.eq(4).css('backgroundColor','tomato');


$('#icon').on('click',function(){
    $('#innerSide').animate({width:'toggle',paddingInline:'toggle'},500)

})

$(boxColor).on('click',function(e){
   let color= $(e.target).css('backgroundColor');
   console.log(color);
   $('h3,a,p').css('cssText',`
       color:${color} !important
   `);

})