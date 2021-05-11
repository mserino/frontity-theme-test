import Root from './templates';
import link from "@frontity/html2react/processors/link";

export default {
  name: "maggies-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isUrlVisible: false,
      menuOpen: false,
    },
  },
  actions: {
    theme: {
      // @TODO: implement mobile menu
      // toggleMenu: ({ state }) => {
      //   state.theme.isMenuOpen = !state.theme.isMenuOpen
      // },
    },
  },
  libraries: {
    html2react: {
      processors: [link],
    },
  },
};
