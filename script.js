// Variável com o texto completo
var texto = `<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro <br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station<br></body></html>`;


//Recortando o texto para separar os três roteiros em três variáveis distintas
var textoSplit = texto.split("<b>");
var textoUm = textoSplit[1];
var textoDois = textoSplit[2];
var textoTres = textoSplit[3];

//Selecionando os nomes das cidades
var textoUmSplit = textoUm.split("*");
var textoDoisSplit = textoDois.split("*");
var textoTresSplit = textoTres.split("*");
var textoUmCidade = textoUmSplit[1];
var textoDoisCidade = textoDoisSplit[1];
var textoTresCidade = textoTresSplit[1];

//Selecionando o conteúdo do roteiro A de cada cidade
var textoUmSplit = textoUm.split("#");
var textoDoisSplit = textoDois.split("#");
var textoTresSplit = textoTres.split("#");
var textoUmRoteiroA = textoUmSplit[1];
var textoDoisRoteiroA = textoDoisSplit[1];
var textoTresRoteiroA = textoTresSplit[1];


//Recortando apenas a lista de pontos turísticos do roteiro A de cada cidade
var textoUmSplit = textoUmRoteiroA.split("<br>");
var textoDoisSplit = textoDoisRoteiroA.split("<br>");
var textoTresSplit = textoTresRoteiroA.split("<br>");
var itensRoteiroA_um = textoUmSplit[1];
var itensRoteiroA_dois = textoUmSplit[1];
var itensRoteiroA_tres = textoUmSplit[1];

//Separando os termos da lista
var itensRoteiroA_um = itensRoteiroA_um.split(";")
var itensRoteiroA_dois = itensRoteiroA_dois.split(";")
var itensRoteiroA_tres = itensRoteiroA_tres.split(";")

//Descobrindo quantos itens tem a lista 
var numItensRoteiroA_um = itensRoteiroA_um.length;
var numItensRoteiroA_dois = itensRoteiroA_dois.length;
var numItensRoteiroA_tres = itensRoteiroA_tres.length;

//Fragmentando os roteiros da cidade de São Paulo
var textoUmSplit = textoUm.split("#");
var roteiroA = textoUmSplit[1];
var roteiroB = textoUmSplit[2];
var roteiroC = textoUmSplit[3];

//Criando um teste para descobrir em qual dos três fragmentos está a palavra Centro
var testeRoteiroA = roteiroA.indexOf("Centro");
var testeRoteiroB = roteiroB.indexOf("Centro");
var testeRoteiroC = roteiroC.indexOf("Centro");

//Teste lógico para colocar na variável listaCentro apenas a lista de pontos turísticos do roteiro que possui nele a palavra Centro
if (testeRoteiroA>0) {
    roteiroASplit = roteiroA.split("<br>");
    listaCentro = roteiroASplit[1];
} else {
    if (testeRoteiroB>0){
            roteiroBSplit = roteiroB.split("<br>");
            listaCentro = roteiroBSplit[1];
    } else {
            roteiroCSplit = roteiroC.split("<br>");
            listaCentro = roteiroCSplit[1];
    }
}

//Fragmentando os roteiros da cidade de Las Vegas
var textoDoisSplit = textoDois.split("#");
var roteiroA_Vegas = textoDoisSplit[1];
var roteiroB_Vegas = textoDoisSplit[2];
var roteiroC_Vegas = textoDoisSplit[3];

//Criando um teste para descobrir em qual dos três fragmentos está a palavra Downtown
var testeRoteiroA = roteiroA_Vegas.indexOf("Downtown");
var testeRoteiroB = roteiroB_Vegas.indexOf("Downtown");
var testeRoteiroC = roteiroC_Vegas.indexOf("Downtown");

//Teste lógico para colocar na variável listaDowntown apenas a lista de pontos turísticos do roteiro que possui nele a palavra Downtown
if (testeRoteiroA>0) {
    roteiroAVegasSplit = roteiroA_Vegas.split("<br>");
    listaCentroVegas = roteiroAVegasSplit[1];
} else {
    if (testeRoteiroB>0){
            roteiroBVegasSplit = roteiroB_Vegas.split("<br>");
            listaCentroVegas = roteiroBVegasSplit[1];
    } else {
            roteiroCVegasSplit = roteiroC_Vegas.split("<br>");
            listaCentroVegas = roteiroCVegasSplit[1];
    }
}


alert(`As cidades avaliadas são ${textoUmCidade}, ${textoDoisCidade} e ${textoTresCidade}`);
alert(`O roteiro A da cidade de ${textoUmCidade} é:
    ${textoUmRoteiroA}.
O roteiro A da cidade de ${textoDoisCidade} é:
    ${textoDoisRoteiroA}.
O roteiro A da cidade de ${textoTresCidade} é:
    ${textoTresRoteiroA}`);
alert(`Em cada um desses roteiros, são citados ${numItensRoteiroA_um}, ${numItensRoteiroA_dois} e ${numItensRoteiroA_tres} pontos turísticos, respectivamente.`);
alert(`A lista de pontos turísticos do Centro de São Paulo é: ${listaCentro}`)
alert(`A lista de pontos turísticos da região de Downtown de Las Vegas é: ${listaCentroVegas}`)