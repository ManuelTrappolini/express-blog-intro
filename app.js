/* Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.
1. Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
2. Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
3. Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.
La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )
4. Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
5. Testare nel browser. */

const express = require('express');
const app = express();
const host = 'http://127.0.0.1';
const port = 3006;

app.listen(port,() =>{
    console.log(`Use this link ${host}:${port}`);
    
})

app.get('/',(req,res) =>{
    res.send('<h1>Benvenuto nel mio Blog!</h1>')
})
