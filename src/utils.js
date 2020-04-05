import chroma from 'chroma-js';

const colorScale = chroma.scale(['#fefee9', '#ff0000']);
const defaultFill = [0, 0, 0, 0];

const getFillColor = (cases, colorMax=250) => {

  if (cases > 0) {
    return [...colorScale(cases / colorMax).rgb(), 150];
  }
  return defaultFill;
}

const onHover = (data, setToolTip) => {
  if (data.object) {
    
    const { x, y, object: { id, properties } } = data;
    const mappedProps = {
      name: properties.name,
      confirmed: properties.nombre_total_de_cas,
      deaths: properties.nombre_de_victimes,
      recovered: properties.nombre_de_personnes_retablies
    }

    setToolTip({ id, x, y, name: mappedProps.name, data: mappedProps })
  } else {
    setToolTip(null);
  }
}


export {
  getFillColor,
  onHover
}