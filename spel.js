"use strict"
document.querySelectorAll("img").forEach(afbeelding => afbeelding.onclick = speelSpel);

    function speelSpel() {
      const gebruikersKeuze = this.dataset.keuze;
      const computerKeuze = getComputerKeuze();
      const winnaarTekst = bepaalWinnaar(gebruikersKeuze, computerKeuze);

      const computerkeuzeAfbeelding = document.querySelector('#computerkeuze img');
      toonComputerKeuze(computerkeuzeAfbeelding, computerKeuze);

      document.getElementById('winnaar').innerText = winnaarTekst;
    }

    function toonComputerKeuze(img, computerKeuze) {
      img.src = `${computerKeuze}.png`;
      img.alt = computerKeuze;
      img.title = computerKeuze;
      
    }

    function getComputerKeuze() {
      const keuzes = ['steen', 'blad', 'schaar']; 
      return keuzes[Math.floor(Math.random() * keuzes.length)];
    }

    function bepaalWinnaar(gebruikersKeuze, computerKeuze) {
      if (gebruikersKeuze === computerKeuze) {
        return 'gelijkspel!';
      }

      const winnendeKeuzes = {
        steen: 'schaar',
        blad: 'steen',
        schaar: 'blad'
      };

      return (winnendeKeuzes[gebruikersKeuze] === computerKeuze) ? 'Jij wint!' : 'Computer wint!';
    }