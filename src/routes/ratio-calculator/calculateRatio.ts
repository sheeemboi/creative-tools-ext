   /**
    * 
    * @param newH - typeof number, user input Height
    * @param newW - typeof number, user input Width
    * @param w - typeof number, selected Width
    * @param h - typeof number, selected Height
    * @returns 
    */
export function calculateRatio(newH: number | undefined, newW: number | undefined, w: number, h: number) {
    if (!newH && !newW) {
      console.warn("entry should have at least 1 input.");
      return [];
    } else if (newH! <= 0 || newW !<= 0) {
      console.warn("entry should be positive number");
      return []; 

    } else if (newH && newW) {
      console.warn("entries are filled. delete one to calculate.");
      return [newH, newW];
    } else if (!newH && newW) {
      // height
      newH = (h / w) * newW;
      if (Number.isInteger(newH)) {
        return [newH, newW]
      }
      console.log("height:", newH);
      return [parseFloat(newH.toFixed(2)), newW];
    } else {
      // width
      newW = (w / h) * newH!;
      if (Number.isInteger(newW)) {
        return [newH, newW]
      }
      console.log("width:", newW);
      return [newH, parseFloat(newW.toFixed(2))];
    }
  }