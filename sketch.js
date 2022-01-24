//inicialização
tela =1;

//variaveis tela 1
largura=237;
altura = 70;
x1=207;
y1=160;
x2=207;
y2=240;
x3=207;
y3=320
largura1 =220;
altura1 = 70;
x5=420;
y5=370;

//variaveis do botão voltar ao menu
largura2=150;
altura2 = 30;
x4=485;
y4=10;


function setup() {
  createCanvas(650, 450);
}

function draw() {
  //Estrutura de transição de telas
  if(tela==1){
    menu() //chamando a função menu
  }
  if(tela==2){
    jogar(); //chamando a função jogar
  }
  if(tela==3){
    instrucoes();//Chamando as instrucões 
  }
  if(tela==4){
    creditos();//Chamando os créditos
  }
}
//MENU
function menu(){
  background(164,222,2);
  textAlign(CENTER);
  image(imgfundo,0,0,650,450); //adicionando img
   
  //TÍTULO
  textSize(65);
  stroke(13,26,129);
  strokeWeight(5);
  fill(255,255,255);
  textStyle(BOLDITALIC);
  text("SUPERMERCADO",325,115);
  textSize(25);
  textStyle(NORMAL);
  strokeWeight(1);

  //Botão JOGAR com eventos
  if(mouseX>x1 && mouseX<x1+largura && mouseY>y1 &&     mouseY<y1+altura){
    fill(0,75,255);
    if(mouseIsPressed){
      tela=2;
    }
  }else{
    fill(13,26,129);
  }
  stroke(240);
  rect(x1,y1,largura,altura,13);
  fill(240);
  text("JOGAR",325,205);
    
  //Botão INSTRUÇÕES com eventos
  stroke(240);
  if(mouseX>x2 && mouseX<x2+largura && mouseY>y2 &&     mouseY<y2+altura){
    fill(0,75,255);
    if(mouseIsPressed){
      tela=3;
    }
  }else{
    fill(13,26,129);
  }
  rect(x2,y2,largura,altura,13);
  fill(240);
  text("INSTRUÇÕES",325,285);
    
  //Botão CRÉDITOS com eventos
  stroke(240);
  if(mouseX>x3 && mouseX<x3+largura && mouseY>y3 &&     mouseY<y3+altura){
    fill(0,75,255);
    if(mouseIsPressed){
      tela=4;
    }
  }else{
    fill(13,26,129);
  }
  rect(x3,y3,largura,altura,13);
    fill(240);
    text("CRÉDITOS",325,365);
}

//BOTÃO DO MENU
function botaovoltar(){ //botão para o menu do jogo
  //Eventos do botão
  if(mouseX>x4 && mouseX<x4+largura2 && mouseY>y4 &&     mouseY<y4+altura2){
    fill(0,75,255);
    if(mouseIsPressed){
      tela=1;
    }
  }else{
    fill(13,26,129);
  }
  rect(x4,y4,largura2,altura2,5);
  fill(240);
  textSize(20);
  text("Menu do jogo",560,30);
}

//JOGAR
function jogar(){
  
  //Imagens
  image(fundojogo,0,0,650,450);
  image(prateleira,10,25,400,200);
  image(carrinho,70,150,350,450);
  image(lista1,425,25,210,340);
  
  //Chamando a prateleira 
  prateleira1();
  
  //Botão de Comprar
  if(mouseX>x5 && mouseX<x5+largura1 && mouseY>y5 &&     mouseY<y5+altura1){
    fill(0,75,255);
    if(mouseIsPressed){
      
    }
  }else{
    fill(13,26,129);
  }
  stroke(240);
  rect(x5,y5,largura1,altura1,13);
  textSize(35);
  fill(240);
  text("COMPRAR",530,415);
  
}

//INSTRUÇÕES
function instrucoes(){
  //Estilização de titulos e imagens
  background(255,255,255);
  fill(255,255,255);
  image(imgft1,0,0,650,450);
  rect(10,50,630,300,13);
  fill(13,26,129);
  stroke(255);
  strokeWeight(3);
  textStyle(BOLD);
  textSize(25);
  text("INSTRUÇÕES",325,90);
    
  //Estilização de textos
  fill(240);
  stroke(13,26,129);
  strokeWeight(4);
  textStyle(BOLD);
  textSize(25);
  textAlign(LEFT);
  text("1 - Observe a lista de pedidos \n2 - Selecione os itens da prateleira que estão\nna lista \n3 - Clique em comprar \n4 - Se sua compra estiver correta você irá passar \nde nível, caso contrário refaça a compra",45,150);
  textAlign(CENTER);
  strokeWeight(1);
    
  //chamando a função do botão para o menu
  botaovoltar();
}

//CRÉDITOS
function creditos(){
  background(255,255,255);
  
  //Imagens de Fundo
  image(fundocred,0,0,650,450);
  image(ftmilena,330,1,300,415);
  image(ftkaren,7,5,300,400);
    
  //Titulo
  fill(13,26,129);
  textSize(35);
  textStyle(BOLDITALIC);
  text("CRÉDITOS",325,57);
  textStyle(NORMAL);
    
  //Texto Milena
  //balão
  stroke(240);
  fill(255,255,255);
  rect(340,235,305,210,13);
  //texto
  fill(13,26,129);
  stroke(240);
  strokeWeight(2);
  textStyle(BOLD);
  textSize(18);
  textAlign(LEFT);
  text("PROGRAMADORA: \nMilena Eduarda de Araújo Xavier \n-----------------------------------------------\nEstudante do curso de Ciências e     \nTecnologias, na Universidade \nFederal do Rio Grande do Norte",350,255);
  textAlign(CENTER);
  strokeWeight(1);
    
  //Texto Karen
  //balão
  stroke(240);
  fill(255,255,255);
  rect(7,235,317,210,13);
  //texto
  fill(13,26,129);
  stroke(240);
  strokeWeight(2);
  textStyle(BOLD);
  textSize(18);
  textAlign(LEFT);
  text("EDUCADORA: \nKaren Christina Pinheiro do Santos\n -------------------------------------------------\nFormada em Pedagogia na     \nUniversidade Federal do Rio Grande \ndo Norte – UFRN. Pós-graduação em \nTecnologia Educacional, em Educa- \nção, Estudos da Linguagem e \nPsicopedagogia",10,255);
  textAlign(CENTER);
  strokeWeight(1);
    
    //chamando a função do botão para o menu
    botaovoltar(); 
}

//Prateleira fase 1
function prateleira1(){
  //Itens da Prateleira
  //1 linha
  stroke(240);
  fill(0,75,255);
  rect(40,45,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Quejo",87,70);
  
  stroke(240);
  fill(0,75,255);
  rect(150,45,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Melancia",200,70);
  
  stroke(240);
  fill(0,75,255);
  rect(260,45,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Arrois",310,70);
  
  //2ª linha
  stroke(240);
  fill(0,75,255);
  rect(40,105,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Melamcia",87,130);
  
  stroke(240);
  fill(0,75,255);
  rect(150,105,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Arroz",200,130);
  
  stroke(240);
  fill(0,75,255);
  rect(260,105,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Quego",310,130);
  
  //3ªlinha
  stroke(240);
  fill(0,75,255);
  rect(40,165,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Aroz",87,190);
  
  stroke(240);
  fill(0,75,255);
  rect(150,165,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Melamsia",200,190);
  
  stroke(240);
  fill(0,75,255);
  rect(260,165,100,40,13);
  fill(255,255,255);
  textSize(20);
  text("Queijo",310,190);
}


//Carregando imagens
let imgfundo;
let imgft1;
let carrinho;
let prateleira;
let lista1;
let fundojogo;
let ftmilena;
let ftkaren;
let fundocred;
function preload(){
  imgfundo = loadImage("imgfundo.jpg");
  imgft1 = loadImage("imgft1.jpg");
  carrinho = loadImage("carrinho1.png");
  prateleira = loadImage("prateleira1.PNG");
  lista1 = loadImage("lista1.jpg");
  fundojogo = loadImage("fundoj.PNG");
  ftmilena = loadImage("ftmilena.png");
  ftkaren = loadImage("ftkaren.png");
  fundocred = loadImage("fundocred.jpg")
}