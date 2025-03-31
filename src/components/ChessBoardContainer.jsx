import React, { useState, useMemo, useCallback } from "react";
import useDebounce from "../customHooks/useDebounce";
import ChessBoard from "./ChessBoard";


const ChessBoardComponent = () => {

  const [size, setSize] = useState(8);

 /* using a custom hook to debounce
    the `size` state value in the `ChessBoardComponent` component.
  - Preventing un-necessary re-renders.
 */
  const [debouncedSize] = useDebounce(size, 500);

  const ChessBoardMemo =  useMemo(() =><ChessBoard size={size} />, [debouncedSize]);

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-4">Dynamic Chessboard</h2>
      <input
        type="number"
        value={size}
        min="2"
        max="20"
        onChange={(e) => setSize(Number(e.target.value))}
        className="mb-4 p-2 border rounded text-center w-20"
      />

      <div className="flex justify-center">
        {ChessBoardMemo}
      </div>
    </div>

  );
};

export default ChessBoardComponent;
