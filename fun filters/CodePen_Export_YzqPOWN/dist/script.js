var img;
var greyimg;
var redimg;
var rainbowimg;
var invertimg;
var grainimg;
var greenimg;
var blueimg;
var flipimg;
var borderdimg;
var rand;





function loaded(image)
{
  if(image==null || !image.complete())
    {
      alert("PLEASE UPLOAD AN IMAGE !!");
      return false;
    }
  else 
    return true;
}



function upload()
{
  
  var canvas=document.getElementById("canvas1");
  var finput=document.getElementById("finput");
  img=new SimpleImage(finput);
  img.drawTo(canvas);
  //document.getElementById("dimen").innerHTML=img.getWidth()+" X "+img.getHeight();
  
}


function greyscale()
{
  if(loaded(img)){
    var canvas=document.getElementById("canvas1");
  var finput=document.getElementById("finput");
  greyimg=new SimpleImage(img);
  for(var pixel of greyimg.values())
    {
      var r = pixel.getRed();
    var g = pixel.getGreen();
    var b = pixel.getBlue();
    var avg = (r + g + b)/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
    }
  greyimg.drawTo(canvas);
}
}




function red()
{
  if(loaded(img)){
    var canvas=document.getElementById("canvas1");
  var finput=document.getElementById("finput");
  redimg=new SimpleImage(img);
  for(var pixel of redimg.values())
    {
      var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
     if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
     }
     else {
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
     }
  
    }
  redimg.drawTo(canvas);
}
}





function green()
{
  if(loaded(img)){
    var canvas=document.getElementById("canvas1");
  var finput=document.getElementById("finput");
  greenimg=new SimpleImage(img);
  for(var pixel of greenimg.values())
    {
      var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
     if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
     }
     else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(300);
        pixel.setBlue(2*avg-255);
     }
  
    }
  greenimg.drawTo(canvas);
}
}





function blue()
{
  if(loaded(img)){
    var canvas=document.getElementById("canvas1");
  var finput=document.getElementById("finput");
  blueimg=new SimpleImage(img);
  for(var pixel of blueimg.values())
    {
      var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
     if (avg < 143) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
     }
     else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(300);
     }
  
    }
  blueimg.drawTo(canvas);
}
}



function invert()
{
  if(loaded(img)){
   var canvas=document.getElementById("canvas1");
  var finput=document.getElementById("finput");
 //invertimg=new SimpleImage(img);
  var h=img.getHeight();
  var w=img.getWidth();
invertimg=new SimpleImage(w,h);  
  for(var pixel of img.values())
    {
      var x=pixel.getX();
      var y=pixel.getY();
      var original=img.getPixel(x,y);
      invertimg.setPixel(w-x-1,y,original);
    }
  invertimg.drawTo(canvas);
}
}




function vertical()
{
  if(loaded(img)){
   var canvas=document.getElementById("canvas1");
  var finput=document.getElementById("finput");
 //invertimg=new SimpleImage(img);
  var h=img.getHeight();
  var w=img.getWidth();
flipimg=new SimpleImage(w,h);  
  for(var pixel of img.values())
    {
      var x=pixel.getX();
      var y=pixel.getY();
      var original=img.getPixel(x,y);
      flipimg.setPixel(w-x-1,h-y-1,original);
    }
  flipimg.drawTo(canvas);
}
}






function border()
{
  if(loaded(img)){
    var canvas=document.getElementById("canvas1");
  var finput=document.getElementById("finput");
    //var c=document.getElementById("clr");
    //color=c.value;
  //  var pix=color.getPixel(0,0);
        // var r=color.getRed();
         //var g=color.getGreen();
         //var b=color.getBlue();
    borderdimg=new SimpleImage(img);
    var ht=borderdimg.getHeight();
    var wt=borderdimg.getWidth();
    //var thikness=10;
    for(var pixel of borderdimg.values())
      {
        var x=pixel.getX();
        var y=pixel.getY();
        if(x<25 || x >wt-25 || y<25 || y>ht-25)
          {
           pixel.setRed(255);
           pixel.setGreen(255);
            pixel.setBlue(255);
          }
  }
    borderdimg.drawTo(canvas);
    
  }
}






function rainbow()
{
if(loaded(img)){
    var canvas=document.getElementById("canvas1");
  //var finput=document.getElementById("finput");
     rainbowimg=new SimpleImage(img);
     for (var pixel of rainbowimg.values()) {
     var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
   
   var w = rainbowimg.getWidth();
   var h = rainbowimg.getHeight();
   var x = pixel.getX();
   var y = pixel.getY();
   
   if (y <= h/7) {
       if (avg < 128) {
       pixel.setRed(avg * 2);
       pixel.setGreen(0);
       pixel.setBlue(0);
   }
   else {
       pixel.setRed(255);
       pixel.setGreen(0);
       pixel.setBlue(0);
   }
  }
  
  if (y > h/7 && y <= h/7*2) {
      if (avg < 128) {
          pixel.setRed(avg * 2);
          pixel.setGreen(avg * .8);
          pixel.setBlue(0);
      }
      else {
          pixel.setRed(255);
          pixel.setGreen(avg * 1.2 - 51);
          pixel.setBlue(avg * 2 - 255);
      }
  }
  
  if (y > h/7*2 && y <= h/7 * 3) {
      if (avg < 128) {
          pixel.setRed(avg * 2);
          pixel.setGreen(avg * 2);
          pixel.setBlue(0);
      }
      else {
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue(avg * 2 - 255);
      }
  }
  
  if (y > h/7 *3 && y <= h/7 *4) {
      if (avg < 128) {
          pixel.setRed(0);
          pixel.setGreen(avg * 2);
          pixel.setBlue(0);
      }
      else {
          pixel.setRed(avg * 2 - 255);
          pixel.setGreen(255);
          pixel.setBlue(avg * 2 - 255);
      }
  }
  
  if (y > h/7 * 4 && y <= h/7 * 5) {
      if (avg < 128) {
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(avg * 2);
      }
      else {
          pixel.setRed(2 * avg - 255);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(255);
      }
  }
  
  if (y > h/7 * 5 && y <= h/7 * 6) {
      if (avg < 128) {
          pixel.setRed(avg * .8);
          pixel.setGreen(0);
          pixel.setBlue(avg * 2);
      }
      else {
          pixel.setRed(avg * 1.2 - 51);
          pixel.setGreen(avg * 2 - 255);
          pixel.setBlue(255);
      }
  }
  
  if (y > h/7 * 6) {
      if (avg < 128) {
          pixel.setRed(avg * 1.6);
          pixel.setGreen(0);
          pixel.setBlue(avg * 1.6);
      }
      else {
          pixel.setRed(avg * .4 + 153);
          pixel.setGreen(avg * 2 - 255);
          pixel.setBlue(avg * .4 + 153);
      }
  }
     }
    rainbowimg.drawTo(canvas);
  }
}









function grainy()
{
  if(loaded(img)){
    var canvas=document.getElementById("canvas1");
  //var finput=document.getElementById("finput");
     grainimg=new SimpleImage(img);
     for (var pixel of grainimg.values()) {
    var x=pixel.getX();
    var y=pixel.getY();
    rand=Math.random();
    if(rand<0.5) {
      grainimg.setPixel(x,y,pixel);
    }
    else {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
        }
  }
    grainimg.drawTo(canvas);
  }
}


function clearimage()
{
  var clearcan=document.getElementById("canvas1");
  var ctx=clearcan.getContext("2d");
  ctx.clearRect(0,0,clearcan.width,clearcan.height);
  img=null;
}





function resetimage()
{
  if(loaded(img)){
   var canvas=document.getElementById("canvas1");
  
  var finput=document.getElementById("finput");
  greyimg=new SimpleImage(finput);
  redimg=new SimpleImage(finput);
  //greyimg=new SimpleImage(finput);
  blurimg=null;
invertimg=new SimpleImage(finput);
  img.drawTo(canvas);
  }
}