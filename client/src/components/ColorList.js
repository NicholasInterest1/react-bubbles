import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [colorToAdd, setColorToAdd] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/colors/${colorToEdit.id}`, colorToEdit)
      .then(res => {
        updateColors(
          colors.map(color => (color.id === res.data.id ? res.data : color))
        );
        setEditing(false);
      })
      .catch(err => console.log(err));
  };

  const deleteColor = color => {
    axiosWithAuth()
      .delete(`/colors/${color.id}`)
      .then(res => {
        updateColors(colors.filter(color => color.id !== res.data));
      })
      .catch(err => console.log(err));
  };

  const addColor = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/colors", colorToAdd)
      .then(res => {
        updateColors(res.data);
        setColorToAdd(initialColor);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="colors-wrap">
      <p>Colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color)}>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>Edit Color</legend>
          <label>
            Color Name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            Hex Code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">Save Color</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </form>
      )}
      <form onSubmit={addColor}>
        <legend>Add Color</legend>
        <label>
          Color Name:
          <input
            onChange={e =>
              setColorToAdd({ ...colorToAdd, color: e.target.value })
            }
            value={colorToAdd.color}
          />
        </label>
        <label>
          Hex Code:
          <input 
          onChange={e => setColorToAdd({ ...colorToAdd, code: { hex: e.target.value }
          })
        }
        value={colorToAdd.code.hex}
          />
        </label>
        <div className="button-row">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default ColorList;
