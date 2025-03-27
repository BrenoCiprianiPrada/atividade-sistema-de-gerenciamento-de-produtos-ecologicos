import { AlimentoOrganico } from "./AlimentoOrganico";
import { ProdutoLimpezaBiodegradavel } from "./ProdutoLimpezaBiodegradavel";
import { ItemDecoracaoSustentavel } from "./ItemDecoracaoSustentavel";

const pera = new AlimentoOrganico("Pera Orgânica", 5.99, new Date("2024-12-31"));
const detergente = new ProdutoLimpezaBiodegradavel("Detergente Natural", 12.50, 500);
const pote = new ItemDecoracaoSustentavel("Pote de Vidro", 29.90, "Pote Reciclado");

pera.exibirDetalhes;
detergente.exibirDetalhes;
pote.exibirDetalhes;