declare global {
  interface Window {
    electron: any
  }
}

export const { electron } = window;