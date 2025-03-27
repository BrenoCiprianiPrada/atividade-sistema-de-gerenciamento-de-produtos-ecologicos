import { AlimentoOrganico } from "./AlimentoOrganico";
import { ItemDecoracaoSustentavel } from "./ItemDecoracaoSustentavel";
import { ProdutoLimpezaBiodegradavel } from "./ProdutoLimpezaBiodegradavel";

const macaOrganica = new AlimentoOrganico("Maçã Orgânica", 5.99, new Date("2025-06-01"), ["Maçã"]);
macaOrganica.exibirDetalhes();

const detergenteBio = new ProdutoLimpezaBiodegradavel("Detergente Biodegradável", 12.50, 500);
detergenteBio.exibirDetalhes();

const vasoReciclado = new ItemDecoracaoSustentavel("Vaso de Vidro Reciclado", 45.00, "Vidro", { largura: 10, altura: 20, profundidade: 10 });
vasoReciclado.exibirDetalhes();