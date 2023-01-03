import Container from "./Container";
import "./CategoriesStyle.css";

function Categories() {
  return (
    <Container customClass="categoriesFlex">
      <div className="tittle">Busque aqui</div>
      <div className="categories">
        <ul className="listCategories">
          <li className="itemList">Comunidade</li>
          <li className="itemList">Eventos</li>
          <li className="itemList">Mapa Pokémon</li>
          <li className="itemList">Clãs</li>
          <li className="itemList">Personagens</li>
          <li className="itemList">Ranking</li>
        </ul>
        <ul className="listHelper">
          <li className="itemHelper">Regras</li>
          <li className="itemHelper">Fórum</li>
          <li className="itemHelper">Suporte</li>
          <li className="itemHelper">Vídeos</li>
        </ul>
      </div>
    </Container>
  );
}

export default Categories;
