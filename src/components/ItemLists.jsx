export default function ItemLists({ dId, dName, dPrice, key, onChangeValue }) {
  // function setTotalItem(event) {
  //   onChangeValue(event);
  // }
  return (
    <>
      <tr key={key}>
        <td className="w-25">{dId}</td>
        <td className="w-25">{dName}</td>
        <td className="w-25">{dPrice}</td>
        <td className="w-25">
          <div className="container mt-2 w-75 mx-auto">
            <input
              className="form-control"
              name={dName}
              defaultValue={""}
              onChange={onChangeValue}
              placeholder="Enter total no. of Items"
            ></input>
          </div>
        </td>
      </tr>
    </>
  );
}
