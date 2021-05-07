const size = {
  small: 360,
  tablet: 768,
  header: 960,
  desktop: 1024,
  wide: 1260,
}

const mq = {
  small: `(min-width: ${size.small}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  tabletMax: `(max-width: ${size.tablet}px)`,
  header: `(min-width: ${size.header}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  wide: `(min-width: ${size.wide}px)`,
};

export default mq;
