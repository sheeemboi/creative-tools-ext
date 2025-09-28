
  /**
   Formula:
   
   for height:
   height = (original height/original width) * new width

   generally:
   (new width/original width) = (new height/original height)
  */
export function calculateRatio(newH: number, newW: number, w: number, h: number) {
    if (newH <= 0 || newW <= 0) {
      console.warn("entry should be positive number");
      return;
    } else if (!newH && !newW) {
      console.warn("entry should have at least 1 input.");
      return;
    } else if (newH && newW) {
      console.warn("entries are filled. delete one to calculate.");
      return;
    } else if (!newH && newW) {
      // height
      newH = (h / w) * newW;
      console.log("height:", newH);
      return;
    } else {
      // width
      newW = (w / h) * newH;
      console.log("width:", newW);
      return;
    }
  }