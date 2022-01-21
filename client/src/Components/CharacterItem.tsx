import { FC, memo } from "react";

type Character = {
  character: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: { name: string };
    location: { name: string };
    image: string;
    url: string;
    episode: string[];
    created: string;
  };
};

const CharacterItem: FC<Character> = memo(({ character }) => {
  return (
    <div className="character">
      <img src={character.image} alt="" />
      <div className="content">
        <h1>#id{character.id}</h1>
        <div className="bottom-section">
          <section className="name">
            <b>Name :</b>
            {character.name}
          </section>
          <section className="location">
            <b>Location :</b>
            {character.location.name}
          </section>
        </div>
      </div>
    </div>
  );
});

export default CharacterItem;
