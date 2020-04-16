/*BONUS:
Curo per bene l’output dell’elenco studenti, creando un layout carino;
il “blocchetto studente” in pagina, sarà uguale per tutti, quindi potrei usare handlebars per gestire i blocchetti;
varie che vi vengono in mente per sperimentare;*/


/* ------- STAMPA IN HTML GLI OGGETTI DELL'ARRAY STUDENTI ------*/
$( document ).ready(function() {
  console.log( "all good!" );

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

  /*** ----- Handlebars ---- ***/
  // 1 Organizzare il template
  var source = $("#template-scheda-studente-handlebars").html(); //salvare il selettore del template in una var
  var template = Handlebars.compile(source); // "il template da compilare è questo"

  // 2 organizzare i contenuti che popolano il template
  for (var i = 0; i < studenti.length; i++) {
    var context = {
      'nome': studenti[i].nome,
      'cognome': studenti[i].cognome,
      'eta': studenti[i].eta
    };
    var html = template(context); //abbinare template a contenuto

    // appendi il div con la risposta random nel tread
    $('main').append(html);
  }


  /* ------- INSERISCI NUOVO STUDENTE NELL'ARRAY  ------*/

  $('button').click(
    function(){
      var nomeUtente = $('#nome').val();
      var cognomeUtente = $('#cognome').val();
      var etaUtente = $('#eta').val();

      var studenteInserito = {
        'nome' : nomeUtente,
        'cognome' : cognomeUtente,
        'eta' : etaUtente
      };

      studenti.push(studenteInserito);

      var html = template(studenteInserito);

      $('main').append(html);

      $('input').val('');

    }
  )





});
