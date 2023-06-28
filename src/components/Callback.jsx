import React from 'react';
import { useMemo, useState } from 'react';

export default function Callback(props) {
  return (
    <div>
      <h2>5. useCallback</h2>
      <p>
        Parecido a useMemo, pero en vez de devolver un valor en cache devuelve
        una funcion
      </p>
    </div>
  );
}
