/** Pytania wygenerowane z quiz_analiza_bom.csv */
const QUESTIONS_RAW = [
  {
    "id": 1,
    "category": "Analiza BOM",
    "question": "Wielkość informująca, jaka część przychodów pozostaje do dyspozycji podmiotu, po pokryciu kosztów zmiennych, na pokrycie kosztów stałych i pożądanego zysku, to:",
    "options": {
      "A": "marża brutto",
      "B": "stopa marży brutto"
    },
    "correct": "A"
  },
  {
    "id": 2,
    "category": "Analiza BOM",
    "question": "Niski poziom wskaźnika obrotowości należności informuje o tym, że podmiot zbyt długo kredytuje swoich odbiorców:",
    "options": {
      "A": "Tak",
      "B": "Nie"
    },
    "correct": "A"
  },
  {
    "id": 3,
    "category": "Analiza BOM",
    "question": "Analiza mająca za zadanie sprawdzać strukturę kapitału (pasywów) pod kątem zdolności przedsiębiorstwa do regulowania zobowiązań zwłaszcza długoterminowych, to:",
    "options": {
      "A": "analiza płynności",
      "B": "analiza wypłacalności"
    },
    "correct": "B"
  },
  {
    "id": 4,
    "category": "Analiza BOM",
    "question": "Zbyt wysoka wartość wskaźnika ogólnego zadłużenia świadczy o dużym ryzyku finansowym, informując jednocześnie, że przedsiębiorstwo może utracić zdolność do zwrotu długów:",
    "options": {
      "A": "Tak",
      "B": "Nie"
    },
    "correct": "A"
  },
  {
    "id": 5,
    "category": "Analiza BOM",
    "question": "Dominacja kosztów niezależnych od rozmiarów produkcji sprawia, iż tempo zmian kosztów całkowitych jest:",
    "options": {
      "A": "wyraźnie wolniejsze od tempa zmian wielkości sprzedaży",
      "B": "wyraźnie szybsze od tempa zmian wielkości sprzedaży"
    },
    "correct": "A"
  },
  {
    "id": 6,
    "category": "Analiza BOM",
    "question": "Ze względu na rolę jaką odgrywa kapitał produkcyjny w działalności wytwórczej, dzieli się go na:",
    "options": {
      "A": "kapitał obrotowy i kapitał trwały",
      "B": "Kapitał stały i kapitał zmienny"
    },
    "correct": "A"
  },
  {
    "id": 7,
    "category": "Analiza BOM",
    "question": "Przedsiębiorstwo wypracowuje ekonomiczną wartość dodaną, jeżeli rentowność kapitału jest:",
    "options": {
      "A": "mniejsza od średniego ważonego kosztu kapitału",
      "B": "większa od średniego ważonego kosztu kapitału"
    },
    "correct": "B"
  },
  {
    "id": 8,
    "category": "Analiza BOM",
    "question": "Modele predykcji bankructwa wykorzystują:",
    "options": {
      "A": "Pozytywną teorię bankructwa",
      "B": "Normatywną teorię bankructwa"
    },
    "correct": "A"
  },
  {
    "id": 9,
    "category": "Analiza BOM",
    "question": "Metodę funkcjonalną, kompleksową i decyzyjną wyróżnia się z punktu widzenia:",
    "options": {
      "A": "przeznaczenia",
      "B": "metody badań",
      "C": "przedmiotu",
      "D": "szczegółowości"
    },
    "correct": "A"
  },
  {
    "id": 10,
    "category": "Analiza BOM",
    "question": "Metody polegające głównie na opisie dynamiki szeregów czasowych, wyrażonych za pomocą wskaźników lub przedstawionych w formie graficznej, to:",
    "options": {
      "A": "metody jakościowe analizy",
      "B": "metody ilościowe analizy"
    },
    "correct": "B"
  },
  {
    "id": 11,
    "category": "Analiza BOM",
    "question": "Zasada, że kapitał nie powinien być dłużej czasowo związany ze składnikami majątku niż wynosi okres jego pozostawania w przedsiębiorstwie, to:",
    "options": {
      "A": "złota zasada finansowa",
      "B": "złota zasada bilansowa"
    },
    "correct": "A"
  },
  {
    "id": 12,
    "category": "Analiza BOM",
    "question": "Biorąc pod uwagę stopień pogłębienia badania zjawisk oraz formę opisu, wyróżnia się:",
    "options": {
      "A": "metody porównań i badania przyczynowego",
      "B": "metody statyczne i dynamiczne"
    },
    "correct": "B"
  },
  {
    "id": 13,
    "category": "Analiza BOM",
    "question": "Wskaźniki ukazujące efekty w postaci wyników finansowych w stosunku do wartości sprzedaży, zaangażowanego majątku czy kapitałów, to:",
    "options": {
      "A": "wskaźniki sprawności działania",
      "B": "wskaźniki rentowności działania"
    },
    "correct": "B"
  },
  {
    "id": 14,
    "category": "Analiza BOM",
    "question": "Jeżeli w mianowniku wskaźnika rentowności kapitałów własnych uwzględni się kapitał stały, wówczas rentowność tego kapitału jest równa rentowności majątku:",
    "options": {
      "A": "Tak",
      "B": "Nie"
    },
    "correct": "B"
  },
  {
    "id": 15,
    "category": "Analiza BOM",
    "question": "O poziomie należności finansowej informuje wskaźnik:",
    "options": {
      "A": "zastosowania kapitałów własnych",
      "B": "zastosowania kapitałów obcych",
      "C": "struktury kapitału",
      "D": "struktury majątku"
    },
    "correct": "B"
  },
  {
    "id": 16,
    "category": "Analiza BOM",
    "question": "Metody ujmujące wpływ czynników podstawowych, drugorzędnych i przypadkowych na badane zjawisko, to:",
    "options": {
      "A": "metody deterministyczne",
      "B": "metody stochastyczne"
    },
    "correct": "B"
  },
  {
    "id": 17,
    "category": "Analiza BOM",
    "question": "Metoda obejmująca etapy: ustalenie wskaźników zmienności i stopnia zmian poszczególnych czynników oraz ustalenie odchyleń cząstkowych, to:",
    "options": {
      "A": "metoda różnic cząstkowych",
      "B": "metoda podstawień cząstkowych",
      "C": "metoda funkcyjna",
      "D": "metoda podstawień krzyżowych"
    },
    "correct": "B"
  },
  {
    "id": 18,
    "category": "Analiza BOM",
    "question": "Wyniki uzyskiwane metodą funkcyjną oraz metodą podstawień krzyżowych są identyczne, podobnie wyniki uzyskane metodą różnic cząstkowych i metodą kolejnych podstawień są takie same:",
    "options": {
      "A": "Tak",
      "B": "Nie"
    },
    "correct": "A"
  },
  {
    "id": 19,
    "category": "Analiza BOM",
    "question": "Ilościowe, bezwzględne wielkości charakteryzujące rozmiary określonych zjawisk ekonomicznych, to:",
    "options": {
      "A": "mierniki ekonomiczne",
      "B": "wskaźniki ekonomiczne"
    },
    "correct": "A"
  },
  {
    "id": 20,
    "category": "Analiza BOM",
    "question": "Różnice w treści, budowie i sposobie liczenia różnych wielkości ekonomicznych, określane są jako przesłanka:",
    "options": {
      "A": "zmian metodologicznych",
      "B": "zmian finansowych",
      "C": "zmian organizacyjnych",
      "D": "zmian rzeczowych"
    },
    "correct": "A"
  },
  {
    "id": 21,
    "category": "Analiza BOM",
    "question": "Wraz z oddalaniem się rzeczywiście osiągniętej sprzedaży od progu rentowności rośnie margines bezpieczeństwa oraz:",
    "options": {
      "A": "rośnie stopień dźwigni operacyjnej",
      "B": "maleje stopień dźwigni operacyjnej"
    },
    "correct": "B"
  },
  {
    "id": 22,
    "category": "Analiza BOM",
    "question": "Jeżeli krzywa kosztów rośnie szybciej niż krzywa sprzedaży, to pochodna kosztu jest:",
    "options": {
      "A": "większa niż pochodna sprzedaży po rozmiarze produkcji",
      "B": "mniejsza niż pochodna sprzedaży po rozmiarze produkcji"
    },
    "correct": "A"
  },
  {
    "id": 23,
    "category": "Analiza BOM",
    "question": "Porównania, pozwalające na ustalenie wskaźników dynamiki i określenie tendencji rozwojowej badanego zjawiska, to:",
    "options": {
      "A": "porównania w czasie przy podstawie zmiennej",
      "B": "porównania w czasie przy podstawie stałej"
    },
    "correct": "A"
  },
  {
    "id": 24,
    "category": "Analiza BOM",
    "question": "Ustalając rentowność całego kapitału zainwestowanego w przedsiębiorstwo, zysk netto należy powiększyć o odsetki zapłacone od kapitałów obcych pomniejszone o przypadający na nie podatek dochodowy:",
    "options": {
      "A": "Tak",
      "B": "Nie"
    },
    "correct": "A"
  },
  {
    "id": 25,
    "category": "Analiza BOM",
    "question": "Do oceny zjawiska dźwigni finansowej, które ma miejsce gdy rentowność operacyjna aktywów jest większa od stopy procentowej kredytów i pożyczek, służy wskaźnik:",
    "options": {
      "A": "rentowności kapitału własnego",
      "B": "rentowności aktywów",
      "C": "rentowności operacyjnej",
      "D": "rentowności kapitału całkowitego"
    },
    "correct": "A"
  },
  // {
  //   "id": 26,
  //   "category": "Analiza BOM",
  //   "question": "Zazwyczaj poziom wskaźnika ROE jest skorelowany ze wskaźnikiem rotacji aktywów:",
  //   "options": {
  //     "A": "dodatnio – przedsiębiorstwa o wysokiej marży zysku mają jednocześnie wysokie wskaźniki rotacji aktywów",
  //     "B": "ujemnie – przedsiębiorstwa o wysokiej marży zysku mają jednocześnie niskie wskaźniki rotacji aktywów"
  //   },
  //   "correct": "B"
  // },
  // {
  //   "id": 27,
  //   "category": "Analiza BOM",
  //   "question": "Kapitał obrotowy określa tę część majątku obrotowego, która pozostałaby w podmiocie po uregulowaniu zobowiązań bieżących, co odpowiada podejściu kapitałowemu jego obliczania:",
  //   "options": {
  //     "A": "Tak",
  //     "B": "Nie – to podejście majątkowe"
  //   },
  //   "correct": "B"
  // },
  // {
  //   "id": 28,
  //   "category": "Analiza BOM",
  //   "question": "Ocena pokrycia zobowiązań bieżących w sytuacji gdyby zapasy nie miały żadnej wartości, jest dokonywana z wykorzystaniem:",
  //   "options": {
  //     "A": "wskaźnika bieżącej płynności",
  //     "B": "wskaźnika podwyższonej płynności",
  //     "C": "wskaźnika wystarczalności gotówkowej",
  //     "D": "wskaźnika wydajności gotówkowej"
  //   },
  //   "correct": "B"
  // },
  // {
  //   "id": 29,
  //   "category": "Analiza BOM",
  //   "question": "O tym, jaka część obrotu i wyniku finansowego ze sprzedaży zostaje w przedsiębiorstwie w formie gotówkowej, informują:",
  //   "options": {
  //     "A": "wskaźnik bieżącej płynności",
  //     "B": "wskaźnik podwyższonej płynności",
  //     "C": "wskaźnik wystarczalności gotówkowej",
  //     "D": "wskaźnik wydajności gotówkowej"
  //   },
  //   "correct": "D"
  // },
  // {
  //   "id": 30,
  //   "category": "Analiza BOM",
  //   "question": "Wskaźniki będące odzwierciedleniem relacji pomiędzy osiąganymi przychodami a stanem majątku całkowitego i trwałego, to:",
  //   "options": {
  //     "A": "wskaźniki sprawności",
  //     "B": "wskaźniki rentowności"
  //   },
  //   "correct": "A"
  // },
  // {
  //   "id": 31,
  //   "category": "Analiza BOM",
  //   "question": "Jeśli kapitał stały pokryje z naddatkiem aktywa trwałe, to spełniona jest:",
  //   "options": {
  //     "A": "Złota zasada finansowa",
  //     "B": "Złota zasada bilansowa"
  //   },
  //   "correct": "B"
  // },
  // {
  //   "id": 32,
  //   "category": "Analiza BOM",
  //   "question": "Jeśli wskaźnik struktury kapitału jest niższy od 1, to kapitał obrotowy osiąga wartość:",
  //   "options": {
  //     "A": "Zerową",
  //     "B": "Żadna z odpowiedzi nie jest poprawna",
  //     "C": "Ujemną",
  //     "D": "Dodatnią"
  //   },
  //   "correct": "D"
  // },
  // {
  //   "id": 33,
  //   "category": "Analiza BOM",
  //   "question": "Próg rentowności zależy wprost proporcjonalnie od:",
  //   "options": {
  //     "A": "Poziomu kosztów stałych",
  //     "B": "Poziomu kosztów zmiennych",
  //     "C": "Wielkości stopy marży brutto",
  //     "D": "Wielkości dźwigni operacyjnej"
  //   },
  //   "correct": "A"
  // },
  // {
  //   "id": 34,
  //   "category": "Analiza BOM",
  //   "question": "Jeśli pochodna po sprzedaży jest wyższa od pochodnej po kosztach, to:",
  //   "options": {
  //     "A": "Maleje udział kosztów stałych w kosztach całkowitych",
  //     "B": "Wzrasta udział kosztów stałych w kosztach całkowitych"
  //   },
  //   "correct": "B"
  // },
  // {
  //   "id": 35,
  //   "category": "Analiza BOM",
  //   "question": "Ocena wskazuje w jakim stopniu osiągnięto zakładane cele, diagnoza pozwala ustalić czy podmiot jest zdrowy, natomiast analiza ekonomiczna:",
  //   "options": {
  //     "A": "Umożliwia określenie czy występują zakłócenia",
  //     "B": "Umożliwia rozpoznanie przyczyn zakłóceń"
  //   },
  //   "correct": "B"
  // },
  // {
  //   "id": 36,
  //   "category": "Analiza BOM",
  //   "question": "Wzrastająca długość cyklu kapitału obrotowego netto wskazuje, że przedsiębiorstwo:",
  //   "options": {
  //     "A": "Generuje nadwyżkę kapitału krótkoterminowego",
  //     "B": "Wymaga zasilenia kapitałowego krótkoterminowego",
  //     "C": "Wcześniej uzyskuje środki na zakup materiałów",
  //     "D": "Wzrasta rentowność sprzedaży"
  //   },
  //   "correct": "B"
  // },
  // {
  //   "id": 37,
  //   "category": "Analiza BOM",
  //   "question": "Jeśli wskaźnik bieżącej płynności jest wyższy od 1, to kapitał obrotowy osiąga wartość:",
  //   "options": {
  //     "A": "Zerową",
  //     "B": "Ujemną",
  //     "C": "Żadna z odpowiedzi nie jest poprawna",
  //     "D": "Dodatnią"
  //   },
  //   "correct": "D"
  // },
  // {
  //   "id": 38,
  //   "category": "Analiza BOM",
  //   "question": "Jeżeli zmniejszy się liczba dostaw i koszty stałe przy niezmienionym jednostkowym koszcie magazynowania materiałów, to wskaźnik EPD wykaże:",
  //   "options": {
  //     "A": "Zmianę wprost proporcjonalną",
  //     "B": "Brak związku między tymi miarami",
  //     "C": "Zmniejszenie",
  //     "D": "Wzrost"
  //   },
  //   "correct": "C"
  // },
  // {
  //   "id": 39,
  //   "category": "Analiza BOM",
  //   "question": "Model następstwa czasowego wskaźników kwantytatywnych wymaga, aby:",
  //   "options": {
  //     "A": "Majątek rósł szybciej jak zysk",
  //     "B": "Przychody rosły szybciej jak zysk",
  //     "C": "Majątek rósł szybciej jak koszty",
  //     "D": "Koszty rosły szybciej niż majątek"
  //   },
  //   "correct": "B"
  // },
  // {
  //   "id": 40,
  //   "category": "Analiza BOM",
  //   "question": "Jeżeli wzrasta rentowność sprzedaży przy niezmienionym cyklu krążenia kapitału ogółem, to:",
  //   "options": {
  //     "A": "Wzrasta rentowność kapitału własnego",
  //     "B": "Maleje rentowność majątku",
  //     "C": "Maleje rentowność kapitału własnego",
  //     "D": "Wzrasta rentowność majątku"
  //   },
  //   "correct": "D"
  // },
  // {
  //   "id": 41,
  //   "category": "Analiza BOM",
  //   "question": "Jeśli wskaźnik zastosowania kapitału własnego jest wyższy od 1, to kapitał obrotowy osiąga wartość:",
  //   "options": {
  //     "A": "Zerową",
  //     "B": "Ujemną",
  //     "C": "Dodatnią",
  //     "D": "Żadna z odpowiedzi nie jest poprawna"
  //   },
  //   "correct": "B"
  // },
  // {
  //   "id": 42,
  //   "category": "Analiza BOM",
  //   "question": "Jeśli wskaźnik samofinansowania przekracza ½, to dominuje w źródłach finansowania:",
  //   "options": {
  //     "A": "Kapitał obcy",
  //     "B": "Kapitał obcy długoterminowy",
  //     "C": "Kapitał podstawowy",
  //     "D": "Kapitał własny"
  //   },
  //   "correct": "D"
  // },
  // {
  //   "id": 43,
  //   "category": "Analiza BOM",
  //   "question": "Duży stopień pokrycia środków obrotowych zobowiązaniami wskazuje, iż udzielenie krótkoterminowych kredytów przedsiębiorstwu jest ryzykowne:",
  //   "options": {
  //     "A": "Prawda",
  //     "B": "Fałsz"
  //   },
  //   "correct": "A"
  // },
  // {
  //   "id": 44,
  //   "category": "Analiza BOM",
  //   "question": "Model następstwa czasowego wskaźników kwalitatywnych wymaga, aby:",
  //   "options": {
  //     "A": "Produktywność rosła szybciej jak wydajność",
  //     "B": "Wydajność rosła szybciej jak rentowność majątku",
  //     "C": "Wydajność rosła szybciej jak techniczne uzbrojenie pracy",
  //     "D": "Produktywność rosła szybciej jak techniczne uzbrojenie pracy"
  //   },
  //   "correct": "C"
  // },
  // {
  //   "id": 45,
  //   "category": "Analiza BOM",
  //   "question": "Koszty utrzymania zapasów (koszty kapitału zamrożonego, magazynowania, ubezpieczenia, starzenia się) mają charakter:",
  //   "options": {
  //     "A": "Kosztów zmiennych",
  //     "B": "Kosztów względnie stałych"
  //   },
  //   "correct": "B"
  // },
  // {
  //   "id": 46,
  //   "category": "Analiza BOM",
  //   "question": "Dodatni kapitał obrotowy oznacza równość ze źródłem finansowania w postaci:",
  //   "options": {
  //     "A": "Kapitału obcego",
  //     "B": "Kapitału stałego",
  //     "C": "Kapitału krótkoterminowego",
  //     "D": "Kapitału własnego"
  //   },
  //   "correct": "B"
  // },
  // {
  //   "id": 47,
  //   "category": "Analiza BOM",
  //   "question": "Niezmienność pewnej części kosztów powoduje, że każde zwiększenie sprzedaży przynosi:",
  //   "options": {
  //     "A": "Poniżej proporcjonalny przyrost zysku",
  //     "B": "Wprost proporcjonalny przyrost zysku",
  //     "C": "Brak związku między tymi miarami",
  //     "D": "Ponad proporcjonalny przyrost zysku"
  //   },
  //   "correct": "D"
  // },
  // {
  //   "id": 48,
  //   "category": "Analiza BOM",
  //   "question": "Jeżeli wskaźnik zadłużenia ogółem jest równy wskaźnikowi samofinansowania to:",
  //   "options": {
  //     "A": "Kapitał obcy jest wyższy od kapitału własnego",
  //     "B": "Brak związku między tymi miarami",
  //     "C": "Kapitał własny jest równy kapitałowi obcemu",
  //     "D": "Kapitał własny jest wyższy od kapitału obcego"
  //   },
  //   "correct": "C"
  // },
  // {
  //   "id": 49,
  //   "category": "Analiza BOM",
  //   "question": "Zwiększenie kosztów stałych oraz udziału kosztów zmiennych sprzedaży powoduje, że przedsiębiorstwo przekracza punkt krytyczny:",
  //   "options": {
  //     "A": "W tym samym momencie",
  //     "B": "Później",
  //     "C": "Brak związku między tymi miarami",
  //     "D": "Wcześniej"
  //   },
  //   "correct": "D"
  // },
  // {
  //   "id": 50,
  //   "category": "Analiza BOM",
  //   "question": "Jeśli wskaźnik rotacji zapasów w razach wykazuje tendencję spadkową, to cykl zapasów w dniach ulega:",
  //   "options": {
  //     "A": "Zmianom wprost proporcjonalnym",
  //     "B": "Brak związku między tymi miarami",
  //     "C": "Wydłużeniu",
  //     "D": "Skróceniu"
  //   },
  //   "correct": "C"
  // }
];
