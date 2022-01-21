import { NetworkStatus } from "@apollo/client";
import { FC } from "react";
import InView from "react-intersection-observer";
import CharacterItem from "./CharacterItem";

interface CharacterListProps {
  data: any;
  networkStatus: any;
  fetchMore: Function;
  name: string;
}

const CharacterList: FC<CharacterListProps> = ({
  data,
  networkStatus,
  fetchMore,
  name,
}) => {
  return (
    <div className="list">
      {data &&
        data.characters.map((character: any) => (
          <CharacterItem key={character.id} character={character} />
        ))}

      {data &&
        networkStatus !== NetworkStatus.fetchMore &&
        data.characters.length % 20 === 0 && (
          <InView
            onChange={(inView) => {
              if (inView) {
                setTimeout(() => {
                  fetchMore({
                    variables: {
                      offset: data.characters.length,
                      name,
                    },
                    updateQuery: (prev: any, { fetchMoreResult }: any) => {
                      if (!fetchMoreResult) return prev;
                      return Object.assign({}, prev, {
                        characters: [
                          ...prev.characters,
                          ...fetchMoreResult.characters,
                        ],
                      });
                    },
                  });
                }, 200);
              }
            }}
          />
        )}
    </div>
  );
};
export default CharacterList;
