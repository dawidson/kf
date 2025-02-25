const questions = [
    // {
        // question: "R - 1",
        // answers: [
            // { text: "nieczytelny", correct: true },
            // { text: "czytelny ze znacznymi trudnościami (ledwie czytelny)", correct: false },
            // { text: "czytelny z dużymi trudnościami", correct: false },
            // { text: "czytelny z niewielkimi trudnościami", correct: false },
            // { text: "dobrze czytelny", correct: false }
        // ]
    // },
    // {
        // question: "R - 2",
        // answers: [
            // { text: "nieczytelny", correct: false },
            // { text: "czytelny ze znacznymi trudnościami (ledwie czytelny)", correct: true },
            // { text: "czytelny z dużymi trudnościami", correct: false },
            // { text: "czytelny z niewielkimi trudnościami", correct: false },
            // { text: "dobrze czytelny", correct: false }
        // ]
    // },
    // {
        // question: "R - 3",
        // answers: [
            // { text: "nieczytelny", correct: false },
            // { text: "czytelny ze znacznymi trudnościami (ledwie czytelny)", correct: false },
            // { text: "czytelny z dużymi trudnościami", correct: true },
            // { text: "czytelny z niewielkimi trudnościami", correct: false },
            // { text: "dobrze czytelny", correct: false }
        // ]
    // },
    // {
        // question: "R - 4",
        // answers: [
            // { text: "nieczytelny", correct: false },
            // { text: "czytelny ze znacznymi trudnościami (ledwie czytelny)", correct: false },
            // { text: "czytelny z dużymi trudnościami", correct: false },
            // { text: "czytelny z niewielkimi trudnościami", correct: true },
            // { text: "dobrze czytelny", correct: false }
        // ]
    // },
    // {
        // question: "R - 5",
        // answers: [
            // { text: "nieczytelny", correct: false },
            // { text: "czytelny ze znacznymi trudnościami (ledwie czytelny)", correct: false },
            // { text: "czytelny z dużymi trudnościami", correct: false },
            // { text: "czytelny z niewielkimi trudnościami", correct: false },
            // { text: "dobrze czytelny", correct: true }
        // ]
    // },
	// {
        // question: "nieczytelny",
        // answers: [
            // { text: "R - 1", correct: true },
            // { text: "R - 2", correct: false },
            // { text: "R - 3", correct: false },
            // { text: "R - 4", correct: false },
            // { text: "R - 5", correct: false }
        // ]
    // },
	// {
        // question: "czytelny ze znacznymi trudnościami (ledwie czytelny)",
        // answers: [
            // { text: "R - 1", correct: false },
            // { text: "R - 2", correct: true },
            // { text: "R - 3", correct: false },
            // { text: "R - 4", correct: false },
            // { text: "R - 5", correct: false }
        // ]
    // },
	// {
        // question: "czytelny z dużymi trudnościami",
        // answers: [
            // { text: "R - 1", correct: false },
            // { text: "R - 2", correct: false },
            // { text: "R - 3", correct: true },
            // { text: "R - 4", correct: false },
            // { text: "R - 5", correct: false }
        // ]
    // },
	// {
        // question: "czytelny z niewielkimi trudnościami",
        // answers: [
            // { text: "R - 1", correct: false },
            // { text: "R - 2", correct: false },
            // { text: "R - 3", correct: false },
            // { text: "R - 4", correct: true },
            // { text: "R - 5", correct: false }
        // ]
    // },
	// {
        // question: "dobrze czytelny",
        // answers: [
            // { text: "R - 1", correct: false },
            // { text: "R - 2", correct: false },
            // { text: "R - 3", correct: false },
            // { text: "R - 4", correct: false },
            // { text: "R - 5", correct: true }
        // ]
    // },
    {
        question: "S - 1",
        answers: [
            { text: "bardzo słaby", correct: true },
            { text: "bardzo słaby ale czytelny", correct: false },
            { text: "słaby", correct: false },
            { text: "dostatecznie dobry dla odbioru ", correct: false },
            { text: "dość dobry dla odbioru", correct: false },
            { text: "dobry", correct: false },
            { text: "umiarkowanie silny", correct: false },
            { text: "silny", correct: false },
            { text: "bardzo silny", correct: false }
        ]
    },
    {
        question: "S - 2",
        answers: [
            { text: "bardzo słaby", correct: false },
            { text: "bardzo słaby ale czytelny", correct: true },
            { text: "słaby", correct: false },
            { text: "dostatecznie dobry dla odbioru ", correct: false },
            { text: "dość dobry dla odbioru", correct: false },
            { text: "dobry", correct: false },
            { text: "umiarkowanie silny", correct: false },
            { text: "silny", correct: false },
            { text: "bardzo silny", correct: false }
        ]
    },
    {
        question: "S - 3",
        answers: [
            { text: "bardzo słaby", correct: false },
            { text: "bardzo słaby ale czytelny", correct: false },
            { text: "słaby", correct: true },
            { text: "dostatecznie dobry dla odbioru ", correct: false },
            { text: "dość dobry dla odbioru", correct: false },
            { text: "dobry", correct: false },
            { text: "umiarkowanie silny", correct: false },
            { text: "silny", correct: false },
            { text: "bardzo silny", correct: false }
        ]
    },
    {
        question: "S - 4",
        answers: [
            { text: "bardzo słaby", correct: false },
            { text: "bardzo słaby ale czytelny", correct: false },
            { text: "słaby", correct: false },
            { text: "dostatecznie dobry dla odbioru ", correct: true },
            { text: "dość dobry dla odbioru", correct: false },
            { text: "dobry", correct: false },
            { text: "umiarkowanie silny", correct: false },
            { text: "silny", correct: false },
            { text: "bardzo silny", correct: false }
        ]
    },
    {
        question: "S - 5",
        answers: [
            { text: "bardzo słaby", correct: false },
            { text: "bardzo słaby ale czytelny", correct: false },
            { text: "słaby", correct: false },
            { text: "dostatecznie dobry dla odbioru ", correct: false },
            { text: "dość dobry dla odbioru", correct: true },
            { text: "dobry", correct: false },
            { text: "umiarkowanie silny", correct: false },
            { text: "silny", correct: false },
            { text: "bardzo silny", correct: false }
        ]
    },
    {
        question: "S - 6",
        answers: [
            { text: "bardzo słaby", correct: false },
            { text: "bardzo słaby ale czytelny", correct: false },
            { text: "słaby", correct: false },
            { text: "dostatecznie dobry dla odbioru ", correct: false },
            { text: "dość dobry dla odbioru", correct: false },
            { text: "dobry", correct: true },
            { text: "umiarkowanie silny", correct: false },
            { text: "silny", correct: false },
            { text: "bardzo silny", correct: false }
        ]
    },
    {
        question: "S - 7",
        answers: [
            { text: "bardzo słaby", correct: false },
            { text: "bardzo słaby ale czytelny", correct: false },
            { text: "słaby", correct: false },
            { text: "dostatecznie dobry dla odbioru ", correct: false },
            { text: "dość dobry dla odbioru", correct: false },
            { text: "dobry", correct: false },
            { text: "umiarkowanie silny", correct: true },
            { text: "silny", correct: false },
            { text: "bardzo silny", correct: false }
        ]
    },
    {
        question: "S - 8",
        answers: [
            { text: "bardzo słaby", correct: false },
            { text: "bardzo słaby ale czytelny", correct: false },
            { text: "słaby", correct: false },
            { text: "dostatecznie dobry dla odbioru ", correct: false },
            { text: "dość dobry dla odbioru", correct: false },
            { text: "dobry", correct: false },
            { text: "umiarkowanie silny", correct: false },
            { text: "silny", correct: true },
            { text: "bardzo silny", correct: false }
        ]
    },
    {
        question: "S - 9",
        answers: [
            { text: "bardzo słaby", correct: false },
            { text: "bardzo słaby ale czytelny", correct: false },
            { text: "słaby", correct: false },
            { text: "dostatecznie dobry dla odbioru ", correct: false },
            { text: "dość dobry dla odbioru", correct: false },
            { text: "dobry", correct: false },
            { text: "umiarkowanie silny", correct: false },
            { text: "silny", correct: false },
            { text: "bardzo silny", correct: true }
        ]
    },
	{
        question: "bardzo słaby",
        answers: [
            { text: "S - 1", correct: true },
            { text: "S - 2", correct: false },
            { text: "S - 3", correct: false },
            { text: "S - 4", correct: false },
            { text: "S - 5", correct: false },
            { text: "S - 6", correct: false },
            { text: "S - 7", correct: false },
            { text: "S - 8", correct: false },
            { text: "S - 9", correct: false }
        ]
    },
	{
        question: "bardzo słaby ale czytelny",
        answers: [
            { text: "S - 1", correct: false },
            { text: "S - 2", correct: true },
            { text: "S - 3", correct: false },
            { text: "S - 4", correct: false },
            { text: "S - 5", correct: false },
            { text: "S - 6", correct: false },
            { text: "S - 7", correct: false },
            { text: "S - 8", correct: false },
            { text: "S - 9", correct: false }
        ]
    },
	{
        question: "słaby",
        answers: [
            { text: "S - 1", correct: false },
            { text: "S - 2", correct: false },
            { text: "S - 3", correct: true },
            { text: "S - 4", correct: false },
            { text: "S - 5", correct: false },
            { text: "S - 6", correct: false },
            { text: "S - 7", correct: false },
            { text: "S - 8", correct: false },
            { text: "S - 9", correct: false }
        ]
    },
	{
        question: "dostatecznie dobry dla odbioru (umiarkowany)",
        answers: [
            { text: "S - 1", correct: false },
            { text: "S - 2", correct: false },
            { text: "S - 3", correct: false },
            { text: "S - 4", correct: true },
            { text: "S - 5", correct: false },
            { text: "S - 6", correct: false },
            { text: "S - 7", correct: false },
            { text: "S - 8", correct: false },
            { text: "S - 9", correct: false }
        ]
    },
	{
        question: "dość dobry dla odbioru",
        answers: [
            { text: "S - 1", correct: false },
            { text: "S - 2", correct: false },
            { text: "S - 3", correct: false },
            { text: "S - 4", correct: false },
            { text: "S - 5", correct: true },
            { text: "S - 6", correct: false },
            { text: "S - 7", correct: false },
            { text: "S - 8", correct: false },
            { text: "S - 9", correct: false }
        ]
    },
	{
        question: "dobry",
        answers: [
            { text: "S - 1", correct: false },
            { text: "S - 2", correct: false },
            { text: "S - 3", correct: false },
            { text: "S - 4", correct: false },
            { text: "S - 5", correct: false },
            { text: "S - 6", correct: true },
            { text: "S - 7", correct: false },
            { text: "S - 8", correct: false },
            { text: "S - 9", correct: false }
        ]
    },
	{
        question: "umiarkowanie silny",
        answers: [
            { text: "S - 1", correct: false },
            { text: "S - 2", correct: false },
            { text: "S - 3", correct: false },
            { text: "S - 4", correct: false },
            { text: "S - 5", correct: false },
            { text: "S - 6", correct: false },
            { text: "S - 7", correct: true },
            { text: "S - 8", correct: false },
            { text: "S - 9", correct: false }
        ]
    },
	{
        question: "silny",
        answers: [
            { text: "S - 1", correct: false },
            { text: "S - 2", correct: false },
            { text: "S - 3", correct: false },
            { text: "S - 4", correct: false },
            { text: "S - 5", correct: false },
            { text: "S - 6", correct: false },
            { text: "S - 7", correct: false },
            { text: "S - 8", correct: true },
            { text: "S - 9", correct: false }
        ]
    },
	{
        question: "bardzo silny",
        answers: [
            { text: "S - 1", correct: false },
            { text: "S - 2", correct: false },
            { text: "S - 3", correct: false },
            { text: "S - 4", correct: false },
            { text: "S - 5", correct: false },
            { text: "S - 6", correct: false },
            { text: "S - 7", correct: false },
            { text: "S - 8", correct: false },
            { text: "S - 9", correct: true }
        ]
    },
	// {
        // question: "bardzo chrapliwy ton prądu zmiennego",
        // answers: [
            // { text: "T - 1", correct: true },
            // { text: "T - 2", correct: false },
            // { text: "T - 3", correct: false },
            // { text: "T - 4", correct: false },
            // { text: "T - 5", correct: false },
            // { text: "T - 6", correct: false },
            // { text: "T - 7", correct: false },
            // { text: "T - 8", correct: false },
            // { text: "T - 9", correct: false }
        // ]
    // },
	// {
        // question: "chrapliwy ton prądu zmiennego, bez śladów muzykalności",
        // answers: [
            // { text: "T - 1", correct: false },
            // { text: "T - 2", correct: true },
            // { text: "T - 3", correct: false },
            // { text: "T - 4", correct: false },
            // { text: "T - 5", correct: false },
            // { text: "T - 6", correct: false },
            // { text: "T - 7", correct: false },
            // { text: "T - 8", correct: false },
            // { text: "T - 9", correct: false }
        // ]
    // },
	// {
        // question: "chrapliwy, niski ton prądu zmiennego, lekko muzykalny",
        // answers: [
            // { text: "T - 1", correct: false },
            // { text: "T - 2", correct: false },
            // { text: "T - 3", correct: true },
            // { text: "T - 4", correct: false },
            // { text: "T - 5", correct: false },
            // { text: "T - 6", correct: false },
            // { text: "T - 7", correct: false },
            // { text: "T - 8", correct: false },
            // { text: "T - 9", correct: false }
        // ]
    // },
	// {
        // question: "nieco chrapliwy ton prądu zmiennego",
        // answers: [
            // { text: "T - 1", correct: false },
            // { text: "T - 2", correct: false },
            // { text: "T - 3", correct: false },
            // { text: "T - 4", correct: true },
            // { text: "T - 5", correct: false },
            // { text: "T - 6", correct: false },
            // { text: "T - 7", correct: false },
            // { text: "T - 8", correct: false },
            // { text: "T - 9", correct: false }
        // ]
    // },
	// {
        // question: "ton dźwięczny, modulowany składową zmienną",
        // answers: [
            // { text: "T - 1", correct: false },
            // { text: "T - 2", correct: false },
            // { text: "T - 3", correct: false },
            // { text: "T - 4", correct: false },
            // { text: "T - 5", correct: true },
            // { text: "T - 6", correct: false },
            // { text: "T - 7", correct: false },
            // { text: "T - 8", correct: false },
            // { text: "T - 9", correct: false }
        // ]
    // },
	// {
        // question: "ton modulowany, lekko świszczący",
        // answers: [
            // { text: "T - 1", correct: false },
            // { text: "T - 2", correct: false },
            // { text: "T - 3", correct: false },
            // { text: "T - 4", correct: false },
            // { text: "T - 5", correct: false },
            // { text: "T - 6", correct: true },
            // { text: "T - 7", correct: false },
            // { text: "T - 8", correct: false },
            // { text: "T - 9", correct: false }
        // ]
    // },
	// {
        // question: "ton prawie czysty, lekko świszczący",
        // answers: [
            // { text: "T - 1", correct: false },
            // { text: "T - 2", correct: false },
            // { text: "T - 3", correct: false },
            // { text: "T - 4", correct: false },
            // { text: "T - 5", correct: false },
            // { text: "T - 6", correct: false },
            // { text: "T - 7", correct: true },
            // { text: "T - 8", correct: false },
            // { text: "T - 9", correct: false }
        // ]
    // },
	// {
        // question: "ton czysty",
        // answers: [
            // { text: "T - 1", correct: false },
            // { text: "T - 2", correct: false },
            // { text: "T - 3", correct: false },
            // { text: "T - 4", correct: false },
            // { text: "T - 5", correct: false },
            // { text: "T - 6", correct: false },
            // { text: "T - 7", correct: false },
            // { text: "T - 8", correct: true },
            // { text: "T - 9", correct: false }
        // ]
    // },
	// {
        // question: "bardzo czysty, dźwięczny ton",
        // answers: [
            // { text: "T - 1", correct: false },
            // { text: "T - 2", correct: false },
            // { text: "T - 3", correct: false },
            // { text: "T - 4", correct: false },
            // { text: "T - 5", correct: false },
            // { text: "T - 6", correct: false },
            // { text: "T - 7", correct: false },
            // { text: "T - 8", correct: false },
            // { text: "T - 9", correct: true }
        // ]
    // },
    // {
        // question: "T - 1",
        // answers: [
            // { text: "bardzo chrapliwy ton prądu zmiennego", correct: true },
            // { text: "chrapliwy ton prądu zmiennego, bez śladów muzykalności", correct: false },
            // { text: "chrapliwy, niski ton prądu zmiennego, lekko muzykalny", correct: false },
            // { text: "nieco chrapliwy ton prądu zmiennego ", correct: false },
            // { text: "ton dźwięczny, modulowany składową zmienną", correct: false },
            // { text: "ton modulowany, lekko świszczący", correct: false },
            // { text: "ton prawie czysty, lekko świszczący", correct: false },
            // { text: "ton czysty", correct: false },
            // { text: "bardzo czysty, dźwięczny ton", correct: false }
        // ]
    // },
    // {
        // question: "T - 2",
        // answers: [
            // { text: "bardzo chrapliwy ton prądu zmiennego", correct: false },
            // { text: "chrapliwy ton prądu zmiennego, bez śladów muzykalności", correct: true },
            // { text: "chrapliwy, niski ton prądu zmiennego, lekko muzykalny", correct: false },
            // { text: "nieco chrapliwy ton prądu zmiennego ", correct: false },
            // { text: "ton dźwięczny, modulowany składową zmienną", correct: false },
            // { text: "ton modulowany, lekko świszczący", correct: false },
            // { text: "ton prawie czysty, lekko świszczący", correct: false },
            // { text: "ton czysty", correct: false },
            // { text: "bardzo czysty, dźwięczny ton", correct: false }
        // ]
    // },
    // {
        // question: "T - 3",
        // answers: [
            // { text: "bardzo chrapliwy ton prądu zmiennego", correct: false },
            // { text: "chrapliwy ton prądu zmiennego, bez śladów muzykalności", correct: false },
            // { text: "chrapliwy, niski ton prądu zmiennego, lekko muzykalny", correct: true },
            // { text: "nieco chrapliwy ton prądu zmiennego ", correct: false },
            // { text: "ton dźwięczny, modulowany składową zmienną", correct: false },
            // { text: "ton modulowany, lekko świszczący", correct: false },
            // { text: "ton prawie czysty, lekko świszczący", correct: false },
            // { text: "ton czysty", correct: false },
            // { text: "bardzo czysty, dźwięczny ton", correct: false }
        // ]
    // },
    // {
        // question: "T - 4",
        // answers: [
            // { text: "bardzo chrapliwy ton prądu zmiennego", correct: false },
            // { text: "chrapliwy ton prądu zmiennego, bez śladów muzykalności", correct: false },
            // { text: "chrapliwy, niski ton prądu zmiennego, lekko muzykalny", correct: false },
            // { text: "nieco chrapliwy ton prądu zmiennego ", correct: true },
            // { text: "ton dźwięczny, modulowany składową zmienną", correct: false },
            // { text: "ton modulowany, lekko świszczący", correct: false },
            // { text: "ton prawie czysty, lekko świszczący", correct: false },
            // { text: "ton czysty", correct: false },
            // { text: "bardzo czysty, dźwięczny ton", correct: false }
        // ]
    // },
    // {
        // question: "T - 5",
        // answers: [
            // { text: "bardzo chrapliwy ton prądu zmiennego", correct: false },
            // { text: "chrapliwy ton prądu zmiennego, bez śladów muzykalności", correct: false },
            // { text: "chrapliwy, niski ton prądu zmiennego, lekko muzykalny", correct: false },
            // { text: "nieco chrapliwy ton prądu zmiennego ", correct: false },
            // { text: "ton dźwięczny, modulowany składową zmienną", correct: true },
            // { text: "ton modulowany, lekko świszczący", correct: false },
            // { text: "ton prawie czysty, lekko świszczący", correct: false },
            // { text: "ton czysty", correct: false },
            // { text: "bardzo czysty, dźwięczny ton", correct: false }
        // ]
    // },
    // {
        // question: "T - 6",
        // answers: [
            // { text: "bardzo chrapliwy ton prądu zmiennego", correct: false },
            // { text: "chrapliwy ton prądu zmiennego, bez śladów muzykalności", correct: false },
            // { text: "chrapliwy, niski ton prądu zmiennego, lekko muzykalny", correct: false },
            // { text: "nieco chrapliwy ton prądu zmiennego ", correct: false },
            // { text: "ton dźwięczny, modulowany składową zmienną", correct: false },
            // { text: "ton modulowany, lekko świszczący", correct: true },
            // { text: "ton prawie czysty, lekko świszczący", correct: false },
            // { text: "ton czysty", correct: false },
            // { text: "bardzo czysty, dźwięczny ton", correct: false }
        // ]
    // },
    // {
        // question: "T - 7",
        // answers: [
            // { text: "bardzo chrapliwy ton prądu zmiennego", correct: false },
            // { text: "chrapliwy ton prądu zmiennego, bez śladów muzykalności", correct: false },
            // { text: "chrapliwy, niski ton prądu zmiennego, lekko muzykalny", correct: false },
            // { text: "nieco chrapliwy ton prądu zmiennego ", correct: false },
            // { text: "ton dźwięczny, modulowany składową zmienną", correct: false },
            // { text: "ton modulowany, lekko świszczący", correct: false },
            // { text: "ton prawie czysty, lekko świszczący", correct: true },
            // { text: "ton czysty", correct: false },
            // { text: "bardzo czysty, dźwięczny ton", correct: false }
        // ]
    // },
    // {
        // question: "T - 8",
        // answers: [
            // { text: "bardzo chrapliwy ton prądu zmiennego", correct: false },
            // { text: "chrapliwy ton prądu zmiennego, bez śladów muzykalności", correct: false },
            // { text: "chrapliwy, niski ton prądu zmiennego, lekko muzykalny", correct: false },
            // { text: "nieco chrapliwy ton prądu zmiennego ", correct: false },
            // { text: "ton dźwięczny, modulowany składową zmienną", correct: false },
            // { text: "ton modulowany, lekko świszczący", correct: false },
            // { text: "ton prawie czysty, lekko świszczący", correct: false },
            // { text: "ton czysty", correct: true },
            // { text: "bardzo czysty, dźwięczny ton", correct: false }
        // ]
    // },
    // {
        // question: "T - 9",
        // answers: [
            // { text: "bardzo chrapliwy ton prądu zmiennego", correct: false },
            // { text: "chrapliwy ton prądu zmiennego, bez śladów muzykalności", correct: false },
            // { text: "chrapliwy, niski ton prądu zmiennego, lekko muzykalny", correct: false },
            // { text: "nieco chrapliwy ton prądu zmiennego ", correct: false },
            // { text: "ton dźwięczny, modulowany składową zmienną", correct: false },
            // { text: "ton modulowany, lekko świszczący", correct: false },
            // { text: "ton prawie czysty, lekko świszczący", correct: false },
            // { text: "ton czysty", correct: false },
            // { text: "bardzo czysty, dźwięczny ton", correct: true }
        // ]
    // },
    
    // Dodaj więcej pytań w razie potrzeby
];
