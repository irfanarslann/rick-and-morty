import { FC } from "react";
interface Types {
  setName: Function;
  name: string;
  modalActive: boolean;
  setfilterModalActive: Function;
  setOffset: Function;
}
const Filter: FC<Types> = ({
  setName,
  name,
  modalActive,
  setfilterModalActive,
  setOffset,
}) => {
  return (
    <div className="modal" style={{ display: modalActive ? "block" : "none" }}>
      <div className="modal-content">
        <div className="model-header">
          <span
            className="close"
            onClick={() => setfilterModalActive(!modalActive)}
          >
            &times;
          </span>
          <h1>Filter</h1>
        </div>

        <div className="radio-buttons">
          <div className="radio-button">
            <label htmlFor="morty"> Morty </label>
            <input
              id="morty"
              type="radio"
              name="Morty"
              value="morty"
              onChange={(e) => {
                setOffset(0);
                setName("Morty");
              }}
              checked={name === "Morty"}
            />
          </div>
          <div className="radio-button">
            <label htmlFor="morty"> Rick</label>
            <input
              id="rick"
              type="radio"
              name="rick"
              value="rick"
              onChange={(e) => {
                setOffset(0);
                setName("Rick");
              }}
              checked={name === "Rick"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
