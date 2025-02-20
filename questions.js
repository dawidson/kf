const questions = [
    {
        question: "2. Obwód elektryczny składa się z kilku rezystorów o różnych wartościach i źródła zasilania. Połączenie, w którym przez wszystkie elementy płynie ten sam prąd nazywamy połączeniem:",
        answers: [
            { text: "a) rezonansowym", correct: false },
            { text: "b) szeregowym", correct: true },
            { text: "c) równoległym", correct: false }
        ]
    },
    {
        question: "3. Przez kondensator o impedancji 10 Ω płynie prąd przemienny o częstotliwości 50Hz i wartości 2A. Jaki będzie spadek napięcia na kondensatorze?",
        answers: [
            { text: "a) 10 V", correct: false },
            { text: "b) 50 V", correct: false },
            { text: "c) 20 V", correct: true }
        ]
    },
    {
        question: "10. We wzmacniaczu tranzystorowym w układzie wspólnego kolektora obciążenie jest dołączane między:",
        answers: [
            { text: "a) kolektor a zasilanie", correct: false },
            { text: "b) bazę a kolektor", correct: false },
            { text: "c) emiter a masę", correct: true }
        ]
    },
    {
        question: "20. W temperaturze pokojowej moc szumów termicznych w kanale o szerokości 1 Hz wynosi -174 dBm. Ile wynosi moc szumów w kanale o szerokości 10 kHz:",
        answers: [
            { text: "a) -134 dBm", correct: true },
            { text: "b) -214 dBm", correct: false },
            { text: "c) -170 dBm", correct: false }
        ]
    },
    {
        question: "23. Które z poniższych stwierdzeń opisuje modulację amplitudy (A3E)?",
        answers: [
            { text: "a) posiada obie wstęgi boczne", correct: true },
            { text: "b) nie posiada wstęg bocznych", correct: false },
            { text: "c) jest odporna na przemodulowanie", correct: false }
        ]
    },
    {
        question: "27. Jeśli dla sygnału AM amplituda sygnału modulującego równa jest amplitudzie fali nośnej, to mówimy, że:",
        answers: [
            { text: "a) współczynnik głębokości modulacji wynosi 100%", correct: true },
            { text: "b) sygnał jest przesterowany", correct: false },
            { text: "c) jest to modulacja z wytłumioną falą nośną", correct: false }
        ]
    },
    {
        question: "29. Jakie napięcie występuje na rezystorze o wartości 50 Ω przy dostarczeniu do niego mocy 200 W?",
        answers: [
            { text: "a) 100 V", correct: true },
            { text: "b) 10000 V", correct: false },
            { text: "c) 4 V", correct: false }
        ]
    },
    {
        question: "41. Jaką moc PEP dostarcza nadajnik, jeśli napięcie międzyszczytowe (peak to peak) zmierzone oscyloskopem na sztucznym obciążeniu 50 Ω wynosi 200 V?",
        answers: [
            { text: "a) 200 W", correct: false },
            { text: "b) 100 W", correct: true },
            { text: "c) 50 W", correct: false }
        ]
    },
    {
        question: "46. Szeregowy obwód rezonansowy LC połączony w szereg z obciążeniem stanowi:",
        answers: [
            { text: "a) filtr pasmowoprzepustowy", correct: true },
            { text: "b) filtr pasmowozaporowy", correct: false },
            { text: "c) filtr IIR", correct: false }
        ]
    },
    {
        question: "48. Element aktywny we wzmacniaczu przewodzi przez cały okres wzmacnianego sygnału. Wzmacniacz ten pracuje w klasie:",
        answers: [
            { text: "a) A", correct: true },
            { text: "b) B", correct: false },
            { text: "c) C", correct: false }
        ]
    },
    {
        question: "49. W jakim celu używana jest automatyczna kontrola poziomu (ALC) we wzmacniaczu mocy RF?",
        answers: [
            { text: "a) aby zrównoważyć charakterystykę częstotliwościową nadajnika", correct: false },
            { text: "b) aby zredukować promieniowanie harmonicznych", correct: false },
            { text: "c) aby zmniejszyć zniekształcenia spowodowane nadmiernym wysterowaniem", correct: true }
        ]
    },
    // {
        // question: "50. Efektem mieszania dwóch sygnałów o częstotliwościach: 5 MHz i 2 MHz jest:",
        // answers: [
            // { text: "a) sygnał o częstotliwości 3 MHz", correct: false },
            // { text: "b) sygnał o częstotliwości 7 MHz", correct: false },
            // { text: "c) dwa sygnały o częstotliwości 3 MHz i 7 MHz", correct: true }
        // ]
    // },
    {
        question: "53. W odbiorniku superheterodynowym szumy fazowe oscylatora lokalnego mają wpływ na:",
        answers: [
            { text: "a) pogorszenie stosunku sygnału do szumu", correct: true },
            { text: "b) pływanie odbieranego sygnału telegraficznego", correct: false },
            { text: "c) zmniejszenie sygnału audio", correct: false }
        ]
    },
    {
        question: "74. Długość fali elektromagnetycznej rozchodzącej się w powietrzu wynosi 1500 metrów. Jaka jest częstotliwość tej fali?",
        answers: [
            { text: "a) 2 MHz", correct: false },
            { text: "b) 200 kHz", correct: true },
            { text: "c) 233 kHz", correct: false }
        ]
    },
    // {
        // question: "79. Powszechnie używana szerokość kanału przy emisji SSB to:",
        // answers: [
            // { text: "a) 9 kHz", correct: false },
            // { text: "b) 2,7 kHz", correct: true },
            // { text: "c) 1,5 kHz", correct: false }
        // ]
    // },
    {
        question: "80. Która z podanych mocy PEP odpowiada napięciu maksymalnemu Umax = 100 V, zmierzonemu oscyloskopem na wyjściu nadajnika, na obciążeniu 50Ω ?",
        answers: [
            { text: "a) 200 W", correct: false },
            { text: "b) 100 W", correct: true },
            { text: "c) 50 W", correct: false }
        ]
    },
    {
        question: "85. Diody Zenera to diody:",
        answers: [
            { text: "a) służące do stabilizacji napięć", correct: true },
            { text: "b) świecące", correct: false },
            { text: "c) na bardzo wysokie częstotliwości", correct: false }
        ]
    },
    {
        question: "86. Warikap to:",
        answers: [
            { text: "a) dioda mikrofalowa", correct: false },
            { text: "b) dioda pojemnościowa", correct: true },
            { text: "c) dioda stabilizacyjna", correct: false }
        ]
    },
    {
        question: "97. Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM z pojedynczą przemianą. Blok 1 to:",
        image: "img/97.png", // Ścieżka do obrazka (opcjonalnie)
		answers: [
            { text: "a) filtr wejściowy", correct: true },
            { text: "b) wzmacniacz akustyczny", correct: false },
            { text: "c) detektor AM", correct: false }
        ]
    },
	{
        question: "99. Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 1 to:",
        image: "img/99.png", // Ścieżka do obrazka (opcjonalnie)
		answers: [
            { text: "a) wzmacniacz w.cz.", correct: true },
            { text: "b) wzmacniacz akustyczny", correct: false },
            { text: "c) detektor AM CW SSB", correct: false }
        ]
    },
    // {
        // question: "103. Jaka powinna być stabilność heterodyny w odbiorniku komunikacyjnym? Częstotliwość heterodyny na najwyższym zakresie po włączeniu odbiornika powinna zmieniać się nie więcej jak:",
        // answers: [
            // { text: "a) o 200 Hz", correct: true },
            // { text: "b) o 500 Hz", correct: false },
            // { text: "c) o 1000 Hz", correct: false }
        // ]
    // },
    // {
        // question: "106. Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 1 to:",
        // image: "img/106.png", // Ścieżka do obrazka (opcjonalnie)
		// answers: [
            // { text: "a) wzmacniacz mocy (PA)", correct: false },
            // { text: "b) oscylator (VFO) 5 - 5,5 MHz", correct: false },
            // { text: "c) wzbudnica SSB 9 MHz", correct: true }
        // ]
    // },
    {
        question: "117. Niesymetryczny kabel koncentryczny 50 om do symetrycznej anteny o oporności falowej 50Ω najlepiej połączyć za pomocą:",
        answers: [
            { text: "a) ununa 9:1", correct: false },
            { text: "b) baluna 1:1 (symetryzatora)", correct: true },
            { text: "c) baluna 1:2", correct: false }
        ]
    },
    {
        question: "140. Częstotliwość pracy nadajnika amatorskiego wynosi 3,5714 MHz. Jaka jest przybliżona długość fali tego nadajnika?",
        answers: [
            { text: "a) 80 m", correct: true },
            { text: "b) 40 m", correct: false },
            { text: "c) 20 m", correct: false }
        ]
    },
    // {
        // question: "143. Modulacja FSK oznacza:",
        // answers: [
            // { text: "a) modulację amplitudy", correct: false },
            // { text: "b) modulację fazy", correct: false },
            // { text: "c) modulację z przesuwem częstotliwości", correct: true }
        // ]
    // },
    // {
        // question: "155. Dwie indukcyjności nie sprzężone mają 30 μH i 60 μH. Ile wynosi indukcyjność zastępcza przy połączeniu szeregowym tych indukcyjności?",
        // answers: [
            // { text: "a) 90 μH", correct: true },
            // { text: "b) 20 μH", correct: false },
            // { text: "c) 45 μH", correct: false }
        // ]
    // },
    {
        question: "157. Obwód rezonansowy równoległy LC w punkcie rezonansu przedstawia impedancję:",
        answers: [
            { text: "a) rzeczywistą omową", correct: true },
            { text: "b) reaktancję pojemnościową", correct: false },
            { text: "c) reaktancję indukcyjną", correct: false }
        ]
    },
    {
        question: "158. Mamy obwód rezonansowy o częstotliwości 3,5 MHz. W jego skład wchodzi pojemność C = 400 pF. Jaką pojemność należy dołączyć zamiast C, by przestroić obwód na 7 MHz?",
        answers: [
            { text: "a) 200 pF", correct: false },
            { text: "b) 100 pF", correct: true },
            { text: "c) 57 pF", correct: false }
        ]
    },
    {
        question: "163. Wzmacniacz wysokiej częstotliwości obciążony obwodem rezonansowym jest:",
        answers: [
            { text: "a) wzmacniaczem selektywnym", correct: true },
            { text: "b) wzmacniaczem szerokopasmowym", correct: false },
            { text: "c) wzmacniaczem akustycznym", correct: false }
        ]
    },
    // {
        // question: "165. Na rysunku przedstawiono schemat detektora diodowego. Jaką rolę spełnia w nim kondensator C1?",
        // image: "img/165.png", // Ścieżka do obrazka (opcjonalnie)
		// answers: [
            // { text: "a) jest kondensatorem filtrującym prądy w.cz.", correct: true },
            // { text: "b) poprawia odtwarzanie wysokich tonów", correct: false },
            // { text: "c) chroni słuchawki przed uszkodzeniem", correct: false }
        // ]
    // },
    {
        question: "170. Generator TCXO wysoką stabilność zawdzięcza:",
        answers: [
            { text: "a) zastosowaniu specjalnych układów korygujących częstotliwość", correct: true },
            { text: "b) docięciu kryształu kwarcu z dokładnością do femtometrów", correct: false },
            { text: "c) stabilizacji temperatury oscylatora", correct: false }
        ]
    },
    {
        question: "173. Na rysunku przedstawiono schemat stabilizacji PLL w formie ponumerowanych ale nie opisanych bloków. Blok 3 to:",
        image: "img/173.png", // Ścieżka do obrazka (opcjonalnie)
		answers: [
            { text: "a) dzielnik nastawny", correct: false },
            { text: "b) komparator fazy", correct: true },
            { text: "c) wzmacniacz błędu", correct: false }
        ]
    },
    // {
        // question: "176. Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM z pojedynczą przemianą. Blok 2 to:",
        // image: "img/176.png", // Ścieżka do obrazka (opcjonalnie)
		// answers: [
            // { text: "a) wzmacniacz akustyczny", correct: false },
            // { text: "b) mieszacz", correct: true },
            // { text: "c) detektor AM", correct: false }
        // ]
    // },
	// {
        // question: "178. Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM z pojedynczą przemianą. Blok 4 to:",
        // image: "img/178.png", // Ścieżka do obrazka (opcjonalnie)
		// answers: [
            // { text: "a) wzmacniacz akustyczny", correct: false },
            // { text: "b) filtr wejściowy", correct: false },
            // { text: "c) detektor AM", correct: true }
        // ]
    // },
    {
        question: "184. Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 6 to:",
        image: "img/184.png", // Ścieżka do obrazka (opcjonalnie)
		answers: [
            { text: "a) filtr przełączany II p.cz.", correct: true },
            { text: "b) wzmacniacz akustyczny", correct: false },
            { text: "c) II heterodyna stała", correct: false }
        ]
    },
    // {
        // question: "187. Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 10 to:",
        // image: "img/187.png", // Ścieżka do obrazka (opcjonalnie)
		// answers: [
            // { text: "a) wzmacniacz akustyczny", correct: false },
            // { text: "b) BFO", correct: true },
            // { text: "c) detektor AM, CW, SSB", correct: false }
        // ]
    // },
    // {
        // question: "193. Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 3 to:",
        // image: "img/193.png", // Ścieżka do obrazka (opcjonalnie)
		// answers: [
            // { text: "a) wzmacniacz w.cz.", correct: false },
            // { text: "b) wzmacniacz I pośredniej cz. 10,7 MHz", correct: true },
            // { text: "c) I heterodyna", correct: false }
        // ]
    // },
    // {
        // question: "195. Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 5 to:",
        // image: "img/195.png", // Ścieżka do obrazka (opcjonalnie)
		// answers: [
            // { text: "a) II heterodyna stała", correct: false },
            // { text: "b) wzmacniacz II p.cz. 455 kHz", correct: true },
            // { text: "c) detektor FM", correct: false }
        // ]
    // },
    // {
        // question: "203. Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na jedno pasmo amatorskie. Blok 2 to:",
        // image: "img/203.png", // Ścieżka do obrazka (opcjonalnie)
		// answers: [
            // { text: "a) wzmacniacz mocy (PA)", correct: false },
            // { text: "b) oscylator (VFO)", correct: false },
            // { text: "c) separator", correct: true }
        // ]
    // },
    {
        question: "204. Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na jedno pasmo amatorskie. Blok 3 to:",
        image: "img/204.png", // Ścieżka do obrazka (opcjonalnie)
		answers: [
            { text: "a) oscylator (VFO)", correct: false },
            { text: "b) wzmacniacz mocy (PA)", correct: true },
            { text: "c) filtr wyjściowy", correct: false }
        ]
    },
    {
        question: "205. Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na kilka pasm amatorskich z powielaniem częstotliwości. Blok 2 to:",
        image: "img/205.png", // Ścieżka do obrazka (opcjonalnie)
		answers: [
            { text: "a) wzmacniacz sterujący", correct: false },
            { text: "b) separator", correct: true },
            { text: "c) I powielacz x2", correct: false }
        ]
    },
    {
        question: "207. Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 4 to:",
        image: "img/207.png", // Ścieżka do obrazka (opcjonalnie)
		answers: [
            { text: "a) wzmacniacz sterujący", correct: true },
            { text: "b) filtr wyjściowy", correct: false },
            { text: "c) wzbudnica SSB 9 MHz", correct: false }
        ]
    },
    {
        question: "208. Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 5 to:",
        image: "img/208.png", // Ścieżka do obrazka (opcjonalnie)
		answers: [
            { text: "a) wzmacniacz mocy (PA)", correct: true },
            { text: "b) mieszacz", correct: false },
            { text: "c) oscylator (VFO) 5 - 5,5 MHz", correct: false }
        ]
    },
    {
        question: "209. Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 6 to:",
        image: "img/209.png", // Ścieżka do obrazka (opcjonalnie)
		answers: [
            { text: "a) wzmacniacz mocy (PA)", correct: false },
            { text: "b) filtr wyjściowy", correct: true },
            { text: "c) mieszacz", correct: false }
        ]
    },
    // {
        // question: "210. Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 7 to:",
        // image: "img/210.png", // Ścieżka do obrazka (opcjonalnie)
		// answers: [
            // { text: "a) oscylator (VFO) 5-5,5 MHz", correct: true },
            // { text: "b) filtr wyjściowy", correct: false },
            // { text: "c) filtr pasmowy 3,5 - 14 MHz", correct: false }
        // ]
    // },
    // {
        // question: "211. Jak zmienia się impedancja dipola półfalowego, gdy obniżamy wysokość jego zawieszenia?",
        // answers: [
            // { text: "a) rośnie", correct: false },
            // { text: "b) maleje", correct: true },
            // { text: "c) nie ulega zmianie", correct: false }
        // ]
    // },
    {
        question: "214. Antena kierunkowa daje napięcie 4 razy większe, niż dipol półfalowy zawieszony w tym samym miejscu. Jaki zysk ma antena kierunkowa?",
        answers: [
            { text: "a) 6 dBd", correct: false },
            { text: "b) 4 dBd", correct: false },
            { text: "c) 12 dBd", correct: true }
        ]
    },
    // {
        // question: "215. Kabel koncentryczny o długości 100m, przy częstotliwości 144MHz wprowadza tłumienie 12dB. Długość kabla pomiędzy nadajnikiem 100 W a anteną wynosi 50 m. Jaka część tej mocy zostanie doprowadzona do anteny?",
        // answers: [
            // { text: "a) 25%", correct: true },
            // { text: "b) 50%", correct: false },
            // { text: "c) 75%", correct: false }
        // ]
    // },
    {
        question: "217. Propagacja jonosferyczna latem, w dzień, pasma radioamatorskiego 20 m, najczęściej odbywa się przez odbicie od warstwy:",
        answers: [
            { text: "a) D", correct: false },
            { text: "b) E", correct: false },
            { text: "c) F", correct: true }
        ]
    },
    {
        question: "225. Wzmacniacz, który wzmacnia sygnały w zakresie pasm amatorskich 3,5, 7 i 14 MHz z takim samym wzmocnieniem nazywamy:",
        answers: [
            { text: "a) wzmacniaczem mocy", correct: false },
            { text: "b) wzmacniaczem szerokopasmowym", correct: true },
            { text: "c) wzmacniaczem ze strojonymi obwodami pośredniej częstotliwości", correct: false }
        ]
    },
	{
        question: "226. Wzmacniacz w klasie C nie może być używany do:",
        answers: [
            { text: "a) fali nośnej, sygnałów modulacji częstotliwości", correct: false },
            { text: "b) sygnałów jednowstęgowych (J3E)", correct: true },
            { text: "c) może być używany wszędzie, gdyż ma wyższą sprawność", correct: false }
        ]
    },
    //{
        // question: "227. Generator BFO jest niezbędny do odbioru:",
        // answers: [
            // { text: "a) sygnałów modulacji częstotliwości (F3E)", correct: false },
            // { text: "b) sygnałów modulacji amplitudy z pełną falą nośną (A3E)", correct: false },
            // { text: "c) sygnałów telegraficznych (A1) i modulacji amplitudy ze zredukowaną falą nośną", correct: true }
        // ]
    // },
    {
        question: "230. Początkujący krótkofalowiec sfrustrował się brakiem stacji w paśmie 24 MHz. Opiekun radiostacji klubowej zalecił mu przejście na 'niższe' pasmo. Które pasmo powinien wybrać?",
        answers: [
            { text: "a) 10 m", correct: false },
            { text: "b) 12 m", correct: false },
            { text: "c) 20 m", correct: true }
        ]
    },
    {
        question: "236. W emisji RTTY używane jest:",
        answers: [
            { text: "a) kluczowanie amplitudy", correct: false },
            { text: "b) kluczowanie fazy", correct: false },
            { text: "c) kluczowanie częstotliwości", correct: true }
        ]
    },
    // {
        // question: "237. Zwiększając liczbę możliwych przesunięć fazy w modulacji PSK, bez zwiększania baudrate, szerokość pasma sygnału:",
        // answers: [
            // { text: "a) zwiększa się", correct: false },
            // { text: "b) zmniejsza się", correct: false },
            // { text: "c) nie zmienia się", correct: true }
        // ]
    // },
    {
        question: "238. Moc wyjściową nadajnika FM podano w dBW i wynosi ona 13 dBW. Ile to jest w watach?",
        answers: [
            { text: "a) 5 W", correct: false },
            { text: "b) 130 W", correct: false },
            { text: "c) 20 W", correct: true }
        ]
    },
    {
        question: "240. Która z podanych mocy PEP odpowiada napięciu maksymalnemu Umax = 100 V, zmierzonemu oscyloskopem na wyjściu nadajnika, na obciążeniu 50 omów (zakładamy sygnał sinusoidalny)?",
        answers: [
            { text: "a) 200 W", correct: false },
            { text: "b) 100 W", correct: true },
            { text: "c) 50 W", correct: false }
        ]
    },
    {
        question: "242. Filtr antyaliasingowy w odbiorniku SDR może być zrealizowany jako:",
        answers: [
            { text: "a) filtr sprzętowy", correct: true },
            { text: "b) filtr programowy", correct: false },
            { text: "c) filtr sprzętowy lub programowy", correct: false }
        ]
    },
    {
        question: "243. Rezystor o wartości 10 Ω dołączono do napięcia 3 V. Jakiej mocy rezystor należy dobrać, żeby nie uległ on uszkodzeniu?",
        answers: [
            { text: "a) 1 W", correct: true },
            { text: "b) 0,125 W", correct: false },
            { text: "c) 0,5 W", correct: false }
        ]
    },
    // {
        // question: "249. Diody Zenera to diody:",
        // answers: [
            // { text: "a) służące do stabilizacji napięć", correct: true },
            // { text: "b) świecące", correct: false },
            // { text: "c) na bardzo wysokie częstotliwości", correct: false }
        // ]
    // },
    {
        question: "250. Zasadniczym przeznaczeniem diody PIN jest:",
        answers: [
            { text: "a) prostowanie bardzo dużych napięć i prądów", correct: false },
            { text: "b) stosowanie jej jako przełącznika w. cz.", correct: true },
            { text: "c) stosowanie jej jako elementu ochronnego przed przepięciem", correct: false }
        ]
    },
	{
        question: "251. Zasadniczymi zaletami diody TVS (Transil) są:",
        answers: [
            { text: "a) szybkie przełączanie i rozpraszanie dużych chwilowych mocy", correct: true },
            { text: "b) spadek napięcia rzędu 1 mV i bardzo mała pojemność złącza", correct: false },
            { text: "c) dodatkowy zacisk sterujący i liniowa charakterystyka prądowo-napięciowa", correct: false }
        ]
    },
    {
        question: "254. Tranzystory bipolarne i polowe sterujemy odpowiednio:",
        answers: [
            { text: "a) napięciem i prądem", correct: false },
            { text: "b) prądem i prądem", correct: false },
            { text: "c) prądem i napięciem", correct: true }
        ]
    },
    // {
        // question: "260. Dwie niezależne cewki mają indukcyjności 30 μH i 60 μH. Ile wynosi indukcyjność zastępcza przy połączeniu szeregowym tych cewek?",
        // answers: [
            // { text: "a) 90 μH", correct: true },
            // { text: "b) 45 μH", correct: false },
            // { text: "c) 20 μH", correct: false }
        // ]
    // },
    {
        question: "261. Obwód rezonansowy szeregowy LC, w punkcie rezonansu, przedstawia:",
        answers: [
            { text: "a) tylko rezystancję", correct: true },
            { text: "b) reaktancję pojemnościową", correct: false },
            { text: "c) reaktancję indukcyjną", correct: false }
        ]
    },
    // {
        // question: "262. Jeżeli dobroć obwodu rezonansowego Q = 100, to pasmo przy częstotliwości obwodu 14 MHz ma szerokość:",
        // answers: [
            // { text: "a) 280 kHz", correct: false },
            // { text: "b) 14 kHz", correct: false },
            // { text: "c) 140 kHz", correct: true }
        // ]
    // },
    {
        question: "263. Skrzynka antenowa w układzie T, gdzie szeregowo włączone są kondensatory, a równolegle cewka, jest:",
        answers: [
            { text: "a) filtrem dolnoprzepustowym", correct: false },
            { text: "b) filtrem górnoprzepustowym", correct: true },
            { text: "c) filtrem pasmowym", correct: false }
        ]
    },
    {
        question: "266. Która klasa pracy wzmacniacza wprowadza najmniejsze zniekształcenia?",
        answers: [
            { text: "a) klasa AB", correct: false },
            { text: "b) klasa A", correct: true },
            { text: "c) klasa C", correct: false }
        ]
    },
    {
        question: "268. Jaki jest cel włączenia szeregowo rezystora i kondensatora pomiędzy wejście i wyjście wzmacniacza mocy z tranzystorem w układzie wspólnego źródła?",
        answers: [
            { text: "a) zwiększenie wzmocnienia wzmacniacza", correct: false },
            { text: "b) utworzenie obwodu rezonansowego, który działa jako filtr pasmowy", correct: false },
            { text: "c) zwiększenie stabilności wzmacniacza", correct: true }
        ]
    },
    {
        question: "269. Szum fazowy jest wynikiem:",
        answers: [
            { text: "a) kluczowania fazy (PSK)", correct: false },
            { text: "b) krótkich i niewielkich odchyleń częstotliwości generatora", correct: true },
            { text: "c) mieszania się sygnałów o różnych fazach", correct: false }
        ]
    },
    {
        question: "271. W transceiverach SDR do przetwornika A/C doprowadza się sygnały kwadraturowe (oznaczone jako I oraz Q). Jaki jest tego cel?",
        answers: [
            { text: "a) Możliwość zaprogramowania demodulatora dla każdej emisji", correct: true },
            { text: "b) Minimalizacja zniekształceń sygnału", correct: false },
            { text: "c) Możliwość demodulacji sygnałów z dwóch różnych źródeł", correct: false }
        ]
    },
    // {
        // question: "272. Bezpośrednia synteza cyfrowa (DDS) generuje przebieg przez:",
        // answers: [
            // { text: "a) użycie przetwornika cyfrowo-analogowego", correct: true },
            // { text: "b) cyfrowe przestrajanie obwodu rezonansowego", correct: false },
            // { text: "c) cyfrowe sterowanie układem NE555", correct: false }
        // ]
    // },
    {
        question: "273. Odbiornik homodynowy od superheterodynowego odróżnia:",
        answers: [
            { text: "a) brak częstotliwości pośredniej (jest równa 0)", correct: true },
            { text: "b) brak generatora", correct: false },
            { text: "c) brak demodulatora", correct: false }
        ]
    },
	// {
        // question: "274. Dewiacja sygnału FM opisuje:",
        // answers: [
            // { text: "a) maksymalne odchylenie od częstotliwości nośnej", correct: true },
            // { text: "b) szerokość pasma sygnału", correct: false },
            // { text: "c) maksymalne różnice amplitudy sygnału", correct: false }
        // ]
    // },
    // {
        // question: "276. Antena Yagi-Uda składa się co najmniej z:",
        // answers: [
            // { text: "a) wibratora, reflektora i direktora", correct: false },
            // { text: "b) wibratora i directora", correct: true },
            // { text: "c) pięciu prętów aluminiowych", correct: false }
        // ]
    // },
    {
        question: "278. Gdy antena jest w rezonansie, to:",
        answers: [
            { text: "a) moduł impedancji jest równy 50 Ω", correct: false },
            { text: "b) reaktancja jest równa 0 Ω", correct: true },
            { text: "c) reaktancja jest nieskończenie duża", correct: false }
        ]
    },
    {
        question: "279. Dipol półfalowy na pasmo 80 m prezentuje na paśmie 40 m:",
        answers: [
            { text: "a) niską impedancję", correct: false },
            { text: "b) bardzo wysoką impedancję", correct: true },
            { text: "c) zwarcie", correct: false }
        ]
    },
    {
        question: "280. Dipol półfalowy na pasmo 40m można użyć na paśmie:",
        answers: [
            { text: "a) 7 i 21 MHz", correct: true },
            { text: "b) 3,5 i 5 MHz", correct: false },
            { text: "c) 7 i 28 MHz", correct: false }
        ]
    },
    // {
        // question: "289. Mamy antenę kierunkową A o zysku 3 dBi i antenę kierunkową B o zysku 6 dBi. Do każdej z nich podano sygnał o mocy 100 W. Ile całkowitej mocy wypromieniowała każda antena?",
        // answers: [
            // { text: "a) A - 100 W, B - 100 W", correct: true },
            // { text: "b) A - 200 W, B - 400 W", correct: false },
            // { text: "c) A - 100 W, B - 200 W", correct: false }
        // ]
    // },
    {
        question: "290. Współczynnik tył/przód (F/B ratio) pewnej anteny kierunkowej wynosi 19 dB a jej zysk 10,5 dBd. Czy w sytuacji awarii rotora antenowego lepiej będzie nadawać \"tyłem anteny\" korzystając z jej listka tylnego czy też przełączyć się na dipol półfalowy w tej samej polaryzacji?",
        answers: [
            { text: "a) przełączyć się na dipol", correct: true },
            { text: "b) pozostać przy antenie kierunkowej", correct: false },
            { text: "c) to bez znaczenia dla nadawania", correct: false }
        ]
    },
    {
        question: "293. Linię symetryczną zawieszono w otwartej przestrzeni, podłączono do symetrycznego nadajnika i zakończono sztucznym obciążeniem. Czy wówczas linia promieniuje?",
        answers: [
            { text: "a) tak", correct: false },
            { text: "b) nie", correct: true },
            { text: "c) tak, jeśli jej długość przekracza 1/4 długości fali (jest linią długą)", correct: false }
        ]
    },
    {
        question: "296. Pomiar SWR przy nadajniku wskazał wartość 1:1,5, ale mamy podejrzenie, że dopasowanie anteny jest niewłaściwe. Co może być przyczyną?",
        answers: [
            { text: "a) poziom zakłóceń lokalnych", correct: false },
            { text: "b) tłumienie linii zasilającej", correct: true },
            { text: "c) podejrzenie jest błędne, dopasowanie jest poprawne", correct: false }
        ]
    },
    {
        question: "297. Nadajnik został dołączony do anteny fiderem o całkowitym tłumieniu 5dB. Co wówczas zaobserwujemy:",
        answers: [
            { text: "a) stratę 50% mocy nadajnika, brak wpływu na odbiór", correct: false },
            { text: "b) stratę 5% mocy nadajnika, zmianę SWR", correct: false },
            { text: "c) stratę około 70% mocy nadajnika", correct: true }
        ]
    },
	{
        question: "298. Użycie baluna wskazane jest kiedy",
        answers: [
            { text: "a) zasilamy antenę typu longwire kablem koncentrycznym", correct: false },
            { text: "b) zasilamy dipol półfalowy kablem koncentrycznym", correct: true },
            { text: "c) chcemy przetestować tłumienność linii symetrycznej", correct: false }
        ]
    },
    {
        question: "299. Włączenie tłumika w odbiorniku spowoduje:",
        answers: [
            { text: "a) poprawę odporności odbiornika na silne sygnały", correct: true },
            { text: "b) poprawę stosunku sygnału do szumu na wejściu odbiornika", correct: false },
            { text: "c) przestrojenie odbiornika", correct: false }
        ]
    },
    {
        question: "302. Dlaczego podczas dnia trudno zrobić daleką łączność na paśmie 80 m:",
        answers: [
            { text: "a) z racji na brak propagacji w warstwie E", correct: false },
            { text: "b) z racji na silne tłumienie w warstwie D", correct: true },
            { text: "c) z racji na to, że anteny nie działają podczas dnia", correct: false }
        ]
    },
    // {
        // question: "307. Aby nawiązać łączność na dalekie odległości na falach krótkich należy użyć:",
        // answers: [
            // { text: "a) anten o wysokim kącie promieniowania", correct: false },
            // { text: "b) anten o niskim kącie promieniowania", correct: true },
            // { text: "c) nadajnika o dużej mocy, antena i pasmo mogą być dowolne", correct: false }
        // ]
    // },
    {
        question: "309. Charakterystyczne okresowe zaniki sygnału na falach krótkich spowodowane są:",
        answers: [
            { text: "a) niewłaściwą pracą anteny", correct: false },
            { text: "b) wielodrogową propagacją i zmianą tłumienia na trasie", correct: true },
            { text: "c) utratą mocy nadajnika", correct: false }
        ]
    },
    // {
        // question: "310. Propagacja troposferyczna w paśmie UKF polega na:",
        // answers: [
            // { text: "a) wielokrotnym odbiciu fal pomiędzy troposferą i jonosferą", correct: false },
            // { text: "b) wielokrotnym odbiciu fal pomiędzy ziemią i troposferą", correct: false },
            // { text: "c) prowadzeniu fal przez dukty powstałe z warstw ciepłego i zimnego powietrza", correct: true }
        // ]
    // },
    {
        question: "312. Pewnego dnia krótkofalowiec w paśmie 50 MHz usłyszał stacje z południa Europy. Mogło się to zdarzyć:",
        answers: [
            { text: "a) zimą z racji na lokalne zanieczyszczenie powietrza", correct: false },
            { text: "b) głównie latem, dzięki propagacji w warstwie sporadycznej E", correct: true },
            { text: "c) latem z uwagi na mniejszą wilgotność powietrza", correct: false }
        ]
    },
    // {
        // question: "314. Na których pasmach amatorskich można próbować łączności poprzez odbicie od zjonizowanych śladów meteorów:",
        // answers: [
            // { text: "a) na pasmach fal ultrakrótkich, np. 70 cm lub 2 m", correct: true },
            // { text: "b) na niskich pasmach fal krótkich, np. 80 m i 40 m", correct: false },
            // { text: "c) takie łączności są niemożliwe, meteory są zbyt małe, by odbijać fale radiowe", correct: false }
        // ]
    // },
    {
        question: "320. Antena na pasmo 2m została dołączona popularnym kablem koncentrycznym RG-58 o długości 100m. Dlaczego krótkofalowiec nie uważa takiej instalacji za optymalną:",
        answers: [
            { text: "a) Z racji na duże straty mocy w linii zasilającej", correct: true },
            { text: "b) Kabel RG-58 ma niewłaściwą impedancję", correct: false },
            { text: "c) Z racji na to, że kabel ten był używany w instalacjach CB Radio", correct: false }
        ]
    },
    // {
        // question: "323. Jak nazywa się przyrząd do pomiaru siły elektromotorycznej?",
        // answers: [
            // { text: "a) omomierz", correct: false },
            // { text: "b) woltomierz", correct: true },
            // { text: "c) amperomierz", correct: false }
        // ]
    // },
    {
        question: "324. Bocznik do pomiaru prądu powinien mieć:",
        answers: [
            { text: "a) maksymalną rezystancję", correct: false },
            { text: "b) minimalną rezystancję", correct: false },
            { text: "c) rezystancję dopasowaną do mierzonego prądu i parametrów ustroju pomiarowego", correct: true }
        ]
    },
    {
        question: "329. Co pokazuje reflektometr dołączony między wyjście nadajnika a kabel antenowy?",
        answers: [
            { text: "a) dopasowanie linii zasilającej", correct: true },
            { text: "b) rezonans anteny", correct: false },
            { text: "c) dostrojenie nadajnika", correct: false }
        ]
    },
    {
        question: "332. Jakie zjawisko jest odpowiedzialne za zakłócenia słyszalne w radioodbiorniku jako dziwne dźwięki nałożone na sygnał stacji radiofonicznej FM:",
        answers: [
            { text: "a) intermodulacja w obwodach wejściowych odbiornika FM", correct: true },
            { text: "b) rozstrajanie generatora zadającego w syntezerze w odbiorniku FM", correct: false },
            { text: "c) detekcja sygnału SSB stacji amatorskiej we wzmacniaczu częstotliwości akustycznej odbiornika", correct: false }
        ]
    },
    {
        question: "337. Dynamika jest:",
        answers: [
            { text: "a) różnicą pomiędzy najsłabszym a najmocniejszym sygnałem", correct: true },
            { text: "b) miarą szybkości zmian amplitudy", correct: false },
            { text: "c) miarą szybkości nadawania znaków telegraficznych", correct: false }
        ]
    },
    {
        question: "489. Jaką maksymalną mocą może nadawać amatorska stacja bezobsługowa, pracująca w paśmie 10m?",
        answers: [
            { text: "a) 100 W", correct: false },
            { text: "b) 15 W", correct: false },
            { text: "c) 50 W", correct: true }
        ]
    },
    {
        question: "504. Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 40 m to:",
        answers: [
            { text: "a) 7000 kHz - 7200 kHz", correct: true },
            { text: "b) 7100 kHz - 7300 kHz", correct: false },
            { text: "c) 7050 kHz - 7200 kHz", correct: false }
        ]
    },
    {
        question: "505. Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 30 m to:",
        answers: [
            { text: "a) 10050 kHz - 10200 kHz", correct: false },
            { text: "b) 10100 kHz - 10150 kHz", correct: true },
            { text: "c) 10100 kHz - 10200 kHz", correct: false }
        ]
    },
    {
        question: "506. Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 20 m to:",
        answers: [
            { text: "a) 14000 kHz - 14350 kHz", correct: true },
            { text: "b) 14000 kHz - 14450 kHz", correct: false },
            { text: "c) 14100 kHz - 14350 kHz", correct: false }
        ]
    },
    {
        question: "509. Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 12 m to:",
        answers: [
            { text: "a) 24690 kHz - 24990 kHz", correct: false },
            { text: "b) 24890 kHz - 24990 kHz", correct: true },
            { text: "c) 24680 kHz - 24990 kHz", correct: false }
        ]
    },
    // Dodaj więcej pytań w razie potrzeby
];
