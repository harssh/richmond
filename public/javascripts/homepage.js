<!--- Cross Browser Fader Script --->
<script type="text/javascript">
<!--
// Set the slideshow speed (in milliseconds)
var SlideShowSpeed = 3000;
// Set the duration of crossfade (in seconds)
var CrossFadeDuration = 4;
var Picture = new Array(); // don't change this
var Caption = new Array(); // don't change this
// Specify the image files...
Picture[1]  = '/images/rug1.jpg';
Picture[2]  = '/images/rug2.jpg';
Picture[3]  = '/images/rug3.jpg';
Picture[4]  = '/images/rug4.jpg';
Picture[5]  = '/images/rug5.jpg';

//don't change these
var tss;
var iss;
var jss = 1;
var pss = Picture.length-1;
var preLoad = new Array();
for (iss = 1; iss < pss+1; iss++){
preLoad[iss] = new Image();
preLoad[iss].src = Picture[iss];}
function runSlideShow(){
var thePic=(document.layers)?document.layers.LayerPhoto.document.images.PictureBox:document.images.PictureBox;
if (document.all){
thePic.style.filter="blendTrans(duration=3)";
thePic.style.filter="blendTrans(duration=CrossFadeDuration)";
thePic.filters.blendTrans.Apply();
thePic.src = preLoad[jss].src;
thePic.filters.blendTrans.Play();
}
thePic.src=preLoad[jss].src;
jss = jss + 1;
if (jss > (pss)) jss=1;
tss = setTimeout('runSlideShow()', SlideShowSpeed);
}
//-->
</script>
<!---Ends the Fader--->

