import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      console.log(monster, "monster");
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
