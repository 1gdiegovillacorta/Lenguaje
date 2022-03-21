//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar!";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#008080"; colorText="#000000"; colorSele="#FFFFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="'Arial Narrow', sans-serif";
var fEnun="'Arial Black', Gadget, sans-serif";
var timeOnMessage=5; messageOk="Felicidades!!! "; messageTime="Se ha acabado el Tiempo"; messageError="Intente de Nuevo"; messageErrorG="Intente de Nuevo"; messageAttempts="Se han acabado los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TEVORw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["QQ==","UA==","Tw==","TA==","Tw==","","","Wg==","",""],["Rg==","","","","","","SA==","RQ==","Ug==","QQ=="],["Ug==","","","","","","","VQ==","",""],["Tw==","","","","","","","Uw==","",""],["RA==","","","","","","","","",""],["SQ==","","","QQ==","","","","","",""],["VA==","","","Ug==","","","","","",""],["QQ==","Ug==","VA==","RQ==","TQ==","SQ==","Uw==","QQ==","",""],["","","","Uw==","","","","","",""],["","","","","","","","","",""]];
var x1=[1,7,1,1,8,4];
var y1=[1,2,8,1,1,6];
var x2=[5,10,8,1,8,4];
var y2=[1,2,8,8,4,9];
var imaCW=["","","","","",""];
var audioCW=["","","","","",""];
var defCW=["Dios solar, protector de los derechos paternos, inventor de la música.","Diosa del hogar y de los derechos maternos, mujer de Zeus y por lo tanto antagonista inmediata de sus hijos ilegítimos, entre los que estaban muchos héroes, como Hércules o Heracles.","Diosa cazadora, virginal y lunar, con afinidad por los animales salvajes y el terreno virgen.","Diosa de la belleza y de la pasión, era hermana de Zeus y esposa de Hefesto, a quien engañaba con Ares y con numerosos mortales.","El dios padre, dueño del relámpago y de los cielos, quien dirigía a los Olímpicos desde su trono.","Dios de la guerra y la violencia, hijo de Zeus y de Hera, se asociaba a la virilidad masculina y al heroísmo, a la valentía en batalla y a los ejércitos."];
var colNum=10;
var rowNum=10;
