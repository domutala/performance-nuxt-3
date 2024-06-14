import type { ExternalVuetifyOptions } from "vuetify-nuxt-module";
import colors from "vuetify/util/colors";

const primaryColor = "#00ff00";
const secondaryColor = "#ffff0000";

export default {
  components: [
    "VApp",
    "VContainer",
    "VBtn",
    "VCard",
    "VDialog",
    "VForm",
    "VTextField",
    "VSelect",
    "VList",
    "VMenu",
    // "VNavigationDrawer",
    "VToolbar",
    "VIcon",
    "VProgressCircular",
    // "VProgressLinear",
    // "VSlider",
    // "VCarousel",
    "VTabs",
    "VTooltip",
    "VSnackbar",
    "VAvatar",
    "VBottomSheet",
  ],
  theme: {
    defaultTheme: "light",

    themes: {
      light: {
        dark: false,
        colors: {
          primary: primaryColor,
          secondary: secondaryColor,
          surface: "#e7e7e7",
          dark: colors.grey.darken4,
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: primaryColor,
          secondary: secondaryColor,
          dark: colors.grey.lighten5,
          background: "#0e0e0e",
        },
      },
    },
  },

  defaults: {
    VBtn: {
      style: { "text-transform": "none" },
      variant: "flat",
      color: "primary",
    },
    VTextField: {
      variant: "outlined",
    },
    VTextarea: {
      variant: "outlined",
    },
    VSelect: {
      variant: "outlined",
    },
    VBottomSheet: {
      color: "background",
      bgColor: "background",
      inset: true,
    },

    VCard: {
      color: "background",
    },
  },
} satisfies ExternalVuetifyOptions;
