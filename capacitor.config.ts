import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'poemas-crud',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      androidSplashResourceName: "splash", // Obliga a buscar el archivo splash.png
      backgroundColor: "#FFFFFF",         // Cambia este valor por el color de tu fondo (ej. #FFFFFF para blanco)
      androidScaleType: "CENTER_CROP"     // Estira la imagen para cubrir la pantalla
    },
  },
};

export default config;
