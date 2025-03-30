import 'react';

declare module 'react' {
  interface SVGProps<T> extends React.ClassAttributes<T>, React.Attributes {
    // Allow glyph element and its attributes
    glyphRef?: string;
    glyphName?: string;
    orientation?: string;
    arabicForm?: string;
    // Add other glyph-specific attributes as needed
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Declare the glyph element
      glyph: React.DetailedHTMLProps<React.SVGProps<SVGElement>, SVGElement>;
    }
  }
}