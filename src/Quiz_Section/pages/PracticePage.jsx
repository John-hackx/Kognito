import React from "react";
import InlineMath from "@matejmazur/react-katex";
import BlockMath from "@matejmazur/react-katex";

function PracticePage() {
  return (
    <div>
      {/* Inline equation (e.g., $E=mc^2$) */}
      <InlineMath math="E = mc^2" />

      {/* Block equation (centered, e.g., $$ \frac{a}{b} $$) */}
      {/* <BlockMath math="\int_0^\infty x^2 dx" /> */}
    </div>
  );
}

export default PracticePage;
