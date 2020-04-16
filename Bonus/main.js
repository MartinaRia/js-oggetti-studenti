/*BONUS:
Curo per bene l’output dell’elenco studenti, creando un layout carino;
il “blocchetto studente” in pagina, sarà uguale per tutti, quindi potrei usare handlebars per gestire i blocchetti;
varie che vi vengono in mente per sperimentare;*/

$( document ).ready(function() {
  console.log( "all good!" );

  // - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
  var studente = {
    'nome' : 'Veronica',
    'cognome' : 'Ciccone',
    'eta' : 61
  };

  //- Stampare a schermo attraverso il for in tutte le proprietà;
  for (var key in studente) {
    $('.features-studente').append(key + ' : ' + studente[key] + '<br>');
  }

  //- Creare un array di oggetti di studenti.
  var studenti = [
    {
      'nome' : 'Stefani',
      'cognome' : 'Germanotta',
      'eta' : 34
    },
    {
      'nome' : 'Lorenzo',
      'cognome' : 'Cherubini',
      'eta' : 53
    },
    {
      'nome' : 'Reginald',
      'cognome' : 'Dwight',
      'eta' : 73
    },
  ];

  //- Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
  //variante 1
  for (var i = 0; i < studenti.length; i++) {
    $('.generalita-studenti-1').append(
      'nome: ' + studenti[i].nome + '<br>' +
      'cognome: ' + studenti[i].cognome + '<br>' + '--' + '<br>');
  }
  //variante 2
  // for (var i = 0; i < studenti.length; i++) {
  //   for (var key in studenti[i]) {
  //     console.log(studenti[nome], studenti[cognome]);
  //   }
  // }



  // - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
/*  var nomeUtente = prompt('Inserire nome studente');
  var cognomeUtente = prompt('Inserire cognome studente');
  var etaUtente = parseInt(prompt('Inserire età studente'));*/

  var studenteInserito = {
    'nome' : nomeUtente,
    'cognome' : cognomeUtente,
    'eta' : etaUtente
  };

  studenti.push(studenteInserito);

  console.log(studenti);

  $('.generalita-studenti-1').append(
    'nome: ' + studenti[3].nome + '<br>' +
    'cognome: ' + studenti[3].cognome + '<br>' + '--' + '<br>');




});
