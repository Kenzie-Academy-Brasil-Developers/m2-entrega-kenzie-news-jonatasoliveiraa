const datas = [
	{
		id: 2,
		titulo: "Zé Neto se afasta dos palcos novamente e Cristiano assume shows",
		resumo: "Cantor apresentou um quadro de tosse, segundo informação confirmada pela assessoria de imprensa",
		noticia_completa: "https://www.metropoles.com/colunas/leo-dias/ze-neto-se-afasta-dos-palcos-novamente-e-cristiano-assume-shows",
		categoria: "Entretenimento",
		fonte: "Metrópoles",
		imagem: "https://uploads.metropoles.com/wp-content/uploads/2021/12/27133040/Design-sem-nome-100-2-600x400.jpg"
	},
	{
		id: 3,
		titulo: "Silmara Souza é a nova CMO da Kenzie Academy Brasil ",
		resumo: "A executiva acumula 15 anos de experiência em branding e comunicação digital",
		noticia_completa: "https://www.metropoles.com/colunas/m-buzz/silmara-souza-e-a-nova-cmo-da-kenzie-academy-brasil",
		categoria: "Négocios",
		fonte: "Metrópoles",
		imagem: "https://uploads.metropoles.com/wp-content/uploads/2022/06/14143634/unnamed-3-1-4-600x400.jpg"
	},
	{
		id: 5,
		titulo: "Bono, vocalista do U2, revela ter descoberto irmão: 'Estou em paz com isso'",
		resumo: "Bono afirmou que sua mãe Iris, que morreu em 1974, não sabia que seu marido havia tido um filho com outra mulher",
		noticia_completa: "https://www.correiobraziliense.com.br/diversao-e-arte/2022/06/5018094-bono-vocalista-do-u2-revela-ter-descoberto-irmao-estou-em-paz-com-isso.html",
		categoria: "Entretenimento",
		fonte: "Correio Brasiliense",
		imagem: "https://midias.correiobraziliense.com.br/_midias/jpg/2022/06/26/675x450/1__125608214_radio4_desertislanddiscs_bono_credit_amanda_benson_bbc-25945055.jpg?20220626144646?20220626144646"
	},
	{
		id: 6,
		titulo: "XP Educação lança faculdade com graduação gratuita, novos MBAs e cursos livres; saiba como se inscrever",
		resumo: "Graduação fornecerá cursos de Sistemas de Informação, Ciência de Dados, Análise de Desenvolvimento de Sistemas, Banco de Dados e Defesa Cibernética",
		noticia_completa: "https://www.infomoney.com.br/minhas-financas/xp-educacao-lanca-faculdade-com-graduacao-gratuita-novos-mbas-e-cursos-livres-saiba-como-se-inscrever/",
		categoria: "Educação",
		fonte: "InfoMoney",
		imagem: "http://morotin.com.br/hotelmorotin/wp-content/uploads/2018/03/formatura-2-1080x608.jpg"
	},
	{
		id: 7,
		titulo: "OS CAVALEIROS DO ZODÍACO: GUIA DE PERSONAGENS",
		resumo: "Conheça os principais personagens de Os Cavaleiros do Zodíaco!",
		noticia_completa: "https://www.legiaodosherois.com.br/lista/os-cavaleiros-do-zodiaco-guia-de-personagens.html#list-item-1",
		categoria: "Entretenimento",
		fonte: "Legião dos Heróis",
		imagem: "https://kanto.legiaodosherois.com.br/w1200-h628-cfill/wp-content/uploads/2022/06/legiao_j78uUoBWdNGX.png.jpeg"
	},
	{
		id: 8,
		titulo: "O filme de US$ 1 bilhão: ‘Top Gun: Maverick’ desbanca ‘Doutor Estranho’ e agora é a maior bilheteria de 2022",
		resumo: "Novo trabalho de Tom Cruise chega à casa do bilhão e torna-se o segundo filme de maior bilheteria desde o início da pandemia, atrás apenas do último Homem-Aranha",
		noticia_completa: "https://www.seudinheiro.com/2022/economia/top-gun-maverick-desbanca-doutor-estranho-rsgp/",
		categoria: "Entretenimento",
		fonte: "Seu Dinheiro",
		imagem: "https://media.seudinheiro.com/cdn-cgi/image/fit=contain,width=640&,format=auto/uploads/2022/05/tom-cruise-top-gun-628x353.jpg"
	},
	{
		id: 9,
		titulo: "Anitta e Post Malone encerram Rock in Rio Lisboa no meio de fogo de artifício e polémica com bandeira de Espanha",
		resumo: "Rapper norte-americano e cantora brasileira foram os responsáveis por trazer 80 mil pessoas à cidade do Rock. Último dia de festival contou ainda com as atuações dos portugueses HMB e de Jason Derulo no Palco Mundo",
		noticia_completa: "https://cnnportugal.iol.pt/rock-in-rio/rock-in-rio-lisboa/fenomenal-anitta-e-post-malone-encerram-rock-in-rio-lisboa-no-meio-de-fogo-de-artificio-e-polemica-com-bandeira-de-espanha/20220627/62b8f1800cf26256cd2afacc",
		categoria: "Entretenimento",
		fonte: "CNN",
		imagem: "https://pbs.twimg.com/media/FWNjMMmXEAUiAys?format=jpg&name=small"
	},
	{
		id: 10,
		titulo: "Esposa de Wesley Safadão vem a público para atualizar estado de saúde do cantor: “cuidados”",
		resumo: "Thyane Dantas, esposa do cantor Wesley Safadão, deu detalhes do quadro de saúde do artista; agenda de shows foi cancelada por conta da dor intensa",
		noticia_completa: "https://br.bolavip.com/entretenimento/Esposa-de-Wesley-Safadao-vem-a-publico-para-atualizar-estado-de-saude-do-cantor-cuidados-20220627-0136.html",
		categoria: "Entretenimento",
		fonte: "Bola VIP",
		imagem: "https://br.bolavip.com/_next/image?url=https%3A%2F%2Fbolavip.com%2F__export%2F1656366849452%2Fsites%2Fbolavip%2Fimg%2F2022%2F06%2F27%2Fcaptura_de_tela_2022-06-27_181824_crop1656366522704.png_1546398727.png&w=1920&q=75"
	},
	{
		id: 11,
		titulo: "Homem para em estrada para resgatar gatinho e cai em 'emboscada' com resto da ninhada",
		resumo: "Vídeo com reação de Robert Brantley ao perceber que estava cercado por mais de uma dezena de animais se tornou viral nas redes sociais. Caso aconteceu em Louisiana, nos EUA.",
		noticia_completa: "https://g1.globo.com/pop-arte/pets/noticia/2022/06/09/homem-ajuda-a-resgatar-gatinho-na-estrada-e-cai-em-emboscada-com-resto-da-ninhada.ghtml",
		categoria: "Notícias Gerais",
		fonte: "G1",
		imagem: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3241966:1654811417/Gatos.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=ba9cafc"
	}
]