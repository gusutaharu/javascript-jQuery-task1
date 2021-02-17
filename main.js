$(function() {
  
  //スタート
  $('#button1').click(function(){

    
    //カウント開始
  
   timer = setInterval(countUp, 100);
  
  //ボタン処理
  $(this).prop('disabled', true);
  $('#button2,#button3').prop('disabled', false);
  });
  
  //ストップ
  $('#button2').click(function(){
    //カウント停止
    clearInterval(timer);
    //ボタン処理
    $(this).prop('disabled', true);
    $('#button1,#button3').prop('disabled', false);
  
  });
  
  //リセット
  
  $('#button3').click(function(){
    
    //カウントリセット
    msec = 0;
    sec = 0;
    csec = 0;
    min = 0;
    $('.time').html('0:0:0:0');
    clearInterval(timer);
    //ボタン処理
    $('#button2,#button3').prop('disabled', true);
    $('#button1').prop('disabled', false);
  });
  
  
  
  
  
  
  
  
});

let msec = 0;
let sec = 0;
let csec = 0;
let min = 0;

//数字部分
  function countUp(){
    
  
    
   $('.time').html( min + ':' + csec +':'+ sec +':' + msec );
    
    msec += 1;
    
    if (msec > 9){
      msec = 0;
      sec += 1;
    }
    
    if (sec > 9){
      sec = 0;
      csec += 1;
    }
    
    if (csec > 5){
      csec = 0;
      min += 1;
    }
    
     
  }