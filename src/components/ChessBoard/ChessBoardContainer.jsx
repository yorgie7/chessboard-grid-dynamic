import React, { useEffect, useState } from "react";
import useDebounce from "../../customHooks/useDebounce";
import ChessBoard from "./ChessBoard";


const ChessBoardComponent = () => {

  const [size, setSize] = useState(8);
  const [isLoading, setLoading] = useState(true);

  /* using a custom hook to debounce
     the `size` state value in the `ChessBoardComponent` component.
   - Preventing un-necessary re-renders.
  */
  const [debouncedSize] = useDebounce(size, 500);

  const onChangeHandle = (e) => {
    setSize(Number(e.target.value));
    setLoading(true);
  }

  useEffect(() => {
    //size of board has been changed.
    return setLoading(false)

  }, [debouncedSize])

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-4">Dynamic Chessboard</h2>

      <div className="flex flex-row" >
        <div>
          <input
            type="number"
            value={size}
            min="2"
            max="20"
            onChange={onChangeHandle}
            className="mb-4 p-2 border rounded text-center w-20"
          />
        </div>

        {
          isLoading && <div className="px-6 py-3 text-lg font-bold italic">Please wait...</div>

        }

      </div>

      <div className="flex justify-center">
        <ChessBoard size={debouncedSize} />
      </div>
    </div>
  );
};

export default ChessBoardComponent;