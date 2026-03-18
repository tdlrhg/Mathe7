var aufgabenPool_1_7 = [
  {
    format: 'ablesen',
    frage: 'Lies die Koordinaten der Punkte A, B und C ab.',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 170" width="210" height="170" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <line x1="40" y1="130" x2="190" y2="130" stroke="#eee" stroke-width="1"/>
  <line x1="40" y1="107" x2="190" y2="107" stroke="#eee" stroke-width="1"/>
  <line x1="40" y1="84" x2="190" y2="84" stroke="#eee" stroke-width="1"/>
  <line x1="40" y1="61" x2="190" y2="61" stroke="#eee" stroke-width="1"/>
  <line x1="40" y1="38" x2="190" y2="38" stroke="#eee" stroke-width="1"/>
  <line x1="63" y1="25" x2="63" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="86" y1="25" x2="86" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="109" y1="25" x2="109" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="132" y1="25" x2="132" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="155" y1="25" x2="155" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="178" y1="25" x2="178" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="40" y1="130" x2="192" y2="130" stroke="#333" stroke-width="1.5"/>
  <line x1="40" y1="145" x2="40" y2="23" stroke="#333" stroke-width="1.5"/>
  <polygon points="192,126 198,130 192,134" fill="#333"/>
  <polygon points="36,23 40,16 44,23" fill="#333"/>
  <text x="200" y="134" font-size="10" fill="#333" font-family="Arial">x</text>
  <text x="33" y="14" font-size="10" fill="#333" font-family="Arial">y</text>
  <text x="33" y="134" font-size="8" fill="#666" font-family="Arial" text-anchor="end">0</text>
  <text x="63" y="142" font-size="8" fill="#666" font-family="Arial" text-anchor="middle">1</text>
  <text x="86" y="142" font-size="8" fill="#666" font-family="Arial" text-anchor="middle">2</text>
  <text x="109" y="142" font-size="8" fill="#666" font-family="Arial" text-anchor="middle">3</text>
  <text x="132" y="142" font-size="8" fill="#666" font-family="Arial" text-anchor="middle">4</text>
  <text x="155" y="142" font-size="8" fill="#666" font-family="Arial" text-anchor="middle">5</text>
  <text x="36" y="111" font-size="8" fill="#666" font-family="Arial" text-anchor="end">2</text>
  <text x="36" y="88" font-size="8" fill="#666" font-family="Arial" text-anchor="end">4</text>
  <text x="36" y="65" font-size="8" fill="#666" font-family="Arial" text-anchor="end">6</text>
  <text x="36" y="42" font-size="8" fill="#666" font-family="Arial" text-anchor="end">8</text>
  <circle cx="63" cy="107" r="5" fill="#3b5bdb" stroke="white" stroke-width="1.5"/>
  <text x="70" y="101" font-size="10" fill="#3b5bdb" font-weight="bold" font-family="Arial">A</text>
  <circle cx="109" cy="84" r="5" fill="#3b5bdb" stroke="white" stroke-width="1.5"/>
  <text x="116" y="78" font-size="10" fill="#3b5bdb" font-weight="bold" font-family="Arial">B</text>
  <circle cx="155" cy="38" r="5" fill="#3b5bdb" stroke="white" stroke-width="1.5"/>
  <text x="162" y="32" font-size="10" fill="#3b5bdb" font-weight="bold" font-family="Arial">C</text>
</svg>`,
    punkte: [{'name':'A','x':1,'y':2}, {'name':'B','x':3,'y':4}, {'name':'C','x':5,'y':8}]
  },
  {
    format: 'ablesen',
    frage: 'Lies die Koordinaten der Punkte A, B und C ab.',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 170" width="210" height="170" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <line x1="80" y1="25" x2="80" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="103" y1="25" x2="103" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="126" y1="25" x2="126" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="149" y1="25" x2="149" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="172" y1="25" x2="172" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="57" y1="25" x2="57" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="34" y1="25" x2="34" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="20" y1="85" x2="195" y2="85" stroke="#eee" stroke-width="1"/>
  <line x1="20" y1="62" x2="195" y2="62" stroke="#eee" stroke-width="1"/>
  <line x1="20" y1="108" x2="195" y2="108" stroke="#eee" stroke-width="1"/>
  <line x1="20" y1="39" x2="195" y2="39" stroke="#eee" stroke-width="1"/>
  <line x1="20" y1="131" x2="195" y2="131" stroke="#eee" stroke-width="1"/>
  <line x1="20" y1="85" x2="197" y2="85" stroke="#333" stroke-width="1.5"/>
  <line x1="80" y1="150" x2="80" y2="18" stroke="#333" stroke-width="1.5"/>
  <polygon points="197,81 203,85 197,89" fill="#333"/>
  <polygon points="76,18 80,11 84,18" fill="#333"/>
  <text x="205" y="89" font-size="10" fill="#333" font-family="Arial">x</text>
  <text x="73" y="9" font-size="10" fill="#333" font-family="Arial">y</text>
  <text x="74" y="89" font-size="8" fill="#666" font-family="Arial" text-anchor="end">0</text>
  <text x="103" y="93" font-size="8" fill="#666" font-family="Arial" text-anchor="middle">1</text>
  <text x="126" y="93" font-size="8" fill="#666" font-family="Arial" text-anchor="middle">2</text>
  <text x="149" y="93" font-size="8" fill="#666" font-family="Arial" text-anchor="middle">3</text>
  <text x="57" y="93" font-size="8" fill="#666" font-family="Arial" text-anchor="middle">-1</text>
  <text x="34" y="93" font-size="8" fill="#666" font-family="Arial" text-anchor="middle">-2</text>
  <text x="74" y="66" font-size="8" fill="#666" font-family="Arial" text-anchor="end">2</text>
  <text x="74" y="43" font-size="8" fill="#666" font-family="Arial" text-anchor="end">4</text>
  <text x="74" y="112" font-size="8" fill="#666" font-family="Arial" text-anchor="end">-2</text>
  <text x="74" y="135" font-size="8" fill="#666" font-family="Arial" text-anchor="end">-4</text>
  <circle cx="34" cy="131" r="5" fill="#3b5bdb" stroke="white" stroke-width="1.5"/>
  <text x="20" y="125" font-size="10" fill="#3b5bdb" font-weight="bold" font-family="Arial">A</text>
  <circle cx="103" cy="108" r="5" fill="#3b5bdb" stroke="white" stroke-width="1.5"/>
  <text x="110" y="102" font-size="10" fill="#3b5bdb" font-weight="bold" font-family="Arial">B</text>
  <circle cx="149" cy="62" r="5" fill="#3b5bdb" stroke="white" stroke-width="1.5"/>
  <text x="156" y="56" font-size="10" fill="#3b5bdb" font-weight="bold" font-family="Arial">C</text>
</svg>`,
    punkte: [{'name':'A','x':-2,'y':-4}, {'name':'B','x':1,'y':-2}, {'name':'C','x':3,'y':2}]
  },
  {
    format: 'ablesen',
    frage: 'Lies die Koordinaten der Punkte A, B und C ab.',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 170" width="210" height="170" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <line x1="40" y1="25" x2="40" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="63" y1="25" x2="63" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="86" y1="25" x2="86" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="109" y1="25" x2="109" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="132" y1="25" x2="132" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="155" y1="25" x2="155" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="178" y1="25" x2="178" y2="145" stroke="#eee" stroke-width="1"/>
  <line x1="20" y1="130" x2="195" y2="130" stroke="#eee" stroke-width="1"/>
  <line x1="20" y1="107" x2="195" y2="107" stroke="#eee" stroke-width="1"/>
  <line x1="20" y1="84" x2="195" y2="84" stroke="#eee" stroke-width="1"/>
  <line x1="20" y1="61" x2="195" y2="61" stroke="#eee" stroke-width="1"/>
  <line x1="20" y1="38" x2="195" y2="38" stroke="#eee" stroke-width="1"/>
  <line x1="20" y1="130" x2="197" y2="130" stroke="#333" stroke-width="1.5"/>
  <line x1="40" y1="150" x2="40" y2="18" stroke="#333" stroke-width="1.5"/>
  <polygon points="197,126 203,130 197,134" fill="#333"/>
  <polygon points="36,18 40,11 44,18" fill="#333"/>
  <text x="205" y="134" font-size="10" fill="#333" font-family="Arial">x</text>
  <text x="33" y="9" font-size="10" fill="#333" font-family="Arial">y</text>
  <text x="33" y="134" font-size="8" fill="#666" font-family="Arial" text-anchor="end">0</text>
  <text x="63" y="142" font-size="8" fill="#666" font-family="Arial" text-anchor="middle">1</text>
  <text x="86" y="142" font-size="8" fill="#666" font-family="Arial" text-anchor="middle">2</text>
  <text x="109" y="142" font-size="8" fill="#666" font-family="Arial" text-anchor="middle">3</text>
  <text x="132" y="142" font-size="8" fill="#666" font-family="Arial" text-anchor="middle">4</text>
  <text x="155" y="142" font-size="8" fill="#666" font-family="Arial" text-anchor="middle">5</text>
  <text x="36" y="111" font-size="8" fill="#666" font-family="Arial" text-anchor="end">1</text>
  <text x="36" y="88" font-size="8" fill="#666" font-family="Arial" text-anchor="end">2</text>
  <text x="36" y="65" font-size="8" fill="#666" font-family="Arial" text-anchor="end">3</text>
  <text x="36" y="42" font-size="8" fill="#666" font-family="Arial" text-anchor="end">4</text>
  <circle cx="63" cy="107" r="5" fill="#3b5bdb" stroke="white" stroke-width="1.5"/>
  <text x="70" y="101" font-size="10" fill="#3b5bdb" font-weight="bold" font-family="Arial">A</text>
  <circle cx="86" cy="84" r="5" fill="#3b5bdb" stroke="white" stroke-width="1.5"/>
  <text x="93" y="78" font-size="10" fill="#3b5bdb" font-weight="bold" font-family="Arial">B</text>
  <circle cx="155" cy="61" r="5" fill="#3b5bdb" stroke="white" stroke-width="1.5"/>
  <text x="162" y="55" font-size="10" fill="#3b5bdb" font-weight="bold" font-family="Arial">C</text>
</svg>`,
    punkte: [{'name':'A','x':1,'y':1}, {'name':'B','x':2,'y':2}, {'name':'C','x':5,'y':3}]
  }
];
